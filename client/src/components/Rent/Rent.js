import React from "react";
import styled from 'styled-components';
import { theme } from '../../utils/theme';
import { Link } from "gatsby"
// import data from '../../data.json'
import rentCloud from '../../images/rent_cloud.png'

const RentContainer = styled.div`
${theme.flex.centered};
height: 100%;
padding: 2%;

${theme.media.tablet} {
    flex-direction: column;
}

${theme.media.iphone5} {
    margin-top: 45%;
}
`;

const CloudElement = styled.div`
max-width: 100%;
padding: 2%;
position: relative;

img {
    opacity: 0;
    ${theme.responsiveImg};
    filter: grayscale(100%);
}

p {
    ${theme.font.indie};
    font-size: 4rem;
    color: ${theme.colors.primary};
    text-align: center;
    height: 300px;
    width: 300px;
    line-height: 300px;
    opacity: .6;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 5px solid ${theme.colors.primary};
    border-radius: 50%;
    z-index: 1;

    @media not all and (hover: none) {
        &:hover  {
            font-size: 5rem;
            text-shadow: 0 0 5px #fff;
            color: ${({ hover1 }) => hover1 ? 'skyblue' : theme.colors.primary};
            opacity: 1;
            border: none;
        }
    }

    ${theme.media.desktop} {
        height: 200px;
        width: 200px;
        line-height: 200px;
    }
    
    ${theme.media.mobile} {
        height: 150px;
        width: 150px;
        line-height: 150px;
        font-size: 2rem;
    }
}

 a:hover ~ img {
       opacity: 1;
       transform: rotate(5deg);
       filter: ${({ hover1, hover2 }) => hover2 ? 'grayscale(0%)' : hover1 ? "hue-rotate(260deg)  saturate(9) invert(100%)" : 'grayscale(100%)'};
       transition-duration: 1s;
   }

    ${theme.media.tablet} {
        max-height: 50%;
        max-width: 50%;
    }
`;


const Rent = () => (
    <>
        <RentContainer>
            <CloudElement>
                <Link as="a" to="/propertiesList" state={{ route: '"plebs"' }}>
                    <p>plebs</p>
                </Link>
                    <img src={rentCloud} alt="plebs" />
            </CloudElement>
            <CloudElement hover1>
                <Link as="a" to="/propertiesList" state={{ route: '"vip"' }} >
                    <p >vip</p>
                </Link>
                    <img src={rentCloud} alt="vip" />
            </CloudElement>
            <CloudElement hover2>
                <Link as="a" to="/propertiesList" state={{ route: '"gift"' }}>
                    <p>gift</p>
                </Link>
                    <img src={rentCloud} alt="gift" />
            </CloudElement>
        </RentContainer>
    </>
);

export default Rent;