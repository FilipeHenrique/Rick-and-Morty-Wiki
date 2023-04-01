

## Project Overview

Project built with [Next.js](https://nextjs.org/) as a practice with the [Rick and Morty API](https://rickandmortyapi.com) aiming to build a Rick and Morty Wiki.

This project was deploayed at [Vercel](https://vercel.com) and can be accesed by clicking [here](https://rick-and-morty-wiki-chi.vercel.app).

The first page consists into a list with pagination of all the characters from the series, including a search feature that searches globally for a character independent of the page he is located. 

There is also a feature of adding a character to favourites, which uses localstorage to keep track of the data in your browser.

![Characters List](./readme_assets/homepage.png)

When u click into a character you are redirected to a details page, containing the character information and the appeared episodes. In this page is also possible to toggle the favourite status of the character.

![Characters Details](./readme_assets/charactersPage.png)

In case you go into some invalid URL you will get the coolest 404 page
![Characters Details](./readme_assets/404.png)

## Technologies Used


<div >
    <a href="https://nextjs.org/">
    <img alt="next-js" src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" height="80px" />
    </a>
     <a href="https://tanstack.com/query/v3/">
    <img alt="react-query" src="https://blog.theodo.com/static/bb12ede8ede50acc8cdb447e7dc8bf6e/6fe88/rq-logo.png" height="80px" />
    </a>
     <a href="https://www.styled-components.com">
    <img alt="styled-components" src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" height="80px" />
    </a>
    <a href="https://www.cypress.io">
    <img alt="cypress" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ih3wgcjnztxkqpvy8t8b" height="80px" />
    </a>
</div>




## Running the project

First, run the development server:

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running Tests

The components were tested using [Cypress](https://www.cypress.io). For running the tests in the Cypress GUI use the command:

```bash
npx cypress open
```



