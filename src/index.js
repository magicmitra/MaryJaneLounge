import React from 'react';
import ReactDOM from 'react-dom/client';
import Product from './Product';
import weeds from './data/weed'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {
      weeds.map(weed => {
        return (
          <Product 
            id={weed.id}
            name={weed.name}
            price={weed.price}
            img={weed.img}
          >
        </Product>
        )
      })
    }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

