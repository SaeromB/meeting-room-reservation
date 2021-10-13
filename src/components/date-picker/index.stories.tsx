import React from 'react'
import { Meta } from '@storybook/react'
import DatePicker from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'component/DatePicker',
  component: DatePicker
} as Meta;

export const Default: React.VFC<{}> = () => <DatePicker></DatePicker>;
