import React, {Component} from 'react';
import './dashboard.scss';
import Sidebar from '../sidebar/sidebar';
import Content from '../content/content';

import Grid from '@material-ui/core/Grid';

class Dashboard extends Component{
    
    render(){
        return(
            <div>
                <Grid container spacing={24}>
                    <Grid item sm={4}>
                        <Sidebar/>
                    </Grid>
                    <Grid item sm={8}>
                        <Content/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Dashboard;