import axios from 'axios';

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/coins/markets';

export const fetchMarketData = async () => {
  try {
    const response = await axios.get(COINGECKO_API_URL, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 10,
        page: 1,
        sparkline: true,
        price_change_percentage: '24h'
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching market data from CoinGecko", error);
    return [];
  }
};
