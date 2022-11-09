class Food {
  constructor(calories) {
    this._calories = calories;
    this._toppings = [];
  }

  get calories() {
    return this._calories;
  }

  get toppings() {
    return this._toppings;
  }

  // This is a function on the Food class.
  toppingsAsString() {
    return this._toppings.join(", ");
  }

  addTopping(topping) {
    this._toppings.push(topping);
  }

  cookingMethod() {
    return "anything";
  }
};

class Donut extends Food {
  constructor() {
    super(500);
  }

  cookingMethod() {
    return "fried";
  }
}

// Three synonymous statements:
// PizzaSlice is a subclass of Food.
// PizzaSlice "inherits" from food.
// Food is a superclass of PizzaSlice.
class PizzaSlice extends Food {
  constructor() {
    // Super refers to the constructor of the superclass.
    // In words, this says: "Make a Food with 400 calories, but now its class type is PizzaSlice".
    super(400);
  }

  cookingMethod() {
    return "baked";
  }
};

// Food -> PizzaSlice -> MushroomPizzaSlice
// These SUBCLASSES inherit the functions of the "parent class" / "superclass". 
class PineappleMushroomPizzaSlice extends PizzaSlice {
  constructor() {
    super();
    this.addTopping('mushroom');
    this.addTopping('pineapple');
  }
}

class Food {
  constructor(calories) {
    this._calories = calories;
    this._toppings = [];
  }

  get calories() {
    return this._calories;
  }

  get toppings() {
    return this._toppings;
  }

  // This is a function on the Food class.
  toppingsAsString() {
    return this._toppings.join(", ");
  }

  addTopping(topping) {
    this._toppings.push(topping);
  }

  cookingMethod() {
    return "anything";
  }
};

class Donut extends Food {
  constructor() {
    super(500);
  }

 // When a subclass defines a function that its parent already has, we call this "overriding" the function. 
 // Here, Donut "overrides" the Food parent class's cookingMethod.
  cookingMethod() {
    return "fried";
  }
}

// Three synonymous statements:
// PizzaSlice is a subclass of Food.
// PizzaSlice "inherits" from food.
// Food is a superclass of PizzaSlice.
class PizzaSlice extends Food {
  constructor() {
    // Super refers to the constructor of the superclass.
    // In words, this says: "Make a Food with 400 calories, but now its class type is PizzaSlice".
    super(400);
  }


  cookingMethod() {
    return "baked";
  }
};

// Food -> PizzaSlice -> MushroomPizzaSlice
// These SUBCLASSES inherit the functions of the "parent class" / "superclass". 
class PineappleMushroomPizzaSlice extends PizzaSlice {
  constructor() {
    super();
    this.addTopping('mushroom');
    this.addTopping('pineapple');
  }
}

const genericFood = new Food(252525);

const pineappleMushroom = new PineappleMushroomPizzaSlice();
pineappleMushroom.cookingMethod();

// What's the difference between class and instance?
//
// Class has set properties that we allow/define (through our code, using `class`, an instance will created from these properties using whatever we pass to the constructor (which will customize the instance we create).
//
// A class is a template, an instance is a copy of that template.
//
// The class is a cookie cutter, and the instance is the cookie. You use the class to make new cookies :)

// What is the relationship between subclass and superclass?
//
// Subclass is a child to the superclass, it inherits its genes (the functions, properties, etc.) unless we override it specifically (we define it again on the child class).

// Why is inheritance useful?
//
// Because it saves time. We can reuse code.
//
// Not to repeat ourselves.
//
// Less coding.
//
// You don't have to write the same code over and over.

// Goal: Practice class design and thinking about how things can be inherited.
// 
// What you need to do:
// Design one superclass (RecodedMember) and three subclasses (RecodedStudent, RecodedTeacher, RecodedStaff). 
// 
// * Add one method to the superclass that remains unchanged by any of the child classes (it should "work correctly" when called by any child class, the child class should not override it)
// * Add one method to the superclass that is overridden by all three subclasses.
// * Add at least two methods that are specific to the subclasses (the superclass does not have it, only the subclass has it).

