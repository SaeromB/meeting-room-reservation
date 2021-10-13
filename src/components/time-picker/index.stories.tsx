import React from "react";
import { Meta } from "@storybook/react";
import TimePicker from "./index";

export default {
  title: 'component/TimePicker',
  component: TimePicker
} as Meta;

export const Default : React.VFC<{}> = () => <TimePicker ></TimePicker>;
