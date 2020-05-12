# Beauty shop web application
## REQUIREMENTS
The user is able to register and login to the service provided on the web page. There are no restrictions of what any user can do. The purpose of the web application is to provide a service of creating an appointment at a beauty shop. A user has to input a service name and choose the date and time of an appointment. It is also possibile to edit or delete an appointment. Other feature is a feedback solution in a way of checking the heart icon of the service in the list.
## DESIGN
All user information is recorded in the sandbox and retrieved when the web application is working. The information about a particular user includes Identification number, Full Name, Email, Username and Password. It also records and keeps the services a user once added, which have own Identification number, Service Name, Date and Time the service was provided, and boolean field showing if the service was liked or not. 
The application page stars initially from the Home page or Welcome page, which explains shortly to a user the purpose of the website. Later, the user can go to Register page if he/she is new to a service or can navigate to a Login page immediately. The Register page provides an input fields which a user should fill in, and after the registration the user is navigated to a Login page. The Login page provides an input fields of username and password. After a user is logged in, the navigation goes to the main page of the website. The main page provides a service to add a new appointment to the list, see and manipulate with added appointments. The application page also has a navigation bar which helps user manage with the website. In this bar a user can navigate to a Profile page to see an information about provided name, username and email. It also has a Logout link, which makes a user exit an application. 
## IMPLEMENTATION
The application was developed by using techniques as MEAN Stack Application. Mongo DB was used in a way to keep data in the cloud database; Express, Angular CLI and Node JS as methods to develop application code on a client and server side.
## TESTING
The testing of an application was done several times. At the stages of development by me, and at the final stage by fellow students who were not participating in the software development. Some errors were found, including slightest user interface problems.
## DEVELOPMENT
Run `npm start` command in order to run a server.  Navigate to `http://localhost:3000/`.
The client package is located in `angular-src` branch.
