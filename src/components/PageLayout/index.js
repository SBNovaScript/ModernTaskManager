import React, {Fragment} from "react";
import Grid from "@material-ui/core/Grid";

const PageLayout = ({children}) => (
    <Fragment>
        {React.Children.map(children, child => (
            <Grid container justify={'center'}>
                {child}
            </Grid>
        ))}
    </Fragment>
);

export default PageLayout;