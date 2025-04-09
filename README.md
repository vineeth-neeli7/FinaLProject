project:
  title: "Full Stack Login & User Management Application"
  description: >
    This project is a complete Full Stack User Authentication and Management System developed during my internship
    to demonstrate my end-to-end software development capabilities. It features a robust backend built using Spring Boot
    and a dynamic frontend using React.js, making it a fully functional CRUD-based application.

tech_stack:
  backend:
    - Java 17
    - Spring Boot 2.4.3
    - PostgreSQL
    - JPA / Hibernate
    - RESTful APIs
    - Swagger UI
    - Layered Architecture
  frontend:
    - React.js (Class Components)
    - Axios
    - React Router
    - Bootstrap
    - Custom CSS

features:
  - User SignUp & Login
  - Password Reset using Security Questions
  - Role-Based User Types: Doctor, Patient, Librarian, Admin, LibraryStudent
  - Form Validation: Date, Email, Phone, Password strength
  - Admin Features: View, Update, and Delete Users
  - Swagger Documentation for all REST endpoints

folder_structure:
  root: "FinaLProject/"
  backend: "loginapp/"
  frontend: "LoginFrontEndApp/"

how_to_run:
  backend:
    steps:
      - "Import loginapp into IntelliJ or Eclipse"
      - "Ensure PostgreSQL is running locally"
      - "Run LoginappApplication.java"
      - "Access APIs at: http://localhost:8081"
  frontend:
    steps:
      - "Navigate to LoginFrontEndApp"
      - "Run: npm install"
      - "Run: npm run dev"
      - "Open in browser: http://localhost:5173"

learning_outcomes:
  - Integration of frontend with REST APIs
  - Validations in frontend and backend
  - Spring Boot application structure and JPA usage
  - Responsive UI design with React
  - Clean and maintainable object-oriented code

note: >
  This project was developed and deployed as part of my internship experience and provided hands-on learning
  on real-world development workflows and project structure.
