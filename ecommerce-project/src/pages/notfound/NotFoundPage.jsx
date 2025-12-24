import React from 'react';
import './NotFoundPage.css'
import Header from "../../components/Header.jsx";

const NotFoundPage = ({cart}) => {
  return (
    <div className="notFoundPage">
      <Header cart={cart}/>
      <div className="container">
        <h1>404</h1>
        <h2>Page not found</h2>
      </div>
    </div>
  );
};

export default NotFoundPage;