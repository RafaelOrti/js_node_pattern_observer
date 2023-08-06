// Import the necessary modules
const StockMarket = require('./src/subjects/Subject');
const ObserverA = require('./src/observers/ObserverA');
const ObserverB = require('./src/observers/ObserverB');

// Create a new StockMarket instance
const stockMarket = new StockMarket();

// Create new observers
const observerA = new ObserverA();
const observerB = new ObserverB();

// Register the observers with the stock market
stockMarket.addObserver(observerA);
stockMarket.addObserver(observerB);

// Simulate stock price changes and notify observers
stockMarket.setStockPrice('XYZ', 100);
stockMarket.setStockPrice('ABC', 75);
stockMarket.setStockPrice('XYZ', 110);

// Unregister an observer (ObserverA)
stockMarket.removeObserver(observerA);

// Simulate more stock price changes and notify remaining observer (ObserverB)
stockMarket.setStockPrice('ABC', 90);
stockMarket.setStockPrice('XYZ', 120);
