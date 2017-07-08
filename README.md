# Workr
Workr

Basic MEAN project for the Pushnami Exam. It uses express generator with ejs - the homepage is located at views/index.ejs.
Key technologies:
	MongoDB/Mongoose - Mongoose used for schemas. Located in models/searches.js
	Expressjs. - Server is in app.js; routes are in routes/index.js
	Angularjs1.5.7 - Front end framework; included via cdn. Main page located at views/index.ejs.
	Node
	Bootstrap - Included via CDN.
	l2.io - Basic third party script for obtaining client ip address in IPv4.

To use:
1. Clone/download the repo (you've probably done this already)
2. Type 'npm install'
3. Type 'npm start'
4. Go to locahost:3000 in your browser.

Also:
5. There is a '/searches' route on the server. It is NOT connected to the frontend, but if you connect through browser, curl, or postman, it will return every saved search in the DB.
6. There is a '/wipe' route on the server. It is commented out, and NOT connected to the frontend, but if you uncomment connect through browser, curl, or postman, it will return every seaved search in the DB.
7. These routes are in routes/index.js


With the exception 