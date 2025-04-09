import React, { Component } from 'react';
import axios from 'axios';
//import './style.css';
import AdminServices from '../services/AdminServices';
import history from './history';

class UpdateUser extends Component {
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
            securityAns: '',
         }

         this.changeHandler = this.changeHandler.bind(this)
         this.submitHandler = this.submitHandler.bind(this)
         
    }

    changeHandler(event)
    {
        this.setState({
           [ event.target.name] : event.target.value
        })
    }
  /*  componentDidMount(){
      AdminServices.getUserById(this.state.id).then( (res) =>{
          let user = res.data;
          this.setState({emailId : user.emailId,
          userType:user.userType,
          firstName: user.firstName,
          lastName: user.lastName,
          dob: user.dob,
          phoneNo: user.phoneNo,
          password: user.password,
         reTypePassword: user.reTypePassword,
         securityQue: user.securityQue,
         securityAns: user.securityAns,
          });
      });
  }*/
    submitHandler(event)
        {
            event.preventDefault()

            let user = {emailId : this.state.emailId,
              userType:this.state.userType,
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              dob: this.state.dob,
              phoneNo: this.state.phoneNo,
              password: this.state.password,
             reTypePassword: this.state.reTypePassword,
             securityQue: this.state.securityQue,
             securityAns: this.state.securityAns,};
        console.log('user => ' + JSON.stringify(user));
        //console.log('id => ' + JSON.stringify(this.state.id));
        AdminServices.updateUser(user, this.state.emailId,this.state.userType).then( response => {
          console.log(response);
          console.log(response.data);
            this.props.history.push('/admin');
        }).catch(error => {
          console.log(error.response);
          if(error.response!=undefined)
          {
            alert(error.response);
          }
      });
           /*axios.put('http://localhost:8080/admin/updateUsers/${this.state.emailId}/${this.state.userType}',this.state)
            .then( response => {
                console.log(response)
                console.log(response.data)
            }
            ).catch(error => {
                alert(error.response.data)
            })*/
        }

       

    render() { 

       const {emailId,
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
      <div className="main" ref={this.props.containerRef}>
              <div className="main">
                  
                      <div className="main">
                        <form className="form" onSubmit={this.submitHandler}>
                          
                             <label className="label1"> Email </label> <br />
                             <input className="input" type="text" name="emailId" value={emailId} placeholder='chirsevans7@gmail.com' onChange={this.changeHandler}/> <br />
                         
                             <label> User Type </label> <br />
                             {/* <input type="text" name="userType" value={userType} onChange={this.changeHandler}/> */}
                             <select className="input" name="userType" value={userType} onChange={this.changeHandler}> 
                             <option value="Doctor"> Doctor </option>
                             <option value="Patient"> Patient </option>
                             <option value="Librarian"> Librarian </option>
                             <option value="LibraryStudent"> LibraryStudent </option>
                             <option value="Admin"> LibraryStudent </option>
                             </select><br />
                           
                             <label> FirstName </label><br />
                             <input className="input" type="text" name="firstName" value={firstName} placeholder='Chris' onChange={this.changeHandler}/><br />
                           
                             <label> LastName </label><br />
                             <input className="input" type="text" name="lastName" value={lastName} placeholder='Evans' onChange={this.changeHandler} /><br />
                           
                             <label> DateOfBirth </label><br />
                             <input className="input" type="Date" name="dob" value={dob} onChange={this.changeHandler} /><br />
                           
                             <label> PhoneNumber </label><br />
                             <input className="input" type="text" name="phoneNo" value={phoneNo} onChange={this.changeHandler}/><br />
                           
                             <label> Password </label><br />
                             <input className="input" type="password" name="password" value={password} onChange={this.changeHandler}/><br />
                           
                             <label> reTypePassword </label><br />
                             <input className="input" type="password" name="reTypePassword" value={reTypePassword} onChange={this.changeHandler}/><br />
                           
                             <label> SecurityQue </label><br />
                             {/*<input type="text" name="securityQue" value={securityQue}  onChange={this.changeHandler}/> */}
                             <select className="input" name="securityQue" value={securityQue}  onChange={this.changeHandler}>
                             <option value="birthPlace"> What is your birth place? </option>
                             </select><br />
                         
                             <label> SecurityAns </label><br />
                             <input className="input" type="text" name="securityAns" value={securityAns} placeholder='LosAngeles' onChange={this.changeHandler}/><br />
                          
                             <button onClick={this.submitHandler} className="submit btn" type="submit">
                                Submit
                               </button>
                              
                           
                          
              
                        </form>
                 </div>
             </div>

             <div>
            <form className="form"> 
            <button className="submit" onClick={() => history.push('/AdminHomePage')}>Back</button>
            </form>
            </div>
              
                      
       </div>
           
                );
    }
}

export default UpdateUser;