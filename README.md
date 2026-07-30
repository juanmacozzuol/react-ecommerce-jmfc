# The Meeple King

A board game e-commerce storefront: browse by category, view product detail, and add items to a cart.

**🔗 Live demo:** _add the Vercel URL here once deployed_

## Features

- Product catalog by category (co-op, gateway, strategy, two-player games) pulled from Firestore.
- Product detail page per item.
- Shopping cart with order creation (`Cart` context + Firestore `orders` collection).

## Stack

- **React 17** (Create React App) + **react-router-dom**
- **Bootstrap** / **reactstrap** for UI
- **Firebase Firestore** as the product/orders database
- Deployed on **Vercel**

## Running it locally

```bash
git clone https://github.com/juanmacozzuol/react-ecommerce-jmfc.git
cd react-ecommerce-jmfc
npm install
```

Create a `.env` file in the root with your own Firebase project config (Firebase Console → Project Settings → General → Your apps):

```
REACT_APP_apiKey=
REACT_APP_authDomain=
REACT_APP_projectId=
REACT_APP_storageBucket=
REACT_APP_messagingSenderId=
REACT_APP_appId=
```

Then start the dev server:

```bash
npm start
```

## Note on Firestore rules

`products` and `categories` are public-read for demo purposes; writes to those collections are disabled. `orders` allows public writes (so the demo checkout works) but not reads, to keep other visitors' test orders private.
