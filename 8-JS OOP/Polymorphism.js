//Polymorphism
class Animal {
    makeSound() {
        return "The animal make a noise";
    }
}

class Dog extends Animal {
    makeSound() {
        return super.makeSound() + ", the dog barks."
    }
}

class Cat extends Animal {
    makeSound() {
        return "The cat meows."
    }
}

const cat = new Cat();
console.log(cat.makeSound());

const dog = new Dog();
console.log(dog.makeSound());

