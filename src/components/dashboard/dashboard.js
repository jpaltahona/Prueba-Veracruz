import React, {Component} from 'react';
import './dashboard.scss';
import Sidebar from '../sidebar/sidebar';
import Content from '../content/content';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';


class Dashboard extends Component{
    
    render(){
        return(
            <div>
                <Grid container spacing={24}>
                <Hidden smDown> 
                    <Grid item md={2}>
                        <Sidebar className="sidebar"/>
                    </Grid>
                </Hidden>
                    <Grid item md={10} xs={12}>
                        <Content/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Dashboard;