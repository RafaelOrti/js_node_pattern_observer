class ObserverA {
  constructor() {
    this.portfolio = new Map();
  }

  update(stockSymbol, price) {
    this.portfolio.set(stockSymbol, price);
    this.displayPortfolio();
  }

  displayPortfolio() {
    console.log(`ObserverA's Portfolio:`);
    this.portfolio.forEach((price, stockSymbol) => {
      console.log(`${stockSymbol}: ${price}`);
    });
    console.log('--------------------------');
  }
}

module.exports = ObserverA;
