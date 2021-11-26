var express = require('express');
var router = express.Router();
const services = require('../services/index')
const indicators = require('trading-indicator')
const ema = require('trading-indicator').ema
const stochasticRSI = require('trading-indicator').stochasticRSI
const macd = require('trading-indicator').macd

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/:symbol', async function(req, res, next) {
  let symbol = `${req.params.symbol}/USDT`
  let ticker = await indicators.ticker("binance", symbol, true)
  res.json(ticker)
});

/* GET home page. */
router.get('/:symbol/lastprice', async function(req, res, next) {
  let symbol = `${req.params.symbol}/USDT`
  let ticker = await indicators.ticker("binance", symbol, true)
  res.json(ticker.last)
});

/* GET home page. */
router.get('/:symbol/alert', async function(req, res, next) {
  let symbol = `${req.params.symbol}/USDT`
  let alert = await macd(12, 26, 9, "close", "binance", symbol, "15m", true)
  res.json(alert[alert.length-1])
});

router.get('/:symbol/indicator/macd', async function(req, res, next) {
  let symbol = `${req.params.symbol}/USDT`
  let alert = await macd(12, 26, 9, "close", "binance", symbol, "15m", true)
  res.json(alert[alert.length-1])
});

/* GET home page. */
router.get('/:symbol/indicator/stochRSI', async function(req, res, next) {
  let symbol = `${req.params.symbol}/USDT`
  console.log(await stochasticRSI(3, 3, 14, 14, "close", "binance", symbol, "1d", true))
});



module.exports = router;
