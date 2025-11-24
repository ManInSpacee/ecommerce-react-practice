import React from 'react';
import './NotFoundPage.css'
import Header from "../../components/Header.jsx";

const NotFoundPage = () => {
  return (
    <div className="notFoundPage">
      <Header />
      <div className="container">
        <h1>404</h1>
        <h2>Page not found</h2>
      </div>
    </div>
  );
};

export default NotFoundPage;