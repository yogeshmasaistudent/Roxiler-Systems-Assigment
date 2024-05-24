# MERN Stack Transaction Dashboard

This project is a MERN (MongoDB, Express, React, Node.js) stack application that provides a comprehensive transaction dashboard. The application allows users to view and interact with transaction data through various APIs and frontend components. It includes features such as data initialization, transaction listing, statistical analysis, and data visualization.

> *"Empowering businesses with insightful transaction analysis through cutting-edge technology."*

## Table of Contents

- [Features](#features)
- [Demo Video](#demo-video)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Frontend Components](#frontend-components)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

### Backend
- **Initialize Database**: Seed the database with data from an external JSON source.
- **List Transactions**: View transactions with search and pagination functionality.
- **Statistical Data**: Retrieve monthly statistics (total sale amount, total sold items, total unsold items).
- **Bar Chart Data**: Get item count within specified price ranges.
- **Pie Chart Data**: Fetch data for item categories and their counts.
- **Combined API**: Consolidated JSON response for comprehensive data.

### Frontend
- **Transactions Table**: Display transactions with search and pagination functionality.
- **Statistics Display**: Show total sale amount, sold items, and unsold items.
- **Bar Chart**: Visualize item counts within price ranges.
- **Pie Chart**: Visualize item categories.
- **Styling**: Utilizes Chakra UI for a polished and responsive design.

## Demo Video

[![Watch the video](https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)

## Prerequisites

- **Node.js** (v14.x or later)
- **npm** (v6.x or later)
- **MongoDB** (v4.x or later)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yogeshmasaistudent/Roxiler-Systems-Assigment.git
   cd Roxiler-Systems-Assigment
Install backend dependencies:

bash
Copy code
cd backend
npm install
Create a .env file in the backend directory and add the following environment variables:

env
Copy code
MONGO_URI=mongodb://localhost:27017/transactiondb
Install frontend dependencies:

bash
Copy code
cd ../frontend
npm install
Usage
Start the backend server:

bash
Copy code
cd backend
npm start
Start the frontend development server:

bash
Copy code
cd ../frontend
npm start
Open your browser and navigate to http://localhost:5173/ to view the application.

API Endpoints
Initialize Database
URL: /api/initialize
Method: POST
Description: Fetch JSON data from the external source and initialize the database.
List Transactions
URL: /api/transactions
Method: GET
Query Parameters:
page (default: 1) - Page number for pagination.
limit (default: 10) - Number of transactions per page.
search (optional) - Search query for transaction titles.
Statistics
URL: /api/statistics
Method: GET
Query Parameters:
month - Month in the format YYYY-MM for which statistics are requested.
Bar Chart Data
URL: /api/bar-chart
Method: GET
Query Parameters:
month - Month in the format YYYY-MM for which bar chart data is requested.
Pie Chart Data
URL: /api/pie-chart
Method: GET
Query Parameters:
month - Month in the format YYYY-MM for which pie chart data is requested.
Frontend Components
Transactions Table
Description: Displays transactions with search and pagination functionality.
Props:
transactions - Array of transaction objects.
search - Search query.
page - Current page number.
totalPages - Total number of pages.
Statistics Display
Description: Shows total sale amount, total sold items, and total not sold items.
Props:
totalSaleAmount - Total sale amount for the selected month.
totalSoldItems - Total sold items for the selected month.
totalNotSoldItems - Total not sold items for the selected month.
Bar Chart
Description: Displays the number of items in specified price ranges.
Props:
data - Array of objects containing price range and count.
Pie Chart
Description: Displays unique categories and the number of items in each category.
Props:
data - Array of objects containing category and count.
Technologies Used
Backend
Node.js
Express.js
MongoDB
Mongoose
Axios
Frontend
React.js
Chakra UI
Axios
Chart.js
License
This project is licensed under the MIT License. See the LICENSE file for details.

