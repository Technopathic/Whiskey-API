# Whiskey-API

## Introduction
The Whiskey-API is a NodeJS and MongoDB web application that delivers information on various whiskeys in JSON format.
The whiskey data has been scraped from various sources and there are over 100 whiskeys in the database. The database contains information on nose, palate, finish, country of origin, and images of the whiskey.
This project has been organized in a way that separates controllers, models, and routes. I always try to organize my application structure similar to any MVC framework. The models schemas are developed using mongoose in order to communicate fluidly with the MongoDB service. By default, this application uses mlab, but can be outfitted with different MongoDB services.

## Demo
[Technopathic's Whiskey List](https://whiskey.helsinki.codes/whiskey)

## Requirements
* NodeJS 12.8.x
* NPM 6.9.x
* MongoDB 3.6.x
* Mongoose
* Express

## Getting Started
The quickest way to get started with developing on the Whiskey-API is to clone this repo. After you've cloned this repo, you can then run ```npm install``` to begin installing node_modules. 
You will also find the whiskey.json file inside of the config folder which contains a copy of the whiskey database which you can import to your MongoDB service.
Be sure to also add your database connection to the ```config/database.js``` file. 


## License
MIT
