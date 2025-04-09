import React, { Component } from 'react';
import axios from 'axios';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            emailId : '',
            userType : 'Doctor',
            password : '',
            reTypePassword:'',
            securityQue : '',
            securityAns : ''
         }

         this.changeHandler = this.changeHandler.bind(this)
         this.submitHandler = this.submitHandler.bind(this)
    }

    changeHandler(event)
        {
            this.setState({
                [event.target.name] : event.target.value
            })
        }

    submitHandler(event)
    {
        event.preventDefault()
        //let ansSecurity = 'kk'

        axios.put(`http://localhost:8081/User/forgotPassword/${this.state.securityAns}`,this.state)
        .then()
        .catch(error=>{
            alert(error.response.data)
        })
    }

    render() { 
        const {emailId,
            userType,
            password,
            reTypePassword,
           securityQue,
           securityAns} = this.state
        return ( 
            <div className="main">
               
                <form className="form" onSubmit={this.submitHandler}>

                <label> SecurityQue </label><br />
                     
                     <select className="input" name="securityQue" value={securityQue}  onChange={this.changeHandler}>
                            <option value="birthPlace"> What is your birth place? </option>
                     </select><br />
                        
                     <label> SecurityAns </label><br />
                     <input className="input" type="text" name="securityAns" value={securityAns} placeholder='LosAngeles' onChange={this.changeHandler}/><br />

                  <label>Email ID</label><br />
                  <input className="input" type="text" name="emailId" value={emailId} placeholder='chirsevans7@gmail.com' onChange={this.changeHandler}/><br />

                  <label>User Type</label><br />
                  <select className="input" name="userType" value={userType} onChange={this.changeHandler}> 
                         <option value="Doctor"> Doctor </option>
                         <option value="Patient"> Patient </option>
                         <option value="Librarian"> Librarian </option>
                         <option value="LibraryStudent"> LibraryStudent </option>
                         <option value="Admin"> Admin </option>
                  </select><br />

                  <label> Password </label><br />
                  <input className="input" type="password" name="password" placeholder="password" value={password} onChange={this.changeHandler}/><br />
                     
                  <label> reTypePassword </label><br />
                  <input className="input" type="password" name="reTypePassword" placeholder="password" value={reTypePassword} onChange={this.changeHandler}/><br />

                  {/* <label> SecurityQue </label><br />
                     
                 <select value={this.state.securityQue}  onChange={this.changeHandler}>
                         <option value="birthPlace"> What is your birth place? </option>
                  </select><br />
                     
                  <label> SecurityAns </label><br />
        <input type="text" value={this.state.securityAns} placeholder='LosAngeles' onChange={this.changeHandler}/><br /> */}

                  <button className="submit" type="submit"> Okay </button>
                  


                  </form><br />

            </div>
         );
    }
}
 
export default ForgotPassword;