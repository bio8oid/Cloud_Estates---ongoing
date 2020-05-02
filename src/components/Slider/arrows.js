import React from "react"
import styled from 'styled-components'
import { theme } from '../../utils/theme';


const StyledArrows = styled.div`
    border: 3px solid orange;
    padding: 2em;
    border-radius: 50%;
    color: violet;
    `;
    
    // background: ${({ theme }) => theme.colors.mainGradient};
    // background: ${theme.colors.mainGradient};

const ArrowComponent = ({ onClick, direction }) => {
    return (
        <StyledArrows>
            <div onClick={onClick} >
                {direction}
            </div>
        </StyledArrows>
    );
};


export default ArrowComponent;


// const BulletComponent = ({ onClick, isActive }) => (
//   <li
//     style={{
//       // width: '25px',
//       // height: '25px',
//       background: 'white',
//       // margin: '0 2px',
//       // opacity: isActive && '0.5'
//     }}
//     onClick={onClick}
//   />
// );

// BulletComponent.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   isActive: PropTypes.bool.isRequired
// };