 import axios from 'axios';
import './HomePage.css';
import Header from "../../components/Header.tsx";
import { useEffect, useState } from "react";
import ProductsGrid from "./ProductsGrid.jsx";
import {useSearchParams} from "react-router";

const HomePage = ({ cart, loadCart }) => {

  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {

    const getHomeData = async () => {
      const urlPath = search ? `/api/products?search=${search}` : '/api/products';
      const response = await axios.get(urlPath);
      setProducts(response.data);
    };
    getHomeData();
  }, [search]);


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