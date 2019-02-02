import React, { Component } from 'react';
import './sidebar.scss';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon'


class Sidebar extends Component{
    render(){
        return(
            <div className="sidebar">
                <div className="sidebar__user">
                    <img alt="Remy Sharp" src="https://media.licdn.com/dms/image/C560BAQEi0l0tGlHkzA/company-logo_200_200/0?e=2159024400&v=beta&t=H59f860HLsPoaL3dKSbgb2Xv2mDfXP3i8wtQHO2tijM"
                    className="avatar"
                        />
                </div>
                <List component="nav" className="sidebar__list">
                    <ListItem button>
                        <ListItemIcon>
                            <Icon >language</Icon>
                        </ListItemIcon>
                        <ListItemText inset primary="Notifications" className="sidebar__list__item" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Icon >perm_identity</Icon>
                        </ListItemIcon>
                        <ListItemText inset primary="Profile" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Icon >layers</Icon>
                        </ListItemIcon>
                        <ListItemText inset primary="Dashboard" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Icon >redeem</Icon>
                        </ListItemIcon>
                        <ListItemText inset primary="New Shipment" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Icon >brightness_low</Icon>
                        </ListItemIcon>
                        <ListItemText inset primary="RED" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Icon >map</Icon>
                        </ListItemIcon>
                        <ListItemText inset primary="Traking" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Icon >build</Icon>
                        </ListItemIcon>
                        <ListItemText inset primary="settings" />
                    </ListItem>
                </List>
            </div>
        )
    }
}
export default Sidebar;