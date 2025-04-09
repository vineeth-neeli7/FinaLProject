import React, { Component } from 'react';
import axios from 'axios';
//import Home from './Home';
import history from './history';
import Login from './Login'




class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
                emailId : '',
                userType: 'Doctor',
                firstName: '',
                lastName: '',
                dob: '',
                phoneNo: '',
                password: '',
               reTypePassword: '',
               securityQue: '',
               securityAns: ''
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
         
            axios.post("http://localhost:8081/SignUp",this.state)
            .then( //response => {console.log(response)}
            ).catch(error => {
                alert(error.response.data)
            })
        }

    render() { const {emailId,
        userType,
        firstName,
        lastName,
        dob,
        phoneNo,
        password,
       reTypePassword,
       securityQue,
       securityAns} = this.state
         return ( 
             <div className="main">
                 <div className="form-container">  
                 <form className="form" onSubmit={this.submitHandler}>
                    
                    <label className="label1"> Email </label> <br />
                     <input className="input" type="text" name="emailId" value={emailId} placeholder='chirsevans7@gmail.com' onChange={this.changeHandler}/> <br />
                    
                     <label> User Type </label> <br />
                    
                     <select className="input" name="userType" value={userType} onChange={this.changeHandler}> 
                         <option value="Doctor"> Doctor </option>
                         <option value="Patient"> Patient </option>
                         <option value="Librarian"> Librarian </option>
                         <option value="LibraryStudent"> LibraryStudent </option>
                         <option value="Admin"> Admin </option>
                     </select> <br /> 
                     
                     <label> FirstName </label> <br />
                     <input className="input" type="text" name="firstName" value={firstName} placeholder='Chris' onChange={this.changeHandler}/><br />
                     
                     <label> LastName </label> <br />
                     <input className="input" type="text" name="lastName" value={lastName} placeholder='Evans' onChange={this.changeHandler} /><br />
                     
                     
                     <label> DateOfBirth </label> <br />
                     <input className="input" type="Date" name="dob" value={dob} onChange={this.changeHandler} /><br />
                    
                     <label> PhoneNumber </label> <br />
                     <input className="input" type="text" name="phoneNo" value={phoneNo} onChange={this.changeHandler}/><br />
                     
                     <label> Password </label> <br />
                     <input className="input" type="password" name="password" placeholder="password" value={password} onChange={this.changeHandler}/><br />
                     
                     <label> reTypePassword </label> <br />
                     <input className="input" type="password" name="reTypePassword" placeholder="password" value={reTypePassword} onChange={this.changeHandler}/><br />
                     
                     <label> SecurityQue </label> <br />
                     
                     <select className="input" name="securityQue" value={securityQue}  onChange={this.changeHandler}>
                         <option value="birthPlace"> What is your birth place? </option>
                     </select><br />
                     
                     <label> SecurityAns </label>  <br />
                     <input className="input" type="text" name="securityAns" value={securityAns} placeholder='LosAngeles' onChange={this.changeHandler}/><br />
                     
 
                     <button className="submit" type="submit"> SignUp </button>
                    
                    
                 </form>
             
                
                
             </div>
            {/* <div>
             <form class="form">
             <button class="submit" onClick={() => history.push('/ForgotPassword')}>Forgot Password</button>
             </form>
            </div> */}   

             </div>
         )
    }
}
 
export default SignUp;