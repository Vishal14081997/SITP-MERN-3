import React, { createContext, useEffect, useState } from "react";

export const productContext = createContext();

const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState([]);

    const getProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");

            const data = await response.json();

            setProduct(data);
        } catch (error) {
            console.log("Product API Error:", error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <productContext.Provider value={product}>
            {children}
        </productContext.Provider>
    );
};

export default ProductProvider;