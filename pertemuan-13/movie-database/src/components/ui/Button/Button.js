import styled, {css} from "styled-components";
import theme from "../../../utils/constants/theme";

const Button = styled.button`
padding: 0.6rem 2rem;
border: none;
border-radius: 10px;
color: #fff;
cursor: pointer;

background-color: ${({ variant, theme }) => 
theme.colors[variant] || theme.colors.primary};

font-size: ${( props ) => {
    if (props.size) {
        return theme.size[props.size].fontsize;
    } else {
        return theme.size["md"].fontsize;
    }
}};

padding: ${( props ) => {
    if (props.size) {
        return theme.size[props.size].padding;
    } else {
        return theme.size["md"].padding;
    }
}};

${(props) => props.full && css`
    display: block;
    width: 100%;
`};
`;

export default Button;
