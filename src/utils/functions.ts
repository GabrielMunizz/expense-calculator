export const getPrices = async () => {
  const result = fetch('https://economia.awesomeapi.com.br/json/all');
  const data = (await result).json();
  return data;
};
