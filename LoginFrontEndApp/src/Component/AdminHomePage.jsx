import React, { Component } from 'react';
import history from './history';

class AdminHomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
                   
            <div><br /><br /><br /><br /><br /><br />
            <form class="form5">
            <button class="submit1" onClick={() => history.push('/AdminViewDetails')}>List Users</button>  
            <button class="submit1" onClick={() => history.push('/DeleteUser')}>Delete User</button>
            <button class="submit1" onClick={() => history.push('/UpdateUser')}>Update User Details</button>
             </form><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
         );
    }
}
 
export default AdminHomePage; 