import React from 'react';
import {Meta} from '@storybook/react';

import {LayerSVG, ModuleSVG, SideBarSVG} from "../index";

export default {
  title: 'Example/Icon',
} as Meta;

export const Icon01: React.VFC<{}> = () => <LayerSVG/>;
export const Icon02: React.VFC<{}> = () => <ModuleSVG/>;
export const Icon03: React.VFC<{}> = () => <SideBarSVG/>;
