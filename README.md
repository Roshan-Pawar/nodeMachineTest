A backend web application built using **Node.js**, **Express.js**, **MySQL**, and **EJS** to manage Categories and Products.

##  Tech Stack

- **Node.js**
- **Express.js**
- **MySQL**
- **EJS (View Engine)**

#  How to Run Locally

## 1️⃣ Create Database

Run the following SQL commands in MySQL:

```sql
CREATE DATABASE nimap_project;

USE nimap_project;

CREATE TABLE category (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(100) NOT NULL
);

CREATE TABLE product (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES category(category_id)
);

```
## 2️⃣ Install 
``` SQL
git clone https://github.com/Roshan-Pawar/nodeMachineTest.git
cd nodeMachineTest
npm install
```

## 3️⃣ Configure DB Connection
``` SQL
host: 'localhost',
user: 'root',
password: 'your_password',
database: 'nimap_project'
```
