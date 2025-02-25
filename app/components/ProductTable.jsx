"use client";
import React from "react";
import { Table } from "@nimbus-ds/components";

const ProductTable = ({ products }) => (
  <Table>
    <Table.Head>
      <Table.Row>
        <Table.Cell>ID</Table.Cell>
        <Table.Cell>Nome</Table.Cell>
        <Table.Cell>Preço</Table.Cell>
        <Table.Cell>Estoque</Table.Cell>
        <Table.Cell>Categorias</Table.Cell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      {products.map((product) => {
        const totalStock = product.variants.reduce(
          (acc, variant) => acc + Number(variant.stock || 0),
          0
        );
        const price = product.variants[0] ? product.variants[0].price : "N/A";
        const categories = product.categories
          .map((cat) => cat.name.pt)
          .join(", ");
        return (
          <Table.Row key={product.id}>
            <Table.Cell>{product.id}</Table.Cell>
            <Table.Cell>{product.name.pt}</Table.Cell>
            <Table.Cell>{price}</Table.Cell>
            <Table.Cell>{totalStock}</Table.Cell>
            <Table.Cell>{categories}</Table.Cell>
          </Table.Row>
        );
      })}
    </Table.Body>
  </Table>
);

export default ProductTable;
