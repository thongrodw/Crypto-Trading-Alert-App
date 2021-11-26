const indicators = require('trading-indicator')

async function getLastPrice(pair){
    let symbol = `${pair}/USDT`
    let ticker = await indicators.ticker("binance", symbol, true)
    return ticker.last
}


module.exports = {
    getLastPrice
}