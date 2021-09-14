import * as React from "react"
import {useState} from "react"
import {GlobalStyle} from "../global/global-styles"
import {Option, Options, PullDown, PullDownIcon, RealSelect} from "./style";

declare type Option = {
  key: number,
  value: string,
}
declare type SelectPropsType = {
  options: Option[],
  value: number,
  onChange: (value: number) => void
}

export const Select = ({
                         options = [],
                         value,
                         onChange,
                       }: SelectPropsType) => {
  const [showOption, setShowOption] = useState(false)

  function getValueFromOption(key: number | undefined, options: Option[]) {
    if (typeof key == "undefined") {
      return null
    }
    for (let x of options) {
      if (key == x.key) {
        return x.value
      }
    }
  }

  function handleSelect(option: Option) {
    onChange(option.key)
    setShowOption(!showOption)
  }

  return (
    <>
      <GlobalStyle/>
      <RealSelect onClick={() => setShowOption(!showOption)}>
        {getValueFromOption(value, options)}
        <PullDown>
          <PullDownIcon/>
        </PullDown>
      </RealSelect>
      <Options show={showOption}>
        {options?.map(option => <Option
          onClick={() => handleSelect(option)}>{option.value}</Option>)}
      </Options>
    </>
  )
}
