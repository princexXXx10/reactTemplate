import React, { useEffect, useState } from 'react';
import { Navbar } from '../components';
import { Footer } from '../container';
import { fetchMarketData } from '../api/market';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import './Market.css';

const Market = () => {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const getCoins = async () => {
      const data = await fetchMarketData();
      if (data && data.length > 0) {
        setCoins(data);
        setFilteredCoins(data);
      }
      setLoading(false);
    };
    
    getCoins();
    
    // Auto-refresh every minute
    const interval = setInterval(getCoins, 60000);
    return () => clearInterval(interval);
  }, []);

  // Handle search
  useEffect(() => {
    let filtered = coins;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(coin =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (activeFilter === 'gainers') {
      filtered = filtered.filter(coin => coin.price_change_percentage_24h > 0);
    } else if (activeFilter === 'losers') {
      filtered = filtered.filter(coin => coin.price_change_percentage_24h < 0);
    }

    setFilteredCoins(filtered);
  }, [searchTerm, activeFilter, coins]);

  return (
    <div className="market-page">
      <Navbar />
      <div className="market-page__content">
        <div className="container">
          {/* Header Section */}
          <div className="market-header">
            <h1 className="market-title">Live Cryptocurrency Market</h1>
            <p className="market-subtitle">Real-time prices and market data</p>
          </div>

          {loading ? (
            <div className="loading-spinner">
              <div className="spinner"></div>
              <p>Loading market data...</p>
            </div>
          ) : (
            <>
              {/* Search and Filters */}
              <div className="market-controls">
                <div className="search-box">
                  <SearchIcon className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search coins..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>

                <div className="filter-tabs">
                  <button
                    className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('all')}
                  >
                    All Coins
                  </button>
                  <button
                    className={`filter-tab ${activeFilter === 'gainers' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('gainers')}
                  >
                    <TrendingUpIcon fontSize="small" /> Gainers
                  </button>
                  <button
                    className={`filter-tab ${activeFilter === 'losers' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('losers')}
                  >
                    <TrendingDownIcon fontSize="small" /> Losers
                  </button>
                </div>
              </div>

              {/* Main Content: Chart + Coin List Side by Side */}
              <div className="market-main-content">
                {/* Left Side: TradingView Chart */}
                <div className="chart-section">
                  <h2 className="section-title">Bitcoin Live Chart</h2>
                  <div className="tradingview-widget-container">
                    <iframe
                      src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_widget&symbol=BTCUSD&interval=D&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=dark&style=1&timezone=Etc%2FUTC&studies_overrides={}&overrides={}&enabled_features=[]&disabled_features=[]&locale=en&utm_source=localhost&utm_medium=widget&utm_campaign=chart&utm_term=BTCUSD"
                      style={{ width: '100%', height: '100%', border: 'none', borderRadius: '16px' }}
                      title="TradingView Chart"
                    />
                  </div>
                </div>

                {/* Right Side: Coins List */}
                <div className="coins-section">
                  <h2 className="section-title">
                    {activeFilter === 'all' && 'All Cryptocurrencies'}
                    {activeFilter === 'gainers' && 'Top Gainers'}
                    {activeFilter === 'losers' && 'Top Losers'}
                    <span className="coin-count">({filteredCoins.length})</span>
                  </h2>

                  {filteredCoins.length === 0 ? (
                    <div className="no-results">
                      <p>No coins found matching your criteria</p>
                    </div>
                  ) : (
                    <div className="coins-list-scrollable">
                      {filteredCoins.map((coin, index) => (
                        <div key={coin.id} className="coin-card-compact" style={{ '--i': index }}>
                          <div className="coin-card-header">
                            <img src={coin.image} alt={coin.name} />
                            <div className="coin-info">
                              <h3>{coin.name}</h3>
                              <span className="coin-symbol">{coin.symbol.toUpperCase()}</span>
                            </div>
                            <div className="coin-rank">#{coin.market_cap_rank}</div>
                          </div>
                          
                          <div className="coin-card-body">
                            <div className="price-section">
                              <div className="price">${coin.current_price.toLocaleString()}</div>
                              <div className={`change ${coin.price_change_percentage_24h > 0 ? 'green' : 'red'}`}>
                                {coin.price_change_percentage_24h > 0 ? '+' : ''}
                                {coin.price_change_percentage_24h.toFixed(2)}%
                              </div>
                            </div>
                            
                            <div className="market-cap">
                              <span className="label">Market Cap</span>
                              <span className="value">${(coin.market_cap / 1e9).toFixed(2)}B</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Market;
