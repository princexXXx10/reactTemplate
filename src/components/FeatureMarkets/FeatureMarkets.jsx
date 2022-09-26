import React from 'react';

import './FeatureMarkets.css';

const FeatureMarkets = () => {
  return (
    <div className='featureMarkets__container'>
        <div className='featureMarkets__wrapper'>
            <div className='featureMarkets__content'>

                <div className='featureMarkets__options'>
                    <h2 className='featureMarkets__hot'>Hot Cryptocurrencies</h2>
                    <p className='featureMarkets__more'>More Market</p>
                </div>

                <div className='featureMarkets__market'>
                    <div className='featureMarkets__market-one'>

                        <div className='featureMarkets__market-data'>
                            <div className='featureMarkets__market-title'>Coin</div>
                            <div className='featureMarkets__market-coin'><span>BTC</span> Bitcoin</div>
                            <div className='featureMarkets__market-coin'><span>ETH</span> Ethereum</div>
                            <div className='featureMarkets__market-coin'><span>KOI</span> Koin</div>
                            <div className='featureMarkets__market-coin'><span>LTC</span> Litecoin</div>
                            <div className='featureMarkets__market-coin'><span>SOL</span> Solana</div>
                        </div>

                    </div>
                    <div className='featureMarkets__market-one'>

                        <div className='featureMarkets__market-data'>
                            <div className='featureMarkets__market-title'>Last Price</div>
                            <div className='featureMarkets__market-price'>1</div>
                            <div className='featureMarkets__market-price'>2</div>
                            <div className='featureMarkets__market-price'>3</div>
                            <div className='featureMarkets__market-price'>4</div>
                            <div className='featureMarkets__market-price'>5</div>
                        </div>

                    </div>
                    <div className='featureMarkets__market-one'>

                        <div className='featureMarkets__market-data'>
                            <div className='featureMarkets__market-title'>24h Change</div>
                            <div className='featureMarkets__market-change'>6</div>
                            <div className='featureMarkets__market-change'>6</div>
                            <div className='featureMarkets__market-change'>6</div>
                            <div className='featureMarkets__market-change'>7</div>
                            <div className='featureMarkets__market-change'>8</div>
                        </div>

                    </div>
                    <div className='featureMarkets__market-one'>

                        <div className='featureMarkets__market-data'>
                            <div className='featureMarkets__market-title' id='mobileView__title'>Chart</div>
                            <div className='chart'>a</div>
                            <div className='chart'>a</div>
                            <div className='chart'>a</div>
                            <div className='chart'>a</div>
                            <div className='chart'>a</div>
                        </div>

                    </div>
                    <div className='featureMarkets__market-one'>

                        <div className='featureMarkets__market-data'>
                            <div className='featureMarkets__market-title' id='mobileView__title'>Trade</div>
                            <div className='buy__button'><button>Buy</button></div>
                            <div className='buy__button'><button>Buy</button></div>
                            <div className='buy__button'><button>Buy</button></div>
                            <div className='buy__button'><button>Buy</button></div>
                            <div className='buy__button'><button>Buy</button></div>
                        </div>
                        
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default FeatureMarkets