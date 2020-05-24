import React from "react";
import styled from 'styled-components';
import { theme } from '../../utils/theme';
import { Roller } from "react-awesome-spinners";

const StyledSpinner = styled.div`
${theme.flex.centered};

div{
    position: absolute;
    top: 50%;
}
`

const Spinner = () => {

    return (
        <StyledSpinner >
            <Roller color="#040026" />
        </StyledSpinner>
    )
}

export default Spinner;