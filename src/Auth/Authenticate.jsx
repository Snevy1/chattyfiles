import { useState } from "react";
//import React from "react";

export default function Authenticate() {
  const [sign, setSign] = useState(false);
  if (sign === false) {
    setSign(true);
  } else {
    return <div>Authenticate</div>;
  }
}
