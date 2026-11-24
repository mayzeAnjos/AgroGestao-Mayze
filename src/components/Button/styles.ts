import styled from "styled-components";

interface TitleProps {
  primary?: boolean;
}

export const MyButton = styled.button<TitleProps> `
    color: ${(props) => (props.primary ? "white" : "black")};
    background-color: green;
    width: 300px;
    height: 100px;
`;
