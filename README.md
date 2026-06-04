# Inventory-Management-System-SpringBoot
Full-stack Inventory Management System with Spring Boot, MySQL, REST APIs, Bootstrap dashboard, product management, and authentication.
# Inventory Management System

## Project Overview

The Inventory Management System is a full-stack web application developed during my internship to manage inventory products efficiently. The application provides product management, inventory tracking, dashboard analytics, search functionality, and user authentication through a responsive web interface.

The project was built using Spring Boot for backend development, MySQL for database management, and HTML, CSS, Bootstrap, and JavaScript for frontend development.

---

## Features

### Authentication Module

* Login functionality
* Username and password validation
* Login success and failure handling
* Frontend authentication integration

### Product Management

* Add Product
* View All Products
* View Product by ID
* Update Product
* Delete Product

### Search Functionality

* Partial keyword matching
* Case-insensitive search
* Dynamic frontend integration

### Dashboard Analytics

* Total Product Count
* Low Stock Products Detection
* Total Inventory Value Calculation
* Recently Added Products Tracking

### Validation and Exception Handling

* Product name validation
* Quantity validation
* Price validation
* Product not found handling
* User-friendly error responses

### User Interface Enhancements

* Bootstrap responsive layouts
* Dashboard cards
* Product tables
* Search bar integration
* Logout functionality
* Hover effects and styling improvements

---

## Technology Stack

### Backend

* Java 17
* Spring Boot
* Spring Data JPA
* Hibernate
* REST APIs

### Database

* MySQL

### Frontend

* HTML5
* CSS3
* Bootstrap 5
* JavaScript
* Fetch API

### Tools

* IntelliJ IDEA
* MySQL Workbench
* Postman
* GitHub

---

## Application Architecture

Frontend (HTML, CSS, Bootstrap, JavaScript)
↓
REST API Layer (Spring Boot Controllers)
↓
Service & Repository Layer
↓
Spring Data JPA / Hibernate
↓
MySQL Database

---

## Implemented APIs

### Authentication

POST /login

### Product Management

POST /products

GET /products

GET /products/{id}

PUT /products/{id}

DELETE /products/{id}

### Search

GET /products/search?name={keyword}

### Dashboard APIs

GET /products/count

GET /products/low-stock

GET /products/total-value

GET /products/recent

---

## Frontend Pages

### Login Page

* Username Field
* Password Field
* Login Button
* Authentication Integration

### Dashboard Page

* Total Products
* Low Stock Products
* Total Inventory Value
* Recently Added Products
* Logout Functionality

### Product Management Page

* Add Product
* Update Product
* Delete Product
* Search Products
* Product Listing Table

---

## Database Design

### Product Table

| Field     | Type          |
| --------- | ------------- |
| id        | Long          |
| name      | String        |
| quantity  | Integer       |
| price     | Double        |
| createdAt | LocalDateTime |

---

## Testing

The application was tested using Postman and frontend integration testing.

### APIs Tested

* Login API
* Add Product API
* Get Product API
* Update Product API
* Delete Product API
* Search API
* Count API
* Low Stock API
* Total Value API
* Recent Products API

### Frontend Testing

* Login Functionality
* Dashboard Integration
* Product Management Operations
* Search Functionality
* Logout Functionality

---

## Learning Outcomes

Through this project, I gained practical experience in:

* Spring Boot Development
* REST API Design
* Spring Data JPA
* Hibernate ORM
* MySQL Database Integration
* Frontend Development
* Bootstrap Framework
* JavaScript Fetch API
* API Testing using Postman
* Full Stack Application Development
* Debugging and Troubleshooting

---

## Challenges Faced

* Understanding Spring Boot project structure
* Configuring MySQL database connectivity
* Implementing JPA entity mapping
* Frontend and backend integration
* Handling API responses dynamically
* Designing responsive user interfaces
* Managing dashboard analytics

---

## Future Enhancements

* Role-based authentication
* User management module
* Advanced inventory reports
* Product categories
* Export reports to Excel/PDF
* Enhanced dashboard visualizations
* Cloud deployment

---

## Conclusion

This project successfully demonstrates the development of a complete Inventory Management System using modern full-stack technologies. It provided valuable hands-on experience in backend development, database integration, frontend implementation, API development, testing, and software engineering best practices.

---

## Author

Gorle Jahnavi

Internship Project – Inventory Management System

Intern at Fluentgrid
