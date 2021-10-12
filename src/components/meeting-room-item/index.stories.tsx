import React from 'react'
import MeetingRoomItem from './index'
import { Meta } from '@storybook/react'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'component/MeetingRoomItem',
  component: MeetingRoomItem
} as Meta;

export const Primary: React.VFC<{}> = () => <MeetingRoomItem primary></MeetingRoomItem>;
