# Tech blog

## Description
The Tech Blog is a web application for creating and managing blog posts. It uses a custom-built backend API to handle the creation, and retrieval of blog posts. It utilizes a SQL database to store the posts. The frontend of the blog is built with Handlebars.js to dynamically render the blog posts.

## Installation
1. Clone the repository: `git clone https://github.com/maaront/tech-blog`
2. Navigate to the project directory: `cd tech-blog`
3. Install the dependencies: `npm i`
4. Set up your MySQL database and update the connection details in the `.env` file
5. Run the schema and seed commands to create the development database and seed it with test data:
   `npm run seed`
   
## Usage
1. Start the application by running: `npm start`.
2. The server will start, and the Sequelize models will be synced with the MySQL database.
3. UNavigate to `http://localhost:3001/posts`
4. Click on individual posts to view the posts

## Technologies Used
- Express.js
- MySQL
- Sequelize

## Additional Functionality to be Added
- User accounts
- Add new posts
- Update posts
- Delete posts

## Credits
This project was developed by Matt Turner.

## License
This project is licensed under the [MIT License].
