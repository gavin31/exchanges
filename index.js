
const Okex = require('./exchanges/okex');
const Huobi = require('./exchanges/huobi');
const Binance = require('./exchanges/binance');
const Kucoin = require('./exchanges/kucoin');
const Hitbtc = require('./exchanges/hitbtc');
const Bittrex = require('./exchanges/bittrex');
const Fcoin = require('./exchanges/fcoin');

module.exports = {
  Binance,
  Kucoin,
  Huobi,
  Okex,
  Fcoin,
  // binance: Binance,
  // kucoin: Kucoin,
  // okex: Okex,
  Hitbtc,
  // hitbtc: Hitbtc,
  Bittrex,
  // bittrex: Bittrex
};
