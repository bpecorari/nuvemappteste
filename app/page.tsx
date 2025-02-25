"use client";
import React, { useEffect, useState } from "react";
import { connect, iAmReady } from "@tiendanube/nexo/helpers";
import AllProducts from "./components/AllProducts";

const App: React.FC = () => {
  const [isConnect, setIsConnect] = useState(false);

  useEffect(() => {
    async function init() {
      if (window.self !== window.top) {
        const { getNexo } = await import("../nexoClient");
        const instance = getNexo();
        if (!instance) return;
        connect(instance).then(() => {
          setIsConnect(true);
          iAmReady(instance);
        });
      } else {
        // Fora do iframe, não inicializa o Nexo
        setIsConnect(true);
      }
    }
    init();
  }, []);

  if (!isConnect) return <div>Connecting...</div>;

  return (
    <main>
      <AllProducts />
    </main>
  );
};

export default App;
