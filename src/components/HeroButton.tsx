import React, { useEffect } from "react";
import { useIndex } from "../customHooks/useIndex";

type ButtonConf = {
  name: string;
};

let ButtonCounter = {
  counter: -1,
};

function HeroButton({ name }: ButtonConf) {
  const { index, setPositionIndex } = useIndex();

  useEffect(() => {
    ButtonCounter.counter = -1;
  });
  ButtonCounter.counter++;

  let buttonPosition = ButtonCounter.counter;

  return (
    <li>
      <a
        onClick={() => {
          setPositionIndex(buttonPosition);
        }}
        className={`${
          index == buttonPosition ? "text-white" : ""
        } font-Roboto hover:bg-transparent`}
      >
        {name}
      </a>
    </li>
  );
}

export default HeroButton;
