import * as React from "react"
import {AvatarClip, AvatarImage, StatusIcon, StyledAvatar} from "./style";

declare type AvatarPropsType = {
  src?: string,
  size?: 42 | 48 | 54 | 60,
  status?: AvatarStatus,
}

export enum AvatarStatus {
  ONLINE,
  OFFLINE,
  BUSY
}

export const Avatar = ({
                         src,
                         size = 48,
                         status,
                       }: AvatarPropsType) => {
  return (
    <>
      <StyledAvatar>
        {status != null && (<StatusIcon status={status}/>)}
        <AvatarClip size={size}>
          <AvatarImage src={src} size={size}/>
        </AvatarClip>
      </StyledAvatar>
    </>
  )
}
