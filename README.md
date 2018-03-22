# Package Phobia

⚖️ Find the cost of adding a new dev dependency to your project

Inspired by [bundlephobia](https://github.com/pastelsky/bundlephobia) and [cost-of-modules](https://github.com/siddharthkp/cost-of-modules).

## How is this different?

- Package Phobia reports the install size of a package.
- Bundle Phobia reports the size after webpack bundles the code.
- Cost Of Modules reports the size of your currently installed packages.

## What is the purpose?

The idea is to check the size of an npm package before you install it. This is useful for comparing `devDependencies` without using up disk space. A good use case might be comparing test harnesses (ava vs tape) or even bundlers (webpack vs browserify).

## Authors

Developed by [ceriously.com](https://www.ceriously.com)