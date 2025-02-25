// nexoClient.ts
import nexo from "@tiendanube/nexo";

export function getNexo() {
  if (typeof window !== "undefined") {
    return nexo.create({
      clientId: "15944", // Substitua pelo seu Client ID real
      log: true,
    });
  }
  return null;
}
