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
   
    myFunction() {
        var input, filter, table, tr, td, i, txtValue;
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
                <tr key={container.id}>
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
                        <Input id="input" onChange={this.myFunction} placeholder="ABC24XY35" endAdornment={
                            <InputAdornment position="end">
                                <Icon>search</Icon>
                            </InputAdornment>
                            }/>
                    </FormControl>
                    <FormControl className="form">
                        <InputLabel>Search By Container</InputLabel>
                        <Input id="input" onChange={this.myFunction} placeholder="ABC24XY35" endAdornment={
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
                <section>
                    <Table id="myTable">
                        <TableHead>
                            <TableRow>
                                <TableCell>Pedimineto</TableCell>
                                <TableCell>Container ID</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell></TableCell>
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