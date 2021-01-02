import styled from 'styled-components';

export const ServicesSection = styled.div`
    background: #112229;
    padding: 50px 0;
`;

export const SectionTag = styled.div`
    margin-bottom: 50px;
    color: #fff
`;

export const MainTag = styled.p`
    font-size: 1em;
`;

export const Heading = styled.h2`
    
`;

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 35px;

    @media screen and (max-width: 868px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 512px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Card = styled.div`
    background: #112229;
    border: 3px solid #1A9171;
    border-radius: 8px;
    padding: 25px;
    color: #fff;
    cursor: pointer;
    

    &:hover {
        transform: translate(10px, -10px);
        transition: all 0.3s ease;
        background: linear-gradient(10deg, #0A4838 0, #11AA81 100%);
        border: none;
        box-shadow: -10px 10px 0 -3px #112229, -10px 10px #1A9171;
    }
` ;

/* box-shadow: 10px -10px 0 -3px var(--background), 10px -10px var(--green) */

export const CardText = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CardTitle = styled.h3`
    margin-bottom: 20px;
`;

export const CardDescription = styled.p`
    font-size: 0.9em;
    line-height:1.6;
`;

export const BoxIcon = styled.div`
    font-size: 2.5em;
    margin-bottom: 20px;
`;