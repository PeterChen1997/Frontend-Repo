/**
 * Given a list of stock prices for n days, find the maximum profit with a single buy or sell activity.
 */

let findBuySellStockPrices = function (arr) {
    if (!arr || arr.length < 2) {
        return [-1, -1];
    }

    let resultBuy = arr[0];
    let resultSell = arr[1];

    let resultProfit = Number.MIN_SAFE_INTEGER;

    let curProfit;
    for (let i = 1; i < arr.length; i++) {
        curProfit = arr[i] - resultBuy;

        if (curProfit > resultProfit) {
            resultSell = arr[i];
            resultProfit = curProfit;
        }

        if (resultBuy > arr[i]) {
            resultBuy = arr[i];
        }
    }

    return [resultSell - resultProfit, resultSell]; //Return a tuple with (high, low) price values
};

let arrayForStockPrices = [1, 2, 3, 4, 3, 2, 1, 2, 5];
let result = findBuySellStockPrices(arrayForStockPrices);
console.log("Buy Price: " + result[0] + ", Sell Price: " + result[1]);

arrayForStockPrices = [8, 6, 5, 4, 3, 2, 1];
result = findBuySellStockPrices(arrayForStockPrices);
console.log("Buy Price: " + result[0] + ", Sell Price: " + result[1]);
