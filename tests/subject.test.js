const StockMarket = require('../src/subjects/Subject');
const ObserverA = require('../src/observers/ObserverA');
const ObserverB = require('../src/observers/ObserverB');

describe('Observer Pattern - Subject', () => {
  let stockMarket;
  let observerA;
  let observerB;

  beforeEach(() => {
    stockMarket = new StockMarket();
    observerA = new ObserverA();
    observerB = new ObserverB();
  });

  it('should notify all observers when stock prices change', () => {
    stockMarket.addObserver(observerA);
    stockMarket.addObserver(observerB);

    stockMarket.setStockPrice('XYZ', 100);
    stockMarket.setStockPrice('ABC', 75);
    stockMarket.setStockPrice('XYZ', 110);

    expect(observerA.portfolio.get('XYZ')).toBe(110);
    expect(observerA.portfolio.get('ABC')).toBe(75);
    expect(observerB.portfolio.get('XYZ')).toBe(110);
    expect(observerB.portfolio.get('ABC')).toBe(75);
  });

  it('should stop notifying a removed observer', () => {
    stockMarket.addObserver(observerA);
    stockMarket.addObserver(observerB);

    stockMarket.setStockPrice('XYZ', 100);
    stockMarket.removeObserver(observerA);
    stockMarket.setStockPrice('ABC', 75);

    expect(observerA.portfolio.has('XYZ')).toBeFalsy();
    expect(observerB.portfolio.get('XYZ')).toBe(100);
    expect(observerB.portfolio.get('ABC')).toBe(75);
  });
});
