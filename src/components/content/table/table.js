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

    Selecte = event => {
        this.setState({value: event.target.value });
    }
    otherSelecte = event =>{
        this.setState({status: event.target.value });
    }
    fitrar() { var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("input");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }


    render(){
        const container = this.state.containers.map((container, i) => {
            return(
                <tr key={container.id} className="animated fadeInDown">
                    <TableCell className="cell">{container.title}</TableCell>
                    <TableCell className="cell">{container.id}</TableCell>
                    <TableCell className="cell">{container.date} - {container.hour}</TableCell>
                    <TableCell className="cell"><div className="status">{container.status}</div></TableCell>
                    <TableCell className="cell">
                        <Button variant="contained" size="medium" >
                            <Icon>search</Icon> View Details
                        </Button>
                    </TableCell>
                </tr>
            )
        });
        return(
           <div>
               <div className="search">
                    <FormControl className="form">
                        <InputLabel>Search By Container</InputLabel>
                        <Input placeholder="ABC24XY35" endAdornment={
                            <InputAdornment position="end">
                                <Icon>search</Icon>
                            </InputAdornment>
                        }/>
                    </FormControl>
                    <FormControl className="form">
                        <InputLabel>Search By Pedimento</InputLabel>
                        <Input id="input" onChange={this.fitrar} placeholder="ABC24XY35" endAdornment={
                            <InputAdornment position="end">
                                <Icon>search</Icon>
                            </InputAdornment>}/>
                    </FormControl>
               </div>

               <div className="from">
                    <div className="from__filter" >
                        <InputLabel>Date</InputLabel><br/>
                        <Select value={this.state.value}
                        onChange={this.Selecte}
                        input={<Input name="value" id="value" />}
                        >
                        {containers.map(option => (
                        <MenuItem key={option.id} value={option.date}>
                            {option.date}
                        </MenuItem>
                        ))}
                        </Select>
                    </div>
                    
                    <div className="from__filter">
                        <InputLabel>Status</InputLabel><br/>     
                        <Select value={this.state.status}
                        onChange={this.otherSelecte}
                        input={<Input name="status" id="status" />}
                        >
                        <MenuItem value="Planet">Planet</MenuItem>
                        <MenuItem value="In position">In position</MenuItem>
                        <MenuItem value="Complete Locked">Complete Locked</MenuItem>
                        
                        </Select>
                    </div>
               </div>
                <section>
                    <Table id="myTable">
                        <TableHead className="head-table">
                            <TableRow>
                                <TableCell className="cell">Pedimento</TableCell>
                                <TableCell className="cell">Container ID</TableCell>
                                <TableCell className="cell">Date</TableCell>
                                <TableCell className="cell">Status</TableCell>
                                <TableCell className="cell"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{container}</TableBody>
                    </Table>
                </section>
            </div>
        )
    }
}
export default Tables;