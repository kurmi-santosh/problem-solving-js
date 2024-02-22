## Observer Design Pattern

- Observer Pattern is a behavioral design pattern that defines a one-to-many dependency between objects so that when one object changes state,
  all its dependents are notified.
- This pattern is commonly used to implement distributed event handling systems.

### Key Concepts of Observer Method Design Pattern

- Subject:
  - Is the object that maintains a list of its dependents, also known as observers
  - It provides an interface for attaching, detaching, and notifying observers.
  - Observer List
    - The subject maintains a list (or collection) of observers, allowing multiple observers to be notified of changes.
- Observer:
  - Is the interface that defines the update method, which is called by the subject to notify the observer of a change in the subject’s state.
  - Observers register themselves with the subject to receive updates.

### Implementation

```java
    // Subject (Observable)
    class WeatherStation {
        private List<Observer> observers = new ArrayList<>();
        private float temperature;

        public void addObserver(Observer observer) {
            observers.add(observer);
        }

        public void removeObserver(Observer observer) {
            observers.remove(observer);
        }

        public void setTemperature(float temperature) {
            this.temperature = temperature;
            notifyObservers();
        }

        private void notifyObservers() {
            for (Observer observer : observers) {
                observer.update(temperature);
            }
        }
    }
```

```java

    // Observer
    interface Observer {
        void update(float temperature);
    }

    // Concrete Observer 1
    class CurrentConditionsDisplay implements Observer {
        private float temperature;

        @Override
        public void update(float temperature) {
            this.temperature = temperature;
            display();
        }

        private void display() {
            System.out.println("Current Conditions Display: Temperature = " + temperature);
        }
    }

    // Concrete Observer 2
    class StatisticsDisplay implements Observer {
        private float temperature;

        @Override
        public void update(float temperature) {
            this.temperature = temperature;
            display();
        }

        private void display() {
            System.out.println("Statistics Display: Temperature = " + temperature);
        }
    }

```

```java

    // Main class
    public class ObserverPatternExample {
        public static void main(String[] args) {
            WeatherStation weatherStation = new WeatherStation();

            CurrentConditionsDisplay currentConditionsDisplay = new CurrentConditionsDisplay();
            StatisticsDisplay statisticsDisplay = new StatisticsDisplay();

            weatherStation.addObserver(currentConditionsDisplay);
            weatherStation.addObserver(statisticsDisplay);

            // Simulate a change in temperature
            weatherStation.setTemperature(25.5f);
            // Output:
            // Current Conditions Display: Temperature = 25.5
            // Statistics Display: Temperature = 25.5

            // Simulate another change in temperature
            weatherStation.setTemperature(30.0f);
            // Output:
            // Current Conditions Display: Temperature = 30.0
            // Statistics Display: Temperature = 30.0

            // Remove an observer
            weatherStation.removeObserver(currentConditionsDisplay);

            // Simulate another change in temperature
            weatherStation.setTemperature(28.0f);
            // Output:
            // Statistics Display: Temperature = 28.0
        }
    }

```
