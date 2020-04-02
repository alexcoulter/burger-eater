# Eat-Da-Burger

 ![license type](https://img.shields.io/badge/License-MIT-yellow) &nbsp;&nbsp;&nbsp; 	
 ![Node.js](https://img.shields.io/badge/Built_with-Node.js-purple) &nbsp;&nbsp;&nbsp; 	 
 ![Mysql](https://img.shields.io/badge/Database-Mysql-orange) &nbsp;&nbsp;&nbsp; 	 
 ![Express](https://img.shields.io/badge/Framework-Express-green) 

## Table of Contents  

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [ScreenShots](#Screenshots)
* [Built With](#Built-With)

## Description  

  *  A fun full-stack application for creating and eating digital burgers.  
 
## Installation  

  * Clone this repository from Github from the command line by typing:  
   `git clone https://github.com/alexcoulter/Eat-Da-Burger.git`
  * Navigate to the 'note-taker' folder by typing:  
  `cd Eat-Da-Burger` 
  * Install dependencies by typing:  
   `npm install`
  * Run this application by typing:   
  `node server` 
  * Open this application in your browser by typing the url:
  `http://localhost:8040/`
 
## Usage  

  * Scroll down to the textbox under the label *'Burger Maker'*, type out the burger you want to eat, and press the *'Submit'* Button.  This will create your burger in the mysql database and make it pop up on the left side of your screen. If you want to eat one of your burgers, click the *'Devour It'* button beside it.  This will change  move that burger to the right side of the screen and change its *'devoured'* value in the database from false to true.  If you want to remove one of the burgers from the screen and database, click the *'X'* to the right of it.
  
## Screenshots
* Laptop Screen
<div align="center"><img  alt= "Screen Shot on Laptop" src= "./public/assets/img/burgerSS.jfif" width="600px" /></div>

* Ipad Screen
<div align="center"><img  alt= "Screen Shot on Ipad" src= "./public/assets/img/ipadSS.jfif" width="600px" /></div>

 
## Built With  

* **Node.js** -  JavaScript environment that executes JS code without needing a web browser.
* **Express** - Web application framework that helped with routes and requests.
* **Express-Handlebars** - View engine for express that helps generates HTML
* **Mysql** - Open Source Database Management System
* **ORM** - *'Object Relational Mapping'* was used so that we didn't need to make sql queries
* **MVC Design** - Model View Control architecture seperates the files in the app into these 3 areas for better organization of code

