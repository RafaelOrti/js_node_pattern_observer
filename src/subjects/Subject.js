class StockMarket {
  constructor() {
    this.stockPrices = new Map();
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  setStockPrice(stockSymbol, price) {
    this.stockPrices.set(stockSymbol, price);
    this.notifyObservers(stockSymbol, price);
  }

  notifyObservers(stockSymbol, price) {
    this.observers.forEach(observer => {
      observer.update(stockSymbol, price);
    });
  }
}

module.exports = StockMarket;
