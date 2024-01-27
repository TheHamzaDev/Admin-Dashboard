<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

# Laravel User Authentication and CRUD System
This is a simple admin dashboard application that showcases CRUD operations using React and Laravel. Users can login or sign up with a new account, view users, update details or delete users.

## Features
* User registration form with basic validation
* User login form with session management
* User admin page with showcasing other users and details
* CRUD operations, allowing users to create, update and delete existing users
  
## Requirements
* PHP 8.0 or higher
* Node.Js
* Install Composer
  
## Installation
To install and run this application on your local machine, follow these steps:

* Download the project (or clone using GIT)
* Copy .env.example into .env and configure database credentials
* Navigate to the project's root directory using terminal
* Run composer install
  
* Set the encryption key by executing php artisan key:generate --ansi
* Run migrations php artisan migrate --seed
* Start local server by executing php artisan serve
  
* Open new terminal and navigate to the react folder
* Copy react/.env.example into .env and adjust the VITE_API_BASE_URL parameter
* Run npm install
* Run npm run dev to start vite server for React
  
## Usage
To use this application, you can either register a new account or login with an existing one. The default email and password for testing are 'user@email.com' and 'password123!'.
