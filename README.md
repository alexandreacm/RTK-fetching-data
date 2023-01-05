
## 💻 Project

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

## ✨ Technologies

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
      "name": "Hambúrgueres"
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
├── assets
│   └── fonts
├── components
│   └── atoms
│   └── molecules
│   └── organisms
│   └── templates
├── pages
├── styles
|   └── theme
|   └── colors
|   └── spacings
```

<div align="center">
  <small>Development for Alexandre carvalho marques - 2023/Jan</small>
</div>
