import React from 'react';
import {Meta} from '@storybook/react';
import {Avatar, AvatarStatus} from "./avatar";
import img from "./img.jpg";

export default {
  title: 'Example/Avatar',
  component: Avatar,
} as Meta;

export const NonStatus: React.VFC<{}> = () => <Avatar src={img} size={42}/>;
export const Online: React.VFC<{}> = () => <Avatar src={img} size={42}
                                                   status={AvatarStatus.ONLINE}/>;
export const Offline: React.VFC<{}> = () => <Avatar src={img} size={42}
                                                    status={AvatarStatus.OFFLINE}/>;
export const Busy: React.VFC<{}> = () => <Avatar src={img} size={42}
                                                 status={AvatarStatus.BUSY}/>;
