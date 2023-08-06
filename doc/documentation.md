observer-pattern/
  |-- src/
  |    |-- index.js
  |    |-- observers/
  |    |    |-- ObserverA.js
  |    |    |-- ObserverB.js
  |    |-- subjects/
  |    |    |-- Subject.js
  |-- tests/
  |    |-- observer.test.js
  |    |-- subject.test.js
  |-- node_modules/
  |-- .gitignore
  |-- package.json
  |-- package-lock.json
  |-- README.md

  Observer Pattern
The Observer pattern is a behavioral design pattern used to establish a one-to-many relationship between objects, so that when an object changes its state, all its dependents (observers) are notified and updated automatically. This pattern allows objects to communicate in a flexible and decoupled manner, avoiding the need for observers to be directly linked to the subject they are observing.

Elements of the Observer pattern:
Subject: It is the central object that maintains a list of observers and provides methods to add, remove, and notify observers when its state changes. When the subject changes, it notifies all the observers about the change.

Observer: Represents the interface or class that must be implemented by all objects that wish to be notified by the subject. The observers registered with the subject receive the notification when there is a change in the subject's state.

Concrete Observers: These are the classes that implement the Observer interface. Each concrete observer contains the logic to respond to subject notifications and update its state accordingly.

Advantages of the Observer pattern:
Decoupling: The subject and observers are decoupled, allowing changes in one without affecting the other.
Extensibility: New observers can be added without modifying the subject, and vice versa.
Flexibility: It allows establishing one-to-many relationships between objects dynamically.
Separation of responsibilities: The subject focuses on its core functionality, while observers handle the actions they need to perform when the subject changes.
Example of using the Observer pattern:
Suppose we have an object called "StockMarket" representing the stock market. We have multiple observers (e.g., "InvestorA" and "InvestorB") who are interested in receiving updates when stock prices change.

The "StockMarket" is the subject that maintains a list of observers.
"InvestorA" and "InvestorB" are observers that register with the "StockMarket" to receive updates.
When the price of a stock changes in the "StockMarket," all registered observers are automatically notified, and each investor will update their portfolio based on the new stock quotes.
This pattern is used in many scenarios in software development, such as graphical interfaces, real-time events, communication between components, and notifications of data changes, among others. It is a powerful tool to achieve flexible and decoupled communication between objects in an application.