import React from "react";

import { images } from "../../constants";
import "./FeatureMarkets.css";

const FeatureMarkets = () => {
  return (
    <div className="featureMarkets__container">
      <div className="featureMarkets__wrapper">
        <div className="featureMarkets__content">
          <section
            className="section market"
            aria-label="market update"
            data-section
          >
            <div className="container">
              <div className="title-wrapper">
                <h2 className="h2 section-title">Hot Cryptocurrencies</h2>

                <a href="#" className="btn-link">
                  More Market
                </a>
              </div>

              <div className="market-tab">
                <table className="market-table">
                  <thead className="table-head">
                    <tr className="table-row table-title">
                      <th className="table-heading"></th>

                      <th className="table-heading" scope="col"></th>

                      <th className="table-heading" scope="col">
                        Name
                      </th>

                      <th className="table-heading" scope="col">
                        Last Price
                      </th>

                      <th className="table-heading" scope="col">
                        24h Change
                      </th>

                      <th className="table-heading" scope="col">
                        Chart
                      </th>

                      <th className="table-heading">Trade</th>
                    </tr>
                  </thead>

                  <tbody className="table-body">
                    <tr className="table-row">
                      <td className="table-data"></td>

                      <th className="table-data rank" scope="row">
                        <img
                          src={images.Arrow}
                          width="20"
                          height="20"
                          alt="Bitcoin logo"
                          className="img"
                        />
                      </th>

                      <td className="table-data">
                        <div className="wrapper">
                          <h3>
                            <a href="#" className="coin-name">
                              Bitcoin <span className="span">BTC</span>
                            </a>
                          </h3>
                        </div>
                      </td>

                      <td className="table-data last-price">$56,623.54</td>

                      <td className="table-data last-update green">+1.45%</td>

                      <td className="table-data">
                        <img
                          src={images.Arrow}
                          width="100"
                          height="40"
                          alt="profit chart"
                          className="chart"
                        />
                      </td>

                      <td className="table-data">
                        <button className="btn btn-outline">Trade</button>
                      </td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-data"></td>

                      <th className="table-data rank" scope="row">
                        <img
                          src={images.Arrow}
                          width="20"
                          height="20"
                          alt="Ethereum logo"
                          className="img"
                        />
                      </th>

                      <td className="table-data">
                        <div className="wrapper">
                          <h3>
                            <a href="#" className="coin-name">
                              Ethereum <span className="span">ETH</span>
                            </a>
                          </h3>
                        </div>
                      </td>

                      <td className="table-data last-price">$56,623.54</td>

                      <td className="table-data last-update red">-5.12%</td>

                      <td className="table-data">
                        <img
                          src={images.Arrow}
                          width="100"
                          height="40"
                          alt="loss chart"
                          className="chart"
                        />
                      </td>

                      <td className="table-data">
                        <button className="btn btn-outline">Trade</button>
                      </td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-data"></td>

                      <th className="table-data rank" scope="row">
                        <img
                          src={images.Arrow}
                          width="20"
                          height="20"
                          alt="Tether logo"
                          className="img"
                        />
                      </th>

                      <td className="table-data">
                        <div className="wrapper">
                          <h3>
                            <a href="#" className="coin-name">
                              Koiyn <span className="span">KOI</span>
                            </a>
                          </h3>
                        </div>
                      </td>

                      <td className="table-data last-price">$56,623.54</td>

                      <td className="table-data last-update green">+1.45%</td>

                      <td className="table-data">
                        <img
                          src={images.Arrow}
                          width="100"
                          height="40"
                          alt="profit chart"
                          className="chart"
                        />
                      </td>

                      <td className="table-data">
                        <button className="btn btn-outline">Trade</button>
                      </td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-data"></td>

                      <th className="table-data rank" scope="row">
                        <img
                          src={images.Arrow}
                          width="20"
                          height="20"
                          alt="BNB logo"
                          className="img"
                        />
                      </th>

                      <td className="table-data">
                        <div className="wrapper">
                          <h3>
                            <a href="#" className="coin-name">
                              BNB <span className="span">BNB/USD</span>
                            </a>
                          </h3>
                        </div>
                      </td>

                      <td className="table-data last-price">$56,623.54</td>

                      <td className="table-data last-update red">-3.75%%</td>

                      <td className="table-data">
                        <img
                          src={images.Arrow}
                          width="100"
                          height="40"
                          alt="loss chart"
                          className="chart"
                        />
                      </td>

                      <td className="table-data">
                        <button className="btn btn-outline">Trade</button>
                      </td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-data"></td>

                      <th className="table-data rank" scope="row">
                        <img
                          src={images.Arrow}
                          width="20"
                          height="20"
                          alt="Solana logo"
                          className="img"
                        />
                      </th>

                      <td className="table-data">
                        <div className="wrapper">
                          <h3>
                            <a href="#" className="coin-name">
                              Solana <span className="span">SOL</span>
                            </a>
                          </h3>
                        </div>
                      </td>

                      <td className="table-data last-price">$56,623.54</td>

                      <td className="table-data last-update green">+1.45%</td>

                      <td className="table-data">
                        <img
                          src={images.Arrow}
                          width="100"
                          height="40"
                          alt="profit chart"
                          className="chart"
                        />
                      </td>

                      <td className="table-data">
                        <button className="btn btn-outline">Trade</button>
                      </td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-data"></td>

                      <th className="table-data rank" scope="row">
                        <img
                          src={images.Arrow}
                          width="20"
                          height="20"
                          alt="XRP logo"
                          className="img"
                        />
                      </th>

                      <td className="table-data">
                        <div className="wrapper">
                          <h3>
                            <a href="#" className="coin-name">
                              XRP <span className="span">XRP</span>
                            </a>
                          </h3>
                        </div>
                      </td>

                      <td className="table-data last-price">$56,623.54</td>

                      <td className="table-data last-update red">-2.22%</td>

                      <td className="table-data">
                        <img
                          src={images.Arrow}
                          width="100"
                          height="40"
                          alt="loss chart"
                          className="chart"
                        />
                      </td>

                      <td className="table-data">
                        <button className="btn btn-outline">Trade</button>
                      </td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-data"></td>

                      <th className="table-data rank" scope="row">
                        <img
                          src={images.Arrow}
                          width="20"
                          height="20"
                          alt="Cardano logo"
                          className="img"
                        />
                      </th>

                      <td className="table-data">
                        <div className="wrapper">
                          <h3>
                            <a href="#" className="coin-name">
                              Cardano <span className="span">ADA</span>
                            </a>
                          </h3>
                        </div>
                      </td>

                      <td className="table-data last-price">$56,623.54</td>

                      <td className="table-data last-update green">+0.8%</td>

                      <td className="table-data">
                        <img
                          src={images.Arrow}
                          width="100"
                          height="40"
                          alt="profit chart"
                          className="chart"
                        />
                      </td>

                      <td className="table-data">
                        <button className="btn btn-outline">Trade</button>
                      </td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-data"></td>

                      <th className="table-data rank" scope="row">
                        <img
                          src={images.Arrow}
                          width="20"
                          height="20"
                          alt="Avalanche logo"
                          className="img"
                        />
                      </th>

                      <td className="table-data">
                        <div className="wrapper">
                          <h3>
                            <a href="#" className="coin-name">
                              Avalanche <span className="span">AVAX</span>
                            </a>
                          </h3>
                        </div>
                      </td>

                      <td className="table-data last-price">$56,623.54</td>

                      <td className="table-data last-update green">+1.41%</td>

                      <td className="table-data">
                        <img
                          src={images.Arrow}
                          width="100"
                          height="40"
                          alt="profit chart"
                          className="chart"
                        />
                      </td>

                      <td className="table-data">
                        <button className="btn btn-outline">Trade</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default FeatureMarkets;
