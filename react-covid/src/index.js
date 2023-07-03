import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; 

import App from "./App";
import "./index.css";
import store from "./Store/Store";
import { Provider } from "react-redux";


import { BrowserRouter } from "react-router-dom";
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
  integrity="sha384-pzjw8+Hcd5k8F6o8Q7t9X0od+d9PtoAmfMg9E65Py5p+bb9KaFskZO5E620TJ+dZ"
  crossorigin="anonymous"
/>


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);

root.render(
  <Provider store={store}>
  <React.StrictMode>
    {/*
     * Bungkus/Hubungkan Aplikasi dengan Browser Router.
     * Agar URL browser dapat dimanipulasi oleh React Router
     */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
);
