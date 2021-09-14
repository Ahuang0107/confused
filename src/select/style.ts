import styled from "styled-components";
import {PullDownSVG} from "../icon";

const RealSelect = styled.div`
  position: relative;
  width: 500px;
  height: 24px;
  background: #262C33;
  border: 1px solid #0B0C0D;
  /*font style*/
  color: #fff;
  font-size: 12px;
  line-height: 24px;
  padding-left: 5px;

  user-select: none;

  &:hover {
    border: 1px solid #2483ff;
  }
`
const Options = styled.div<{
  show?: boolean
}>`
  visibility: ${({show}) => show ? "visible" : "hidden"};
  position: absolute;
  margin-top: 5px;
  background: #262C33;
  width: 500px;
  border: 1px solid #0B0C0D;

  user-select: none;

  &:hover {
    border: 1px solid #2483ff;
  }
`
const Option = styled.div`
  height: 24px;
  width: 100%;
  background: hsl(215, 15%, 8%);

  /*font style*/
  color: #A1AEB3;
  font-size: 12px;
  line-height: 24px;
  padding-left: 5px;

  &:hover {
    background: #1B3964;
    border-left: 2px solid #2483ff;
  }
`
const PullDown = styled.span`
  user-select: none;

  right: 3px;
  box-sizing: border-box;
  position: absolute;
  height: 100%;

  /*v-center the svg element it content*/
  line-height: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`

const PullDownIcon = styled(PullDownSVG)`
  width: 12px;
  height: 12px;
`
export {
  RealSelect,
  Options,
  Option,
  PullDown,
  PullDownIcon,
}
