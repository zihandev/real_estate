
import styled from "styled-components";
import defaultImg from "../../Images/home2.jpg"

const StyledHero = styled.header`
min-height : 60vh;
background : url(${props=>(props.img ? props.img : defaultImg)});
background-size : cover;
background-repeat : no-repeat;
display: flex;
align-items: center;
justify-content: center;
`;

export default StyledHero;