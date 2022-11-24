import React from "react";

import { images } from "../../constants";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

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

                <a href="#link" className="btn-link">
                  More Market <NavigateNextIcon />
                </a>
              </div>

              <div className="market-tab">
                <table className="market-table">
                  <thead className="table-head">
                    <tr className="table-row table-title">
                      <th className="table-heading" scope="col"></th>

                      <th className="table-heading mobile-x" scope="col"></th>

                      <th className="table-heading" scope="col">
                        Name
                      </th>

                      <th className="table-heading" scope="col">
                        Last Price
                      </th>

                      <th className="table-heading" scope="col">
                        24h Change
                      </th>

                      <th className="table-heading mobile-x" scope="col">
                        Chart
                      </th>

                      <th className="table-heading mobile-x">Buy</th>
                    </tr>
                  </thead>

                  <tbody className="table-body">
                    <tr className="table-row">
                      <td className="table-data mobile-x"></td>

                      <th className="table-data rank" scope="row">
                        <img
                          src={images.Bitcoin}
                          width="20"
                          height="20"
                          alt="Bitcoin Icon by Icon8"
                          className="img"
                        />
                      </th>

                      <td className="table-data">
                        <div className="wrapper">
                          <h3>
                            <a href="#link" className="coin-name">
                              BTC <span className="span">Bitcoin</span>
                            </a>
                          </h3>
                        </div>
                      </td>

                      <td className="table-data last-price">$45,346.05</td>

                      <td className="table-data last-update green">+3.06%</td>

                      <td className="table-data mobile-x">
                        <img
                          src={images.BitcoinChart}
                          width="100"
                          height="40"
                          alt="profit chart"
                          className="chart"
                        />
                      </td>

                      <td className="table-data mobile-x">
                        <button className="btn btn-outline">Buy</button>
                      </td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-data mobile-x"></td>

                      <th className="table-data rank" scope="row">
                        <img
                          src={images.Ethereum}
                          width="20"
                          height="20"
                          alt="Ethereum logo"
                          className="img"
                        />
                      </th>

                      <td className="table-data">
                        <div className="wrapper">
                          <h3>
                            <a href="#link" className="coin-name">
                              ETH <span className="span">Ethereum</span>
                            </a>
                          </h3>
                        </div>
                      </td>

                      <td className="table-data last-price">$1,885.90</td>

                      <td className="table-data last-update red">-0.82%</td>

                      <td className="table-data mobile-x">
                        <img
                          src={images.EthereumChart}
                          width="100"
                          height="40"
                          alt="loss chart"
                          className="chart"
                        />
                      </td>

                      <td className="table-data mobile-x">
                        <button className="btn btn-outline">Buy</button>
                      </td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-data mobile-x"></td>

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
                            <a href="#link" className="coin-name">
                              KOI <span className="span">Koiyn</span>
                            </a>
                          </h3>
                        </div>
                      </td>

                      <td className="table-data last-price">$746.27</td>

                      <td className="table-data last-update green">+2.71%</td>

                      <td className="table-data mobile-x">
                        <img
                          src={images.KoiynChart}
                          width="100"
                          height="40"
                          alt="profit chart"
                          className="chart"
                        />
                      </td>

                      <td className="table-data mobile-x">
                        <button className="btn btn-outline">Buy</button>
                      </td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-data mobile-x"></td>

                      <th className="table-data rank" scope="row">
                        <img
                          src={images.Solana}
                          width="20"
                          height="20"
                          alt="Solana logo"
                          className="img"
                        />
                      </th>

                      <td className="table-data">
                        <div className="wrapper">
                          <h3>
                            <a href="#link" className="coin-name">
                              SOL <span className="span">Solana</span>
                            </a>
                          </h3>
                        </div>
                      </td>

                      <td className="table-data last-price">$44.78</td>

                      <td className="table-data last-update green">+0.39%</td>

                      <td className="table-data mobile-x">
                        <img
                          src={images.SolanaChart}
                          width="100"
                          height="40"
                          alt="profit chart"
                          className="chart"
                        />
                      </td>

                      <td className="table-data mobile-x">
                        <button className="btn btn-outline">Buy</button>
                      </td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-data mobile-x"></td>

                      <th className="table-data rank" scope="row">
                        <img
                          src={images.Ripple}
                          width="20"
                          height="20"
                          alt="XRP logo"
                          className="img"
                        />
                      </th>

                      <td className="table-data">
                        <div className="wrapper">
                          <h3>
                            <a href="#link" className="coin-name">
                              XRP <span className="span">Ripple</span>
                            </a>
                          </h3>
                        </div>
                      </td>

                      <td className="table-data last-price">$346.06</td>

                      <td className="table-data last-update red">-11.42%</td>

                      <td className="table-data mobile-x">
                        <img
                          src={images.RippleChart}
                          width="100"
                          height="40"
                          alt="loss chart"
                          className="chart"
                        />
                      </td>

                      <td className="table-data mobile-x">
                        <button className="btn btn-outline">Buy</button>
                      </td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-data mobile-x"></td>

                      <th className="table-data rank" scope="row">
                        <img
                          src={images.Cardano}
                          width="20"
                          height="20"
                          alt="Cardano logo"
                          className="img"
                        />
                      </th>

                      <td className="table-data">
                        <div className="wrapper">
                          <h3>
                            <a href="#link" className="coin-name">
                              ADA <span className="span">Cardano</span>
                            </a>
                          </h3>
                        </div>
                      </td>

                      <td className="table-data last-price">$56,623.54</td>

                      <td className="table-data last-update green">+0.83%</td>

                      <td className="table-data mobile-x">
                        <img
                          src={images.CardanoChart}
                          width="100"
                          height="40"
                          alt="profit chart"
                          className="chart"
                        />
                      </td>

                      <td className="table-data mobile-x">
                        <button className="btn btn-outline">Buy</button>
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
