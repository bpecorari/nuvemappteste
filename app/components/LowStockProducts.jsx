"use client";
import React, { useEffect, useState } from 'react';

const LowStockProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const threshold = 10;

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Erro ao buscar produtos');
        }
        const data = await response.json();
        // Somando o estoque de todas as variantes:
        const lowStockProducts = data.filter(product => {
          const totalStock = product.variants.reduce((acc, variant) => acc + Number(variant.stock || 0), 0);
          return totalStock < threshold;
        });
        setProducts(lowStockProducts);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchProducts();

    // Exemplo de notificação para o parent (caso necessário)
    window.parent.postMessage({ type: 'resize', height: document.body.scrollHeight }, '*');
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Produtos com Estoque Abaixo de {threshold}</h1>
      {error && <p style={{ color: 'red' }}>Erro: {error}</p>}
      {products.length === 0 && !error ? (
        <p>Nenhum produto com estoque baixo encontrado.</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <strong>{product.name.pt}</strong> – Estoque total:{" "}
              {product.variants.reduce((acc, variant) => acc + Number(variant.stock || 0), 0)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LowStockProducts;
