var redis = require('redis-mock');

const { REDIS_HOST = '127.0.0.1', REDIS_PORT = '14555', REDIS_PASS = 'asdf' } = process.env;

const client = redis.createClient({
    host: REDIS_HOST,
    port: parseInt(REDIS_PORT),
    password: REDIS_PASS,
});

client.on('error', (err: any) => {
    console.error('Redis error: ', err);
});

export function findAll(name: string) {
    return new Promise<{ [key: string]: PkgSize }>((resolve, reject) => {
        client.hgetall(name, (err: any, reply: { [x: string]: string; }) => {
            if (err) {
                reject(err);
            } else {
                const obj: { [key: string]: PkgSize } = {};
                for (let version in reply) {
                    const payload: PkgSize = JSON.parse(reply[version]);
                    payload.name = name;
                    payload.version = version;
                    obj[version] = payload;
                }
                resolve(obj);
            }
        });
    });
}

export function findOne(name: string, version: string) {
    return new Promise<PkgSize | null>((resolve, reject) => {
        client.hget(name, version, (err: any, reply: string) => {
            if (err) {
                reject(err);
            } else {
                if (!reply) {
                    resolve(null);
                } else {
                    let record: PkgSize = JSON.parse(reply);
                    record.name = name;
                    record.version = version;
                    resolve(record);
                }
            }
        });
    });
}

export function insert(data: PkgSize) {
    return new Promise<number>((resolve, reject) => {
        const { name, version, ...payload } = data;
        const value = JSON.stringify(payload);
        client.hset(name, version, value, (err: any, reply: number | PromiseLike<number> | undefined) => {
            if (err) {
                reject(err);
            } else {
                resolve(reply);
            }
        });
    });
}
