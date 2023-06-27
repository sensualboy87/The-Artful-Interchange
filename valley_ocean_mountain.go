package main

import "fmt"

// main is the starting point of the program.
func main() {
	fmt.Println("Welcome to The Artful Interchange")

	// The primary purpose of this program is to interace seamlessly
	// between multiple systems.
	interchange := NewInterchange()

	// Register the components that will be integrated.
	interchange.Register("A", NewSystemA())
	interchange.Register("B", NewSystemB())

	// Exchange data among systems.
	interchange.Exchange("A", "B", "data")
}

// Interchange holds the registrations of multiple systems.
type Interchange struct {
	registrations map[string]System
}

// NewInterchange creates a new instance of the Interchange.
func NewInterchange() *Interchange {
	return &Interchange{
		registrations: make(map[string]System),
	}
}

// System is the interface used to register components.
type System interface {
	Exchange(data string)
}

// Register adds a new system to the interchange.
func (i *Interchange) Register(name string, s System) {
	i.registrations[name] = s
}

// Exchange exchanges data between two systems.
func (i *Interchange) Exchange(src, dst string, data string) {
	s, ok := i.registrations[src]
	if !ok {
		panic("unregistered source")
	}
	s.Exchange(data)

	d, ok := i.registrations[dst]
	if !ok {
		panic("unregistered destination")
	}
	d.Exchange(data)
}

// SystemA is an example implementation of a System.
type SystemA struct{}

// NewSystemA creates a new instance of SystemA.
func NewSystemA() System {
	return &SystemA{}
}

// Exchange exchanges data with SystemA.
func (s *SystemA) Exchange(data string) {
	fmt.Println("SystemA: Exchanging data")
}

// SystemB is an example implementation of a System.
type SystemB struct{}

// NewSystemB creates a new instance of SystemB.
func NewSystemB() System {
	return &SystemB{}
}

// Exchange exchanges data with SystemB.
func (s *SystemB) Exchange(data string) {
	fmt.Println("SystemB: Exchanging data")
}