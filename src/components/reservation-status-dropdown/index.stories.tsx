import React from "react";
import { Meta } from "@storybook/react";
import ReservationStatusDropdown from './index';

export default {
  title: 'component/ReservationStatusDropdown',
  component: ReservationStatusDropdown
} as Meta;

export const Available : React.VFC<{}> = () => <ReservationStatusDropdown ></ReservationStatusDropdown>;
