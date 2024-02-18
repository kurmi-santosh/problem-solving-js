### S - Single responsibility

- Class should have single responsibility
- If more,
  - let's say Student model, Saving to DB, Sending email are in one single class
  - When you change something, it might break other functionality, and we never know
  - Multiple developers working on same file giving merge conflicts
  - Testing is difficult, as it's tightly coupled and difficult to mock
- We should be having one reason to change, and it can be tested.

### O - Open to Extension but Closed to Modification

- If we want to add some functionality, we should not modify the existing code as it may break the unit tests
- We can extend the functionaliy
- Using extension methods

  ```code
    namespace Extensions {
        public static class EntensionMethods {
            public static void DoSomething(this Student student){
                Console.WriteLine($"Hello {student.firstName}")
            }
        }
    }

  ```

- Decorator pattern
  - If we want to add new functionality to the concrete implementation Service:IService
  - We need to create NewService:IService with this extra DoSomething()

### L - Liskov Substitution Principle

- A child class should be able to do everything that a parent class can do
- But for an example, Obviously child cannot do somethings like parent
  - Parent can 1. EAT 2. SLEEP 3. CODE
  - Child can 1. EAT 2. SLEEP
  - This breaks the Liskov's substitution principle, because Child gives NotImplementation exception for 3. CODE
- To fix this we need to create a Human class with (1. EAT 2. SLEEP)
  and Adult with extra (3. CODE) and Child (Nothing) classes should be inherited from that.

### I - Interface segregation principle

- If our interface contain many methods in it, the implementation forces to return NotImplemented exception.
- For example, consider our repository pattern IRepository
  - If save, saveAsync, update, updateAsync, get, getAsync, RemoveAsync etc..
  - And if we have no right to remove, we need to return NotImplemented exception to RemoveAsync method.
  - This breaks Liskov's Substitution principle
- We can segregate IRepositoryWriter (save, update), IRepositoryReader (get), IRepositoryRemover (remove)

### Dependency Inversion

- Decoupling the usage of an object from its creation.
- Instead of creating the dependency inside the class, we can inject it into the class using constructor.
- This decoupling helps us in writing unit tests better
