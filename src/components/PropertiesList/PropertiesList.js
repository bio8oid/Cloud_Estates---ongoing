import React from "react";
import styled from 'styled-components';
import { theme } from '../../utils/theme';
// import { Link } from "gatsby"
import data from '../../data.json'

const PropertiesContainer = styled.div`
${theme.flex.centered};
/* height: 100%; */
/* width: 100%; */
padding: 2%;
`;

// const CloudCard = styled.div`
// ${theme.flex.centeredColumn};
// ${theme.font.indie};
// height: 100%;
// width: 100%;
// /* height: 500px; */
// /* width: 100%; */
// margin: 2%;
// background: #ededed;
// /* background: #e0fcff; */
// border-radius: 25px;
// box-shadow: 0 0 70px #737373;
// /* border: 2px solid #000; */
// `;

const CloudImage = styled.div`
${theme.font.indie};
box-shadow: 0 0 70px #737373;
margin: 2%;
border-radius: 25px;
/* padding: 20px; */
position: relative;
opacity: .6;

img {
    ${theme.responsiveImg};
    border-radius: 25px;
    /* border: 2px solid #000; */
}

    @media not all and (hover: none) {
	&:hover {
    opacity: 1;
	}
}
`;

const CloudTitle = styled.h4`
${theme.font.size2};
/* font-weight: bolder; */
position: absolute;
top: ${({ titlePosition }) => titlePosition ? '0' : 'none'};
left: ${({ titlePosition }) => titlePosition ? '0' : 'none'};
/* top: none; */
/* left: none; */
/* background: #f5feff; */
/* border-radius: 10px; */
padding: 0 20px;
margin: 0;
/* -webkit-text-stroke: .1px #fff; */
text-shadow: 0 0 15px #fff;
/* opacity: 1 !important; */
/* color: white; */
/* margin: 10px; */
`;

const CloudPrice = styled(CloudTitle)`
${theme.font.size3};
right: ${({ pricePosition }) => pricePosition ? '0' : 'none'};
bottom: ${({ pricePosition }) => pricePosition ? '0' : 'none'};
/* top: 100%;
left: 100%;
bottom: 0px;
right: 0px; */
`;


const PropertiesList = () => (
    <>
        <PropertiesContainer>

            {data.map((item) => (
                // <Link to="/product">
                // <CloudCard key={item.id}>
                <CloudImage key={item.id}>
                    <CloudTitle titlePosition>
                        {item.title}
                    </CloudTitle>
                        <img src={item.img} alt={item.title} />
                    <CloudPrice pricePosition>
                        {item.price} £ PM
                    </CloudPrice>
                    </CloudImage>
                // {/* </CloudCard> */}
                // </Link>
            ))}

        </PropertiesContainer>
    </>
);

export default PropertiesList;