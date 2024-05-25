# MERN Stack Transaction Dashboard

This project is a MERN (MongoDB, Express, React, Node.js) stack application that provides a comprehensive transaction dashboard. The application allows users to view and interact with transaction data through various APIs and frontend components. It includes features such as data initialization, transaction listing, statistical analysis, and data visualization.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Frontend Components](#frontend-components)
- [Technologies Used](#technologies-used)

## Features

- **Backend:**
  - Initialize database with seed data from an external JSON source.
  - List transactions with search and pagination functionality.
  - Provide statistical data for a selected month (total sale amount, total sold items, total not sold items).
  - Provide data for bar chart (number of items in specified price ranges).
  - Provide data for pie chart (unique categories and the number of items in each category).
  - Combined API for a consolidated JSON response.

- **Frontend:**
  - Display transactions in a table with search and pagination functionality.
  - Show statistical data (total sale amount, total sold items, total not sold items).
  - Display bar chart for item price ranges.
  - Display pie chart for item categories.
  - Use Chakra UI for styling.

## Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)
- MongoDB (v4.x or later)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mern-transaction-dashboard.git
   cd mern-transaction-dashboard
2. Install backend dependencies:
```bash
cd backend
npm install
3. Create a .env file in the backend directory and add the following environment variables:
```bash
PORT = 8080
MONGO_URI=mongodb://localhost:27017/transactiondb
4. Install frontend dependencies:
```cd ../frontend
npm install

###Usage:
1. Start the backend server:
```cd backend
npm start

