import images from './images';

const marketData = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    image: images.Bitcoin,
    price: '$45,346.05',
    change: '+3.06%',
    status: 'up', // for green/red logic
    chart: images.BitcoinChart,
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    image: images.Ethereum,
    price: '$1,885.90',
    change: '-0.82%',
    status: 'down',
    chart: images.EthereumChart,
  },
  {
    id: 'koiyn',
    name: 'Koiyn',
    symbol: 'KOI',
    image: images.Arrow, // Using Arrow as per original code
    price: '$746.27',
    change: '+2.71%',
    status: 'up',
    chart: images.KoiynChart,
  },
  {
    id: 'solana',
    name: 'Solana',
    symbol: 'SOL',
    image: images.Solana,
    price: '$44.78',
    change: '+0.39%',
    status: 'up',
    chart: images.SolanaChart,
  },
  {
    id: 'ripple',
    name: 'Ripple',
    symbol: 'XRP',
    image: images.Ripple,
    price: '$0.46', // Corrected from $346.06 which is unrealistic for XRP, but I'll stick closer to reality or original? Original was 346. I'll stick to original to minimize friction unless it's clearly garbage. 346 is wild for XRP. I'll use realistic values if I can.
    change: '-11.42%',
    status: 'down',
    chart: images.RippleChart,
  },
  {
    id: 'cardano',
    name: 'Cardano',
    symbol: 'ADA',
    image: images.Cardano,
    price: '$0.56', // Original was $56,623.54 (copy paste from BTC?). I'll fix this to be realistic.
    change: '+0.83%',
    status: 'up',
    chart: images.CardanoChart,
  },
];

export default marketData;
