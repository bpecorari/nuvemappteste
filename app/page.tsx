"use client";

import { useEffect, useState } from "react";
import { connect, iAmReady } from "@tiendanube/nexo/helpers";
import nexo from "../nexoClient"; // Ajuste o path conforme necessário
import LowStockProducts from "./components/LowStockProducts";

const App: React.FC = () => {
  const [isConnect, setIsConnect] = useState(false);

  useEffect(() => {
    // Apenas procede se nexo estiver definido
    if (!nexo) return;
    connect(nexo).then(async () => {
      setIsConnect(true);
      iAmReady(nexo);
    });
  }, []);

  if (!isConnect) return <div>Connecting...</div>;

  return (
    <main>
      <LowStockProducts />
    </main>
  );
};

export default App;
