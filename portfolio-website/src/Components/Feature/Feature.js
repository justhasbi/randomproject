import React, { Fragment } from 'react';
import { Container } from '../../globalStyles';
import { FeatureSection, FeatureGridContainer, FeatureMainTitle, FeatureBox, FeatureTitle, FeatureText } from './Feature.Elemements';

function Feature({ featureTitle, featureElements}) {
    return (
        <Fragment>
            <FeatureSection>
                <Container>
                    <FeatureGridContainer>
                        <FeatureMainTitle>
                            <FeatureTitle>{featureTitle}</FeatureTitle>
                        </FeatureMainTitle>
                        {
                            featureElements.map(item => {
                                return(
                                    <FeatureBox key={item.id}>
                                        <FeatureText>{item.featureText}</FeatureText>
                                    </FeatureBox>
                                )
                            })
                        }
                    </FeatureGridContainer>
                </Container>
            </FeatureSection>
        </Fragment>
    )
}

export default Feature
