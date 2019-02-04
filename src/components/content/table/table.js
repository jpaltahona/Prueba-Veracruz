import React, {Component} from 'react';
import './table.scss';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import {containers} from '../../../containers.json';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class Tables extends Component{
    constructor(){
        super();
        this.state = {
            containers,
            value: '',
            status: ''
        }
    }

    handleChange = event => {
        this.setState({value: event.target.value });
         
    }

    render(){
        const container = this.state.containers.map((container, i) => {
            return(
                <TableRow key={container.id}>
                    <TableCell className="cell">{container.title}</TableCell>
                    <TableCell className="cell">{container.id}</TableCell>
                    <TableCell className="cell">{container.date} - {container.hour}</TableCell>
                    <TableCell className="cell"><div className="status">{container.status}</div></TableCell>
                    <TableCell className="cell"align="right">
                        <Button variant="contained" size="medium" >
                            <Icon>search</Icon> View Details
                        </Button>
                    </TableCell>
                </TableRow>
            )
        });
        return(
           <div>
               <div className="search">
                    <FormControl className="form">
                        <InputLabel>Search By Container</InputLabel>
                        <Input id="input-with-icon-adornment" placeholder="ABC24XY35" endAdornment={
                            <InputAdornment position="end">
                                <Icon>search</Icon>
                            </InputAdornment>
                            }/>
                    </FormControl>
                    <FormControl className="form">
                        <InputLabel>Search By Container</InputLabel>
                        <Input id="input-with-icon-adornment" placeholder="ABC24XY35" endAdornment={
                            <InputAdornment position="end">
                                <Icon>search</Icon>
                            </InputAdornment>}/>
                    </FormControl>
               </div>
               <div>
               <FormControl className="form-filter">
                    <Select value={this.state.value}
                    onChange={this.handleChange}
                    input={<Input name="value" id="value" />}
                    >
                        {containers.map(option => (
                            <MenuItem key={option.id} value="uno">
                                {option.date}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>        
                <FormControl className="form-filter">       
                        <Select value={this.state.status}
                        onChange={this.handleChange}
                        input={<Input name="status" id="status" />}
                        >
                            {containers.map(option => (
                                <MenuItem key={option.id} value="uno">
                                    {option.status}
                                </MenuItem>
                            ))}
                        </Select>
                </FormControl>
               </div>

               <div className="table-conten">
                    <Table>
                        <TableHead className="head-table">
                            <TableRow>
                                <TableCell className="cell">Pedimineto</TableCell>
                                <TableCell className="cell">Container ID</TableCell>
                                <TableCell className="cell">Date</TableCell>
                                <TableCell className="cell">Status</TableCell>
                                <TableCell className="cell"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {container}
                        </TableBody>
                    </Table>
               </div>
           </div>
        )
    }
}
export default Tables;