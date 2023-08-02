import React from "react";
import { storiesOf } from "@storybook/react";
import Dropdown from "./Dropdown";

const options = ["Option 1", "Option 2", "Option 3"];

storiesOf("Dropdown", module)
  .add("Default", (args) => <Dropdown {...args} />)
  .add("With Options", (args) => <Dropdown {...args} />, {
    args: {
      options: options, // Make sure you provide valid options array here
      onChange: (event) => console.log("Selected Option:", event.target.value),
      selectedItem: options[0],
    },
  });
  
Dropdown.defaultProps = {
  options: [],
  onChange: () => {},
  selectedItem: null,
};
