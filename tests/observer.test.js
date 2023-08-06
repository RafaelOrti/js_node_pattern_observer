const ObserverA = require('../src/observers/ObserverA');
const ObserverB = require('../src/observers/ObserverB');
const StockMarket = require('../src/subjects/Subject');

describe('Observer Pattern - Observers', () => {
  let observerA;
  let observerB;
  let stockMarket;

  beforeEach(() => {
    observerA = new ObserverA();
    observerB = new ObserverB();
    stockMarket = new StockMarket();
  });

  it('ObserverA should be notified when stock prices change', () => {
    stockMarket.addObserver(observerA);
    stockMarket.setStockPrice('XYZ', 100);

    expect(observerA.portfolio.get('XYZ')).toBe(100);
  });

  it('ObserverB should be notified when stock prices change', () => {
    stockMarket.addObserver(observerB);
    stockMarket.setStockPrice('ABC', 75);

    expect(observerB.portfolio.get('ABC')).toBe(75);
  });

  it('ObserverA should not receive notifications after being removed', () => {
    stockMarket.addObserver(observerA);
    stockMarket.removeObserver(observerA);
    stockMarket.setStockPrice('XYZ', 110);

    expect(observerA.portfolio.has('XYZ')).toBeFalsy();
  });
});
