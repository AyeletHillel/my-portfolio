import theme from "../json/theme.json"
import styled from "styled-components"

export const ProjectsContainer = styled.section`
display: flex;
flex-wrap: wrap;
padding: 10%;
justify-content: space-around;
background-color: ${theme.color3};
`

export const ProjectCard = styled.div`
width: fit-content;
text-align: center;
margin: 10px;
border: 2px solid ${theme.color4};
background-color: ${theme.color5};
border-radius: 10px;
color: ${theme.color1};`

export const ProjectImage = styled.img`
width: 550px;
border-radius: 10px;`

export const ProjectLink = styled.a`
width: 40%;
padding: 10px;
font-weight: bold;
color: ${theme.color1};`