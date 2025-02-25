"use client";

import { useEffect, useState } from "react";
import { connect, iAmReady } from "@tiendanube/nexo/helpers";
import LowStockProducts from "./components/LowStockProducts";

const App: React.FC = () => {
  const [isConnect, setIsConnect] = useState(false);
  const [nexoInstance, setNexoInstance] = useState<any>(null);

  useEffect(() => {
    async function init() {
      // Importa a função getNexo de forma dinâmica para garantir que só seja executada no cliente
      const { getNexo } = await import("../nexoClient");
      const instance = getNexo();
      if (!instance) return;
      setNexoInstance(instance);
      connect(instance).then(() => {
        setIsConnect(true);
        iAmReady(instance);
      });
    }
    init();
  }, []);

  if (!isConnect) return <div>Connecting...</div>;

  return (
    <main>
      <LowStockProducts />
    </main>
  );
};

export default App;
