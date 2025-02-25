"use client";

import { useEffect, useState } from "react";
import { connect, iAmReady } from "@tiendanube/nexo/helpers";
import LowStockProducts from "./components/LowStockProducts";

// Defina um tipo para a instância do Nexo. Se não tiver mais detalhes, use unknown.
type NexoInstance = unknown;

const App: React.FC = () => {
  const [isConnect, setIsConnect] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [nexoInstance, setNexoInstance] = useState<NexoInstance | null>(null);

  useEffect(() => {
    async function init() {
      // Importa a função getNexo dinamicamente para garantir que seja executada no cliente
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
