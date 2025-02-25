// nexoClient.ts
import nexo from "@tiendanube/nexo";

let instance: any = null;

  instance = nexo.create({
    clientId: "15944",
    log: true,
  });


export default instance;
