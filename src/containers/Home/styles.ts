import styled from "styled-components";

interface TitleProps {
  primary?: boolean;
}

export const Title = styled.h1<TitleProps> `
    color: ${(props) => (props.primary ? "white" : "black")};
    background-color: green;
`;
