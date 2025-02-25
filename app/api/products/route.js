/* eslint-disable @typescript-eslint/no-unused-vars */
export async function GET(_request) {
    try {
      const response = await fetch('https://api.nuvemshop.com.br/v1/5833352/products', {
        headers: {
          'Authentication': `bearer ${process.env.NUVEMSHOP_TOKEN}`, // Defina seu token em .env.local
          'User-Agent': 'Your App Name (15944)',
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        const errorData = await response.text();
        console.error("Erro na API externa:", errorData);
        return new Response(JSON.stringify({ error: 'Erro ao buscar produtos' }), { status: 500 });
      }
  
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      console.error("Erro no endpoint:", error);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }
  