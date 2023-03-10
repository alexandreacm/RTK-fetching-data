
## π» Project

An example of Product CRUD with Atomic Design, @Shopify/restyle, RTK from Redux.

# Team

- Here must contain the names of everyone in the team, at the moment that
  project is created
  - Developer: Alexandre Marques
  - Scrum Master: XXXX XXXX

# To Stylization

To styling issues, we use @Shopify/restyle as the main library.

## Features

- [ ] List products;
- [ ] Create product;
- [ ] Update Product;
- [ ] Delete Product;

## β¨ Technologies

- [ ] Expo CLI
- [ ] Expo Fonts
- [ ] Expo Icons
- [ ] React Redux
- [ ] @Reduxjs/toolkit RTJK
- [ ] @Shopify/restyle


## to use this project

Getting started
Install JSON Server

```cl
npm install -g json-server
```

```cl
Create a db.json file with some data in anywhere with this structure.

{
  "products": [
    {
      "id": 1,
      "name": "Coca cola 600ml",
      "description": "",
      "price": 7.5,
      "category_id": 2
    }
  ],
  "categories": [
    {
      "id": 1,
      "name": "HambΓΊrgueres"
    },
    {
      "id": 2,
      "name": "Refrigerantes"
    }
  ]
}
```

Start JSON Server
```cl
json-server --watch db.json
```



## Running the project

Use **yarn** or **npm install** to install project dependencies. Then start the
project.

```cl
yarn android/ios or npx expo start 
```

<br />

# Project Structure

```bash
βββ assets
β   βββ fonts
βββ components
β   βββ atoms
β   βββ molecules
β   βββ organisms
β   βββ templates
βββ constants
βββ hooks
βββ pages
βββ services
βββ store
βββ styles
β   βββ theme
        ββ colors
        ββ spacing
        ββ breakpoints
βββ types
```

<div align="center">
  <small>Development for Alexandre carvalho marques - 2023/Jan</small>
</div>
