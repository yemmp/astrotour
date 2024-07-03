export async function getData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Sem resposta da API");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados. Erro:", error);
  }
}
