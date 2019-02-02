import React, {Component} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import './content.scss';
import Icon from '@material-ui/core/Icon'
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';


class Content extends Component{
    constructor(){
        super();
        this.state = {
            anchorEl: null,
        };
    }

    handelClick = event =>{
        this.setState({anchorEl: event.currentTarget});
    }
    handelClose = () =>{
        this.setState({anchorEl: null});
    }

    render(){
        const {anchorEl} = this.state;
        return(
            <div>
                <Toolbar className="toolbar">
                <div className="toolbar__content">
                    <h2 className="toolbar__content__info">
                    <Icon className="icon">brightness_low</Icon>RED
                    </h2>
                </div>
                <div className="toolbar__user">
                <Typography variant="h6">Jhon Smith</Typography>
                    <Avatar 
                        arias-owns={anchorEl ? 'simple-menu': undefined}
                        arias-haspopup="true"
                        onClick={this.handelClick}>
                        <Icon >perm_identity</Icon>
                    </Avatar>
                    <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handelClose}>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </Menu>
                </div>
                </Toolbar> 
            </div>
        )
    }
}
export default Content; 