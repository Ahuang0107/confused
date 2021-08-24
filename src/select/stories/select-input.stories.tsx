import React from 'react';
import {Meta} from '@storybook/react';
import SelectInput from "../select-input";

export default {
    title: 'Example/Select',
} as Meta;

const DatasourceTypeOption = [
    {
        value: 1,
        label: "API",
    },
]
export const Icon01: React.VFC<{}> = () => {
    return (
        <SelectInput/>
    )
};
