import React, { Fragment } from 'react';
import { Card, CardText, CardTitle, CardDescription, BoxIcon } from './Services.Elements';
import { VscRocket } from 'react-icons/vsc';

function CardComponents() {
    return (
        <Fragment>
            <Card>
                <CardText>
                    <BoxIcon><VscRocket /></BoxIcon>
                    <CardTitle>Lorem ipsum</CardTitle>
                    <CardDescription>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.
                    </CardDescription>
                </CardText>
            </Card>
        </Fragment>
    )
}

export default CardComponents;