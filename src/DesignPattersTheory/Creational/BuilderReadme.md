### Builder pattern

- This pattern is particularly useful when dealing with a complex object with many optional parameters or configurations.
- It separates the construction of an object from its representation.

- Assume we have a ‘Person‘ class with several optional attributes like ‘firstName’, ‘lastName’, ‘age’, ‘address’, and ‘phone’.

We can use the Builder pattern to create instances of ‘Person’ more intuitively and cleanly, without adding multiple constructors

```code

public class Person {
    private String firstName;
    private String lastName;
    private int age;
    private String address;
    private String phone;

    private Person(PersonBuilder builder) {
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.age = builder.age;
        this.address = builder.address;
        this.phone = builder.phone;
    }

    public static class PersonBuilder {
        private String firstName;
        private String lastName;
        private int age;
        private String address;
        private String phone;

        public PersonBuilder(String firstName, String lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        public PersonBuilder age(int age) {
            this.age = age;
            return this;
        }

        public PersonBuilder address(String address) {
            this.address = address;
            return this;
        }

        public PersonBuilder phone(String phone) {
            this.phone = phone;
            return this;
        }

        public Person build() {
            return new Person(this);
        }
    }

    @Override
    public String toString() {
        return "Person [firstName=" + firstName + ", lastName=" + lastName + ", age=" + age + ", address=" + address
                + ", phone=" + phone + "]";
    }
}

```

```code

public static void main(String[] args) {
    Person person = new PersonBuilder("John", "Doe")
        .age(30)
        .address("123 Main St")
        .phone("555-1234")
        .build();

    System.out.println(person);
}

```
