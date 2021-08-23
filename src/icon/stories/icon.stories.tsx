import React from 'react';
import {Meta} from '@storybook/react';

import {LayerIcon, ModuleIcon, SideBarIcon} from "../index";

export default {
    title: 'Example/Icon',
} as Meta;

export const Icon01: React.VFC<{}> = () => <LayerIcon/>;
export const Icon02: React.VFC<{}> = () => <ModuleIcon/>;
export const Icon03: React.VFC<{}> = () => <SideBarIcon/>;
