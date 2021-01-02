import React, { Fragment } from 'react';
import { Container } from '../../globalStyles';
import CardComponents from './CardComponents';
import { ServicesSection, SectionTag, MainTag, Heading, CardContainer } from './Services.Elements';

function Services() {
    return (
        <Fragment>
            <ServicesSection>
                <Container>
                    <SectionTag>
                        <MainTag>Skills</MainTag>
                        <Heading>Expertise</Heading>
                    </SectionTag>

                    <CardContainer>
                        <CardComponents />
                        <CardComponents />
                        <CardComponents />
                        <CardComponents />
                        <CardComponents />
                        <CardComponents />
                    </CardContainer>
                </Container>
            </ServicesSection>
        </Fragment>
    )
}

export default Services
