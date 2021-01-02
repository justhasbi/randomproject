import styled from 'styled-components';

export const InfoSec = styled.div`
    color: ${({lightBg}) => (lightBg ? '#fff' : '#1D2B32')};
    padding: 160px 0;
    background: ${({lightBg}) => (lightBg ? '#fff' : '#1D2B32')};
`;

export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 30px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px) {
        display:flex;
        max-width: 100%;
        flex-basis: 100%;
        justify-content: center;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    } 
`;

export const MainTag = styled.div`
    color: ${({lightMainTag}) => (lightMainTag ? '#000' : '#fff')};
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 15px;
`;

export const Heading = styled.h1`
    font-family: 'Vidaloka', serif;
    margin-bottom: 20px;
    font-size: 42px;
    line-height: 1.1;
    color: ${({lightText}) => (lightText ? '#000' : '#fff')};
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 28px;
    font-size: 16px;
    line-height: 24px;
    color: ${({lightTextDesc}) => (lightTextDesc ? '#000' : '#fff')};
`;

export const ImgWrapper = styled.div`
    max-width: 600px;
    display: flex;
    /* justify-content: ${({start}) => (start ? 'flex-start' : 'flex-end')}; */
    justify-content: center
`;

export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    display: inline-block;
    max-height: 600px;
    vertical-align: middle;
    
`;