
<h1 align="center">GoGrab E-Commerce Web Application | MERN</h1>

<div align="center">

  [<img src="https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=white">](#)
  &nbsp;[<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">](#)
  &nbsp;[<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white">](#)
  &nbsp;[<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white">](#)
  &nbsp;[<img src="https://img.shields.io/badge/Axios-008CDD?style=for-the-badge&logo=axios&logoColor=white">](#)
  
</div>


# GoGrab E-Commerce

The GoGrab E-Commerce project is a feature-rich web application designed to provide a seamless shopping experience for buyers, efficient inventory management for sellers, and powerful administrative tools for system administrators.

## Table of Contents
1. [Introduction & Problem](#introduction--problem)
2. [Technology](#technology)
3. [Functionalities](#functionalities)
4. [Setting Up the Database](#setting-up-the-project)
5. [Setting Up the Project](#setting-up-the-project)
6. [User Interface](#user-interface)
7. [Conclusion](#conclusion)

---

### 1) Introduction & Problem

#### 1.1 Overview of the Project
The GoGrab E-Commerce project aims to develop a comprehensive web application accommodating multiple user roles: buyer, seller, and admin. The goal is to facilitate seamless interactions and management for all parties involved in the e-commerce ecosystem.

#### 1.2 Problem Statement
The absence of a robust, user-centric e-commerce platform that caters to the needs of buyers, sellers, and administrators is a significant gap in the current market. This project endeavors to bridge this gap by creating a feature-rich, secure, and efficient solution.

#### 1.3 Objectives
- Create user-friendly interfaces for intuitive navigation and interaction.
- Implement robust security measures ensuring secure authentication and authorization for different user roles.
- Provide comprehensive modules for inventory management, order processing, and user data handling.
- Offer buyers a seamless shopping experience, including browsing, cart management, and order tracking.
- Equip admins with tools for effective user management, content moderation, and system configuration.

---

### 2) Technology

#### 2.1 Frontend Technologies 🌐
- HTML, CSS, JavaScript, React.js: Utilized for creating the user-facing interface and implementing dynamic functionalities within the e-commerce web application.

#### 2.2 Backend Technologies 🚀
- Node.js, Express.js, MongoDB: Node.js and Express.js serve as the backend server environment, while MongoDB functions as the database system for efficient data management and retrieval.

#### 2.3 Authentication 🔐
- JWT (JSON Web Tokens): Implemented as the primary method for secure user authentication, ensuring data integrity and confidentiality.

#### 2.5 Additional Tools/Libraries 🛠️
- Git for Version Control: Employed to maintain version history, facilitate collaboration, and manage code changes efficiently.
- RESTful APIs: Utilized for smooth communication between different components and modules of the application.

---

### 3) Functionalities

#### 3.1 Detailed Functionalities for Buyer, Seller, and Admin

>**Buyer Functionality:**
- *Browsing Products:* Implement search, filtering, and viewing functionalities based on categories and keywords.
- *Cart Management:* Enable adding/removing items, checkout processes, and order management.
- *Account Management:* Provide features for viewing order history, managing personal details, and saving preferences.

>**Seller Functionality:**
- *Product Management:* Develop capabilities for adding, editing, and removing products from the inventory.
- *Order Processing:* Facilitate monitoring incoming orders, updating order statuses, and managing inventory levels.
- *Sales Analytics:* Provide access to sales reports and performance metrics.

>**Admin Functionality:**
- *User Management:* Enable creation, modification, or deactivation of user accounts.
- *Content Moderation:* Implement tools for monitoring product listings, reviews, and handling reported issues.
- *Analytics & System Settings:* Allow access to platform analytics and configurations for system settings.

#### 3.2 Features and Objectives

- *User-Friendly Interfaces:* Create interfaces that ensure intuitive navigation and interaction across all user roles.
- *Secure Authentication and Authorization:* Implement robust mechanisms ensuring secure access control and data protection for users and administrators.
- *Inventory and Order Management:* Develop modules to efficiently manage inventory, orders, and user data for sellers.
- *Enhanced Shopping Experience:* Provide buyers with a smooth shopping journey, including browsing, cart management, and order tracking.
- *Administrative Tools:* Equip admins with effective tools for user management, content moderation, and system configuration.

---

### 4) Setting Up the Database

This project utilizes MongoDB as its database. Follow these steps to set up the database:

1. **MongoDB Installation:**
   - Install MongoDB on your system. You can download it from the [official MongoDB website](https://www.mongodb.com/try/download/community).
   - Follow the installation instructions for your operating system.

2. **Start MongoDB Server:**
   - Once installed, start the MongoDB server. You can do this by running the `mongod` command in your terminal.

3. **Create a Database:**
   - Open a new terminal and run the `mongo` command to open the MongoDB shell.
   - Create a new database for the project. For example:
     ```shell
     use GoGrabDB
     ```

4. **Configure .env File:**
   - Open the `.env` file in the project's root directory.
   - Set the `MAIN_DB_URI` variable to the connection string for your MongoDB database. Example:
     ```env
     MAIN_DB_URI=mongodb://localhost:27017/GoGrabDB
     ```
     
6. **Verify Connection:**
   - Ensure that the project's backend server connects successfully to the MongoDB database. Check the terminal/console for any connection errors.

By following these steps, you'll have the MongoDB database set up and configured for the GoGrab E-Commerce project. Adjust connection details and configurations according to your specific needs.

---

### 5) Setting Up the Project

To set up and run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/mobin4321/GoGrab.git
   cd GoGrab
   ```
2. Navigate to the backend directory and install dependencies:
   ```bash
    cd backend
    npm install
   ```
3. Start both data and auth servers:
   ```bash
    npm run start
    npm run authStart
   ```
4. Once both servers are running correctly, navigate to the frontend directory and install dependencies:
   ```bash
    cd ../frontend
    npm install
   ```
5. Start the frontend server:
   ```bash
   npm start
   ```
   Now, you have a perfectly working project.

## Environment Variables

This project relies on an `.env` file to securely store sensitive configuration details which is not included in the current repository. To set up the environment variables, follow these steps:

1. Create a file named `.env` in the project's root directory.

2. Populate the file with the following variables:

```env
AUTH_SERVER_PORT=
MAIN_SERVER_PORT=
MAIN_DB_URI=
SALT_ROUNDS=
CRYPTO_SECRET_KEY=
CRYPTO_ALGORITHM=
CRYPTO_IV_LENGTH=
SMTP_SERVICE=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD= 
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=
ACCESS_TOKEN_EXPIRES_IN=
```

---
### 6) User Interface

The GoGrab E-Commerce web application features a user-friendly and intuitive interface designed to provide a seamless experience for buyers, sellers, and administrators. Follow the provided figma link to see the UI for the key components within the application:

[Figma Design File](https://www.figma.com/file/TJbsmpxHf4yykEDo36stsK/Untitled?type=design&node-id=100%3A292&mode=design&t=uPNkPyyNDGngRRnK-1)

---

### 7) Conclusion

The development of the GoGrab E-Commerce web application marks a significant achievement, successfully meeting the outlined project requirements. The implemented features cater to the specific needs of buyers, sellers, and administrators, providing a robust platform for seamless interaction and efficient management. Throughout the project lifecycle, valuable lessons have been learned, enhancing the team's software engineering skills and project management methodologies. Looking ahead, the project allows for future enhancements and refinements, ensuring its adaptability to evolving requirements.

---

## Authors

- [Mobin Ahmed](https://www.github.com/mobin4321)
- [Jawad Mohsin](https://www.github.com/jawad-mohsin)
- [Muhammad Adan Zaqaf](https://www.github.com/adanzaqaf)

<h1 align="center">- Thank you for exploring GoGrab E-Commerce! 🚀 </h1>  




