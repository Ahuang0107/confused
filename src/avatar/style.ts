import styled, {css} from "styled-components";
import {AvatarStatus} from "./avatar";

const circleMixinFunc = (color?: string) => css`
  content: "";
  display: block;
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${color};
`

const StyledAvatar = styled.div`
  position: relative;
`
const StatusIcon = styled.div<{
  status?: AvatarStatus
}>`
  position: absolute;
  left: 2px;
  right: 4px;

  &::before {
    ${circleMixinFunc("white")}

    transform: scale(2);
  }

  &::after {
    ${({status}) => circleMixinFunc(statusColor(status))}
  }
`
const statusColor = (status?: AvatarStatus) => {
  switch (status) {
    case AvatarStatus.ONLINE:
      return "green"
    case AvatarStatus.OFFLINE:
      return "red"
    case AvatarStatus.BUSY:
      return "orange"
  }
}
const AvatarClip = styled.div<{
  size?: number
}>`
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  border-radius: 50%;
  overflow: hidden;
`
const AvatarImage = styled.img<{
  size?: number
}>`
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
`
export {StyledAvatar, StatusIcon, AvatarClip, AvatarImage}
