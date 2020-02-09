import React from "react";
import PageLayout from "../../components/PageLayout";
import Typography from "@material-ui/core/Typography";

const About = () => {

    const AboutSection = () => (
        <Typography variant={'h2'}>
            {'About Us:'}
        </Typography>
    );

    return (
        <PageLayout>
            <AboutSection/>
        </PageLayout>
    );

};

export default About;