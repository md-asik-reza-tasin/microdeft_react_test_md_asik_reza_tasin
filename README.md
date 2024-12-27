# Microdeft Task Documentation  

This repository contains the work completed for my assigned task at **Microdeft**.  

## Live Link  
You can view the live project here: [Live Project](https://playful-kelpie-60835e.netlify.app/)  

The project is built using the following technologies and tools:  
- **React.js**  
- **React Router**  
- **Tailwind CSS** for styling  
- **DaisyUI** for UI components  
- **universal-cookie** for managing cookies  

## Features  

1. **Registration**
   
   Users can register with their email. The registration form requires three pieces of data:  
   - Name  
   - Email  
   - Password  

2. **Log In**
   
   After registration, users can log in using their email and password.  
   When a user logs in, a token is generated and stored in cookies for authentication purposes.  

3. **Course Addition Form**
   
   A dedicated form is available for adding new courses. Users need to provide the following information:  
   - **Title**: Name of the course.  
   - **Description**: Details about the course.  
   - **Badge Text**: Label to highlight the course (e.g., Featured).  
   - **Badge Color**: Color associated with the badge (e.g., red).  
   - **Instructor Name**: Name of the instructor.  

   All course data is securely sent to the server, along with an authentication token, to ensure proper validation and authorization.  

4. **Displaying Added Courses**
   
   All the courses added via the form are dynamically displayed on the home page.  
   - Each course entry includes the title, description, badge, and instructor's name.  
   - The data is fetched in real-time and updated seamlessly to ensure a smooth user experience.  

## Challenging Part  

One of the more challenging aspects of this project was managing the dynamic state of the added courses and ensuring smooth data flow between the client and server.  
- **Handling Tokens**: Storing and sending authentication tokens in cookies while ensuring secure communication with the server was tricky, as it required careful handling to avoid potential security issues.  
- **Real-time Data Updates**: Dynamically displaying the courses without page reloads posed challenges, especially when ensuring that newly added courses appeared instantly without performance issues.

