# Node SQL Project

This project is a Node.js application that connects to a SQL database using Express. It provides a boilerplate structure for building RESTful APIs with CRUD operations.

## Project Structure

```
iDT-Safety-Prototype
├── src
│   ├── app.js               # Entry point of the application
│   ├── config
│   │   └── db.js           # Database connection configuration
│   ├── controllers
│   │   └── index.js        # Request handling logic
│   ├── models
│   │   └── index.js        # Database models
│   ├── routes
│   │   └── index.js        # Application routes
│   └── utils
│       └── index.js        # Utility functions
├── package.json             # npm configuration file
├── .env                     # Environment variables
├── .gitignore               # Git ignore file
└── README.md                # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd iDT-Safety-Prototype
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory and add your database connection details:
   ```
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```

2. The application will run on `http://localhost:3000` (or the port specified in your configuration).

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under the MIT License.