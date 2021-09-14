import React, {useState} from 'react';
import {Meta} from '@storybook/react';
import {Select} from "./select";

export default {
  title: 'Example/Select',
  component: Select,
} as Meta;

export const Primary: React.VFC<{}> = () => {
  const options = [
    {
      key: 1,
      value: "R5 5600X"
    },
    {
      key: 2,
      value: "R7 5700X"
    },
    {
      key: 3,
      value: "R7 5800X"
    },
    {
      key: 4,
      value: "R9 5900X"
    },
    {
      key: 5,
      value: "R9 5950X"
    },
  ]
  const [value, setValue] = useState(1)
  return (
    <Select options={options}
            value={value}
            onChange={setValue}/>
  )
};
