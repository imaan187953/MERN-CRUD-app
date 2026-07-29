# MERN CRUD Application

A full-stack CRUD (Create, Read, Update, Delete) application built using the MERN stack. The project demonstrates how React communicates with an Express and Node.js backend to perform CRUD operations on a MongoDB database using REST APIs.

## Features

* Create new users
* View all users
* Update user information
* Delete users
* Responsive UI with Bootstrap
* RESTful API using Express.js
* MongoDB integration with Mongoose

## Tech Stack

**Frontend**

* React.js
* React Router
* Axios
* Bootstrap
* Vite

**Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose

## Installation

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

| Method | Endpoint          | Description       |
| ------ | ----------------- | ----------------- |
| GET    | `/`               | Get all users     |
| GET    | `/getUser/:id`    | Get a single user |
| POST   | `/createUser`     | Create a user     |
| PUT    | `/updateUser/:id` | Update a user     |
| DELETE | `/deleteUser/:id` | Delete a user     |

## License

This project is licensed under the MIT License.
