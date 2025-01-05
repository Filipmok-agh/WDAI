import React, { useState } from "react";
import Przycisk from "./przycisk";

function NowyLicznik() {
  const [cnt, setCnt] = useState(0);

  function increase() {
    setCnt(cnt + 1);
  }

  return (
    <div>
      <p>{cnt}</p>
      <Przycisk onClick={increase} />
    </div>
  );
}

export default NowyLicznik;
