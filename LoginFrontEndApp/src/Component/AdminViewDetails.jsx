import React, { Component } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
 import { Table } from 'reactstrap';
import history from './history'

class AdminViewDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            obj : []

         }
    }

    componentDidMount()
    {
        axios.get("http://localhost:8081/admin/getAllUser")
        .then(response => {
            console.log(response)
            this.setState({
                obj : response.data 
            })
        }).catch(error => {
            console.log(error)
        })
    }
 
    render() { 
        const table1 = {
            color : 'orange',
            width : '20px',
            height : '15px'
        }
        const th1 = {
        }
        const td1= { 
        }
        
       const {obj} = this.state 
        return (
            <div >           
             <div>
            <form>
            <button className="submit1" onClick={() => history.push('/AdminHomePage')}>Back</button>
            </form>
            </div>
            <div>

               <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th style={th1}> <h2> Email Id </h2> </th> 
                        <th style={th1}> <h2> UserType </h2> </th>
                        <th style={th1}> <h2> FirstName </h2> </th>
                        <th style={th1}> <h2> LastType </h2> </th>
                        <th style={th1}> <h2> PhoneNumber </h2> </th>
                    </tr>
                    </thead>
                    <tbody>
                    
                        {obj.map(x => 
                                                    <tr>
                                                    <td >  <p>{x.emailId} </p> </td>
                                                    <td >  <p> {x.userType} </p> </td>
                                                    <td >  <p> {x.firstName} </p> </td>
                                                    <td >  <p> {x.lastName} </p> </td>
                                                    <td >  <p> {x.phoneNo} </p> </td>
                                                    </tr> )}
                   
                    </tbody> 
                    </Table>
            
            </div>
            </div>

         );
    }
}
 
export default AdminViewDetails;