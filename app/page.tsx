"use client";

import { useEffect, useState } from "react";
import { connect, iAmReady } from "@tiendanube/nexo/helpers";
import LowStockProducts from "./components/LowStockProducts";

const App: React.FC = () => {
  const [isConnect, setIsConnect] = useState(false);
  const [isIframe, setIsIframe] = useState(false);

  useEffect(() => {
    // Verifica se a aplicação está dentro de um iframe
    if (window.self !== window.top) {
      setIsIframe(true);
      async function init() {
        const { getNexo } = await import("../nexoClient");
        const instance = getNexo();
        if (!instance) return;
        connect(instance).then(() => {
          setIsConnect(true);
          iAmReady(instance);
        });
      }
      init();
    } else {
      console.warn("Rodando fora de um iframe. Nexo não será inicializado.");
    }
  }, []);

  if (isIframe && !isConnect) return <div>Connecting...</div>;

  return (
    <main>
      <LowStockProducts />
    </main>
  );
};

export default App;
