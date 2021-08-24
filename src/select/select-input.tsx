import React, {Component} from "react";
import styled from "styled-components";
import {GlobalStyle} from "../global/global-styles";

export default class SelectInput extends Component {
    render() {
        return (
            <>
                <GlobalStyle/>
                <Input/>
            </>

        )
    }
}
const Input = styled.input`
  width: 20px;
  background-color: black;
  color: aliceblue;
`
