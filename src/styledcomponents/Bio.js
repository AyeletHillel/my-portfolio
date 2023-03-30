import styled from "styled-components"
import theme from "../json/theme.json"


export const BioContainer = styled.section`
text-align: center;
background-color: ${theme.color3};
color: ${theme.color1};
margin: auto;
`

export const BioImage = styled.img`
width: 40%;
object-fit: cover;
border-radius: 50px;`