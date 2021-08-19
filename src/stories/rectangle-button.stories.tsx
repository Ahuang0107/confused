import React from 'react';
import {Meta} from '@storybook/react';

import {RectangleButton} from "../rectangle-button";

export default {
  title: 'Example/RectangleButton',
  component: RectangleButton,
} as Meta;

export const Primary: React.VFC<{}> = () => <RectangleButton
    onClick={() => console.log('RectangleButton has been clicked')}/>;
