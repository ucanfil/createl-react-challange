# Product Grid React Challange

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
This application built with React, and is an ecommerce site, where you can buy all sorts of ascii faces like `(ノ・∀・)ノ` and `¯_(ツ)_/¯`, in a wide variety of font sizes. The homepage displays a list of products for people to browse.

## Getting Started

To get started, clone the repo from [here](https://github.com/ucanfil/createl-react-challange) to your system and `cd` into your folder, you must be on `development` branch:

> Running BackEnd Server
* Install all server side dependencies with `npm install`
* Start the backend server with `npm start` on `localhost:3000`
    - navigate to `http://localhost:3000/`

> Running FrontEnd Server
* `cd` into `frontend` folder
* Install all client side dependencies with `npm install`
* Start the development server with `npm start`. React will ask you `Would you like to run the app on another port instead? (Y/n)` type `Y`, then you will see the special port react just assigned. (Most probably: `http://localhost:3001/`)
    - navigate to `http://localhost:3001/`

## Features

* Products are displayed in a grid.
* Users are able to sort by "size", "price" or "id", by ascending-order. Product list is being reloaded after every new option is chosen.
* Each product has size, price, and date fields.
* As you scroll down, app starts fetching new pages when scroll position is 300px(threshold) far from the bottom of the page. And users will see a `Loading...` message and a simple animation. (I've misinterpreted this feature a little bit so using scroll time as idle time and starts fetching then it immediately renders new items sometimes before you reach end of the page and works a bit buggy if your scroll falls into threshold you've to scroll up and down again to fetch again. Please share a better way of doing it I'll be much appreciated.)
* When the users reach the end and there are no more products to display, they will see the message "~ end of catalogue ~".
* Showing a random advertisement after every 20 product, consecutevely different from each other.

## Built With

* React
* Fetch API
* IntersectionObserver API

    - UI

    * Used SASS and FlexBox
    * Built screen responsively

## Authors

  - Burak Tilek - [Ucanfil](https://github.com/ucanfil)