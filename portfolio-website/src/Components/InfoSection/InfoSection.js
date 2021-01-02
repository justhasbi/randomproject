import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import { 
    InfoSec, 
    InfoRow, 
    InfoColumn, 
    TextWrapper, 
    MainTag, 
    Heading, 
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSection.Elements';

function InfoSection({ 
    lightBg, 
    imgStart, 
    lightMainTag, 
    lightText, 
    lightTextDesc, 
    mainTag, 
    headline,
    description,
    img,
    alt,
    start
}) {
    return (
        <Fragment>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <MainTag lightMainTag={lightMainTag}>{mainTag}</MainTag>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to='/sign-up'>
                                    <Button primary>More</Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt}/>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </Fragment>
    )
};

export default InfoSection;
