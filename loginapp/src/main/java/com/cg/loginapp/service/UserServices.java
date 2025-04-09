package com.cg.loginapp.service;

/**
 * author --> Sai Vineeth Neeli 
 */


import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.loginapp.contoller.SignUpExceptions;
import com.cg.loginapp.entity.Admin;
import com.cg.loginapp.entity.User;
import com.cg.loginapp.model.UserDTO;
import com.cg.loginapp.repository.AdminRepository;
import com.cg.loginapp.repository.LoginRepository;
import com.cg.loginapp.utils.LoginUtils;

 
@Service
public class UserServices {
	
	@Autowired
	LoginRepository repo;
	
	@Autowired
	AdminRepository adminRepo;
	
	Pattern pEmail = Pattern.compile("^(.+)@(.+)$");
	Pattern pString = Pattern.compile("[a-zA-Z]*");
	Pattern pDob= Pattern.compile("^((?:19|20)[0-9]{2})-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$");
	
	public String login(String emailId,String password,String userType) throws SignUpExceptions,NullPointerException{
		User appuser=repo.findByCid(emailId,userType);
       
		try {
		if(appuser.getPassword().equals(password))
		{
			return "Login successfully";
		}
		}
		catch(NullPointerException e)
		{
			throw new SignUpExceptions("Login Unsuccessful .. Invalid Password or Email or UserType ");	 
		}
		
		return "UnSuccessful";
	}
	
	public static boolean passwordIsValid(String password) {

	    Pattern specialCharPatten = Pattern.compile("[~!@#$%^&*_-]");
	    Pattern upperCasePatten = Pattern.compile("[A-Z ]");
	    Pattern lowerCasePatten = Pattern.compile("[a-z ]");
	    Pattern digitCasePatten = Pattern.compile("[0-9 ]");
	    
	    boolean flag=false;

	    if (password.length() >= 8 && specialCharPatten.matcher(password).find() && 
	    	upperCasePatten.matcher(password).find() && lowerCasePatten.matcher(password).find() && 
	    		digitCasePatten.matcher(password).find()) {
	        flag=true;
	    }

	    return flag;

	}
	
      public boolean dobIsValid(String date) {

        boolean result = false;

       // Matcher matcher = pattern.matcher(date);
        Matcher mDob = pDob.matcher(date);
        if (mDob.matches()) {

            result = true;

           
            int year = Integer.parseInt(mDob.group(3));
            String month = mDob.group(2);
            String day = mDob.group(1);
            
            if ((month.equals("4") || month.equals("6") || month.equals("9") ||
                    month.equals("04") || month.equals("06") || month.equals("09") ||
                    month.equals("11")) && day.equals("31")) {
                result = false;
            } else if (month.equals("2") || month.equals("02")) {
                if (day.equals("30") || day.equals("31")) {
                    result = false;
                } else if (day.equals("29")) {  // leap year? feb 29 days.
                    if (!isLeapYear(year)) {
                        result = false;
                    }
                }
            }

        }

        return result;
    }
	
	private boolean isLeapYear(int year) {
        return (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
    }
	
	public boolean validation(UserDTO udto) throws SignUpExceptions
	{
		Matcher mEmail = pEmail.matcher(udto.getEmailId());
		//Matcher mFirstName = pString.matcher(udto.getFirstName()); 
		//Matcher mLastName = pString.matcher(udto.getLastName());
		Matcher mSecurityAns = pString.matcher(udto.getSecurityAns());
		
		
		if(udto.getFirstName().isBlank()) throw new SignUpExceptions("FirstName should not be blank");
		
		
		else if(udto.getLastName().isBlank()) throw new SignUpExceptions("LastName should not be blank");
		
		
		else if(!dobIsValid(udto.getDob())) throw new SignUpExceptions("Date is not Correct");
		
		else if(udto.getPhoneNo().length() != 10) throw new SignUpExceptions("Phone Number is not valid");
		
		else if(udto.getEmailId().isBlank()) throw new SignUpExceptions("Email should not be blank");
		
		else if(!mEmail.matches()) throw new SignUpExceptions("Email is invalid");
		
		else if(repo.findByCid(udto.getEmailId(),udto.getUserType())!=null) throw new SignUpExceptions("User is already present");
		
		else if(udto.getUserType().isBlank()) throw new SignUpExceptions("UserType should not be blank");
		
		else if(!mSecurityAns.matches()) throw new SignUpExceptions("Security Answer should not contain numbers");
		
		else if(udto.getSecurityAns().isBlank()) throw new SignUpExceptions("Security Answer should not be blank");
		
		else if(!passwordIsValid(udto.getPassword())) throw new SignUpExceptions("Password must contains atleast one UpperCase, LowerCase, SpecialCharacter, Numeric");
		
		else if(!udto.getPassword().equals(udto.getReTypePassword())) throw new SignUpExceptions("ReTypePassword should be same as Password");
		
		return true;
	}
	
	public void addSignUpDetails(UserDTO udto) throws SignUpExceptions
	{
		if(validation(udto))
		{
			User u = LoginUtils.convertTouser(udto);
			
			repo.saveAndFlush(u);
		}
	}
	
	public String forgotPassword(String emailId , String userType , String securityAns , String newPassword , String reTypePassword) throws SignUpExceptions,NullPointerException
	{
		User u = repo.findByCid(emailId, userType);
		
		try { 
			if(!passwordIsValid(newPassword) || !u.getSecurityAns().equals(securityAns) || !newPassword.equals(reTypePassword))
			{
				throw new SignUpExceptions("Security Answer is Incorrect or Enter valid Password");
			}
			else
			{
				u.setPassword(newPassword);
				repo.saveAndFlush(u);
			}
			}
			catch(NullPointerException e)
			{
				throw new SignUpExceptions("User is Not found");
			}
		
		return "Changed Successfully";
	}
	
	 
	public List<User> getDetails()
	{
		return repo.findAll();
	}
	
	public String adminlogin(String emailId,String password) throws SignUpExceptions,NullPointerException{
		Admin appuser=adminRepo.findById(emailId).get();
       
		try {
		if(appuser.getAdminPassword().equals(password))
		{
			return "Login successfully";
		}
		}
		catch(NullPointerException e)
		{
			throw new SignUpExceptions("Login Unsuccessful .. Invalid Password or Email ");	 
		}
		
		return "UnSuccessful";
	}
	
}

