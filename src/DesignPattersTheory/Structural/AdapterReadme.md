## Adapter design pattern

Let’s consider a scenario where we have an existing system that uses a LegacyPrinter class with a method named printDocument()
which we want to adapt into a new system that expects a Printer interface with a method named print(). 
We’ll use the Adapter design pattern to make these two interfaces compatible.

```code

    // Target Interface
    interface Printer {
        void print();
    };

```

```code

    // Adaptee   
    interface LegacyPrinter {
        void printDocument();
    };

```

```code

// Adapter
 
    class PrinterAdapter : Printer {
    
        private LegacyPrinter legacyPrinter;
        
        public override void print() {
            legacyPrinter.printDocument();
        }
    }

```

### Use cases:

- Integrate existing components into new systems without modifying their original code
- Acts as a bridge, allowing systems with incompatible interfaces to collaborate effectively.

## Limitations

- Managing a large number of adapters might lead to increased complexity and maintenance challenges
- presence of adapters makes the system design less clear or harder to understand