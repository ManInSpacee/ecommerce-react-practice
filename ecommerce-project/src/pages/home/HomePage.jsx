import axios from 'axios';
import './HomePage.css';
import Header from "../../components/Header.jsx";
import { useEffect, useState } from "react";
import ProductsGrid from "./ProductsGrid.jsx";

const HomePage = ({ cart, loadCart }) => {

  const [products, setProducts] = useState([]);


  useEffect(() => {

    const getHomeData = async () => {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    };
    getHomeData();
  }, []);


  return (
    <>
      <link rel="icon" type="image/svg+xml" href="src/assets/images/icons/home-favicon.png"/>
      <title>Ecommerce Project</title>


      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart}/>
      </div>
    </>
  );
};

export default HomePage;