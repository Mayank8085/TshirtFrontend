import React, { useState, useEffect } from "react";
import "../styles.css";
import Loader from "react-loader";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadAllProduct = () => {
    getProducts().then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <Base title="Home Page" description="Welcome to the Tshirt Store">
      <div className="row text-center">
        
      <div className="container-fluid  text-white text-center  ">
      
        <h1 >All T-shirts</h1>
       
        </div>
        
          {
            loading ? (
              <div 
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                height: "30vh",
                width: "100%",
                position: "relative",
              }}>
                <Loader color="#00BFFF"/>
              </div>
            ) :(
              
              <div className="row">
              {products.map((product, index) => (
                  <div key={index} className="col-12 col-md-4 mb-4">
                    <Card product={product} />
                  </div>
                
              ))}
            </div>
            )
          }
      </div>
    </Base>
  
  );
}
