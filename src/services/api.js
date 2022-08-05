export async function getCategories() {
  try {
    const url = 'https://api.mercadolibre.com/sites/MLB/categories';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return 'API Falhou!';
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${categoryId}&q=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return 'API Falhou!';
  }
}