import axios from 'axios';

const API_BASE_URL = "http://localhost:8081/admin";

class AdminServices {

    /*getEmployees(){//fetch,axios ajax
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }*/

    getUserById(emailId,userType){
        return axios.get(API_BASE_URL + '/getById/' + emailId+'/'+userType);
    }

    updateUser(user, emailId,userType){
        return axios.put(API_BASE_URL + '/updateUsers/'  + emailId+'/'+userType, user);
    }

    /*deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }*/
}

export default new AdminServices() 