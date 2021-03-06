import React, {useState} from "react";
import styled from "styled-components";
import {GlobalStyle} from "../global/global-styles";

export const RectangleStateButton = (props: {
    name?: string,
    children?: React.ReactNode,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}): JSX.Element => {
    const {onClick} = props
    //管理按钮被激活的状态
    const [isActive, setIsActive] = useState(true)

    return (
        <>
            <GlobalStyle/>
            <RealButton isActive={isActive}
                        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                            onClick(event)
                            setIsActive(!isActive)
                        }}>
                {props.children}
            </RealButton>
        </>

    )
}
const RealButton = styled.button<{
    isActive: boolean
}>`
  width: 40px;
  height: 24px;
  background-color: ${props => props.isActive ? 'var(--datav-main-color)' : 'var(--datav-btn-bg-default)'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  box-shadow: inset 0 0 0 1px rgb(255 235 235 / 10%), 0 0 0 1px #181818;
  transition: .2s;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.isActive ? 'var(--datav-main-hover-color)' : 'var(--datav-btn-bg-hover)'};
  }
`
