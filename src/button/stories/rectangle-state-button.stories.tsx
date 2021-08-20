import React from 'react';
import {Meta} from '@storybook/react';
import {RectangleStateButton} from "../rectangle-state-button";
import {LayerIcon} from "../../icon/index";

export default {
    title: 'Example/RectangleStateButton',
    component: RectangleStateButton,
} as Meta;

export const Primary: React.VFC<{}> = () => <RectangleStateButton
    onClick={() => console.log('RectangleButton has been clicked')}>
    <LayerIcon/>
</RectangleStateButton>;
