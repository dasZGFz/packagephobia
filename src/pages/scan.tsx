import React, { useState } from "react";
const toReact = require("svelte-adapter/react");

const SvelteApp= require("../scan.svelte");

const baseStyle = {
  width: "50%"
};

const SvelteInReact = toReact(SvelteApp, baseStyle, "div");

export default () => {
  const [count, setCount] = useState(10);

  const handleClick = () => setCount(prevCount => prevCount + 1);

  return (
    <div>
      <SvelteInReact
        number={count}
        onMagicalclick={handleClick}
        watchNumber={(n: any) => setCount(n)}
      />
      <button onClick={handleClick}>Increment - {count}</button>
    </div>
  );
};