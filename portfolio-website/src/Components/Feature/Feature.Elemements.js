import styled from 'styled-components';

export const FeatureSection = styled.div`
    background: #112229;
    padding: 100px 0 50px 0;
`;

export const FeatureGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    justify-content: center;
    color: #fff;
    
    @media screen and (max-width: 868px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 512px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const FeatureMainTitle = styled.div`
    display:flex;
    align-items: center;

    @media screen and (max-width: 512px) {
        text-align: center;
        margin-bottom: 20px;
    }
`;

export const FeatureTitle = styled.h2`
    font-weight: normal;
    line-height: 1.1;

`;

export const FeatureBox = styled.div`
    display:flex;
    align-items: center;
    border-left: 4px solid #1A9171;
    padding: 15px 15px;
`;

export const FeatureText = styled.p`
    font-size: 1.1em;
`

