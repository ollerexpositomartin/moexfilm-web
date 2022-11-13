import React, { useEffect, useState } from "react";
import { useIndex } from "../customHooks/useIndex";
import { IconType, IconBase } from "react-icons/lib";
import { GenIcon } from "react-icons";
import { BsFillHouseFill, BsFilm, BsTvFill } from "react-icons/bs";

type DrawerButtonConf = {
  icon: IconType;
  name: string;
};

let ButtonCounter = {
  counter: -1,
};

function DrawerButton({ icon, name }: DrawerButtonConf) {
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
          index == buttonPosition ? "text-primary border-r-4  rounded-sm" : ""
        } border-primary font-Roboto  rounded-sm`}
      >
        {React.createElement(icon, {
          width: 15,
          height: 15,
          color: `${index == buttonPosition ? "#6419E6" : ""}`,
        })}
        {name}
      </a>
    </li>
  );
}

export default DrawerButton;
