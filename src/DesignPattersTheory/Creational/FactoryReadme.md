## Factory Design Pattern

### Each time a new change is made on the library side, the Client would need to make some corresponding changes at its end and recompile the code.
### Sounds bad? This is a very bad practice of design.


## Without Factory

```code

// Library classes
abstract class Vehicle {
    public abstract void printVehicle();
}
 
class TwoWheeler extends Vehicle {
    public void printVehicle() {
        System.out.println("I am two wheeler");
    }
}
 
class FourWheeler extends Vehicle {
    public void printVehicle() {
        System.out.println("I am four wheeler");
    }
}
 
// Client (or user) class

class Client {

    private Vehicle pVehicle;
 
    public Client(int type) {
        if (type == 1) {
            pVehicle = new TwoWheeler();
        } else if (type == 2) {
            pVehicle = new FourWheeler();
        } else {
            pVehicle = null;
        }
    }
 
    public void cleanup() {
        if (pVehicle != null) {
            pVehicle = null;
        }
    }
 
    public Vehicle getVehicle() {
        return pVehicle;
    }
}

```