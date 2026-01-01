import React, { useEffect, useState } from "react";

import { images } from "../../constants";
import { fetchMarketData } from "../../api/market";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import "./FeatureMarkets.css";

// Mini Sparkline Chart Component
const MiniChart = ({ sparklineData, isPositive }) => {
  if (!sparklineData || sparklineData.length === 0) {
    return <img src={images.BitcoinChart} width="100" height="40" alt="chart" className="chart" />;
  }

  const width = 100;
  const height = 40;
  const padding = 2;

  // Find min and max for scaling
  const values = sparklineData.filter(v => v !== null);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  // Create SVG path
  const points = values.map((value, index) => {
    const x = (index / (values.length - 1)) * (width - padding * 2) + padding;
    const y = height - padding - ((value - min) / range) * (height - padding * 2);
    return `${x},${y}`;
  });

  const pathData = `M ${points.join(' L ')}`;
  const color = isPositive ? '#10B981' : '#EF4444';

  return (
    <svg width={width} height={height} className="chart sparkline-chart">
      <path
        d={pathData}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const FeatureMarkets = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const apiData = await fetchMarketData();
      if (apiData && apiData.length > 0) {
        const mappedData = apiData.slice(0, 6).map((coin) => {
           return {
             id: coin.id,
             name: coin.name,
             symbol: coin.symbol.toUpperCase(),
             image: coin.image, 
             price: `$${coin.current_price.toLocaleString()}`,
             change: `${coin.price_change_percentage_24h.toFixed(2)}%`,
             status: coin.price_change_percentage_24h >= 0 ? 'up' : 'down',
             sparkline: coin.sparkline_in_7d?.price || [],
           };
        });
        setData(mappedData);
      }
    };
    
    // Initial fetch
    getData();
    
    // Refresh every 60 seconds
    const interval = setInterval(getData, 60000);
    
    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="featureMarkets__container">
      <div className="featureMarkets__wrapper">
        <section
          className="section market"
          aria-label="market update"
          data-section
        >
          <div className="container">
            <div className="title-wrapper">
              <h2 className="h2 section-title">Hot Cryptocurrencies</h2>

              <a href="/market" className="btn-link">
                More Market <NavigateNextIcon />
              </a>
            </div>

            <div className="market-tab">
              <table className="market-table">
                <thead className="table-head">
                  <tr className="table-row table-title">
                    <th className="table-heading" scope="col"></th>
                    <th className="table-heading mobile-x" scope="col"></th>
                    <th className="table-heading" scope="col">Name</th>
                    <th className="table-heading" scope="col">Last Price</th>
                    <th className="table-heading" scope="col">24h Change</th>
                    <th className="table-heading mobile-x" scope="col">Chart</th>
                    <th className="table-heading mobile-x">Buy</th>
                  </tr>
                </thead>

                  <tbody className="table-body">
                    {data.length === 0 ? (
                      <tr className="table-row"><td colSpan="7" style={{textAlign: "center"}}>Loading live data...</td></tr>
                    ) : (
                      data.map((coin, index) => (
                        <tr className="table-row" key={coin.id} style={{ '--i': index }}>
                          <td className="table-data mobile-x"></td>

                          <th className="table-data rank" scope="row">
                            <img
                              src={coin.image}
                              width="20"
                              height="20"
                              alt={`${coin.name} logo`}
                              className="img"
                            />
                          </th>

                        <td className="table-data">
                          <div className="wrapper">
                            <h3>
                              <a href="#link" className="coin-name">
                                {coin.symbol} <span className="span">{coin.name}</span>
                              </a>
                            </h3>
                          </div>
                        </td>

                        <td className="table-data last-price">{coin.price}</td>

                        <td className={`table-data last-update ${coin.status === 'up' ? 'green' : 'red'}`}>
                          {coin.change}
                        </td>

                        <td className="table-data mobile-x">
                          <MiniChart 
                            sparklineData={coin.sparkline} 
                            isPositive={coin.status === 'up'} 
                          />
                        </td>

                        <td className="table-data mobile-x">
                          <button className="btn btn-outline">Buy</button>
                        </td>
                      </tr>
                    )))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    
  );
};
export default FeatureMarkets;
