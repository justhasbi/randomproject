/*  act like global css style
    root css

*/
import { Link } from 'react-router-dom';
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Vidaloka&display=swap');
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
    
    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export const HiglightLink = styled(Link)`
    color: #fff;
    border-radius: 20px;
    background: linear-gradient(10deg, rgba(27,42,120,1) 0%, rgba(17,161,170,1) 100%);
    text-decoration: none;
    padding: 0.3em 0.8em;
`;

export const Button = styled.button`
    color: #fff;
    border: none;
    outline: none;
    border-radius: 20px;
    background: linear-gradient(10deg, rgba(27,42,120,1) 0%, rgba(17,161,170,1) 100%);
    text-decoration: none;
    padding: 0.5em 1.3em;
    font-size: 1em;
    cursor: pointer;
`

export default GlobalStyle;