import React, {Fragment} from "react";
import Grid from "@material-ui/core/Grid";

const PageLayout = ({children}) => (
    <Grid container justify={'center'}>
        {React.Children.map(children, child => (
            <Grid container item justify={'center'} xs={12} sm={3}>
                {child}
            </Grid>
        ))}
    </Grid>
);

export default PageLayout;