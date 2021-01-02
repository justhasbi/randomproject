import React, { Fragment } from 'react';
import { Feature, InfoSection, Services } from '../../Components';
import { homeObj, featureSection } from './Data';

const Home = () => {
    return (
        <Fragment>
            <InfoSection {...homeObj} />
            <Feature {...featureSection} />
            <Services />
        </Fragment>
    )
};

export default Home;
