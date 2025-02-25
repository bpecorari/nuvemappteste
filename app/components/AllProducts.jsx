"use client";
import React, { useEffect, useState } from "react";
import ProductTable from "./ProductTable";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Erro ao buscar produtos");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchProducts();
  }, []);

  if (error) return <div>Erro: {error}</div>;
  if (!products.length) return <div>Carregando...</div>;

  return <ProductTable products={products} />;
};

export default AllProducts;
