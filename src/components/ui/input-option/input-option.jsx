import React from "react";

import classes from "./input-option.module.css";
import { addClasses } from "../../../utils/index";

const InputOption = ({ Icon, title, color, className }) => {
  return (
    <div
      className={addClasses(
        classes["input-option"],
        classes[`input-option__${color}`]
      )}
    >
      <Icon color={color} className={className} />
      <h4>{title}</h4>
    </div>
  );
};

export default InputOption;
