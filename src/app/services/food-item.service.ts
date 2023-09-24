import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodItemService {

  categories =
    [
      {
        "id": 1,
        "name": "Appetizers",
        "description": "Delicious starters to whet your appetite.",
        "items":[
          {
            "id": 1,
            "name": "Mozzarella Sticks",
            "description": "Fried cheese sticks served with marinara sauce.",
            "price": 199
          },
          {
            "id": 2,
            "name": "Chicken Wings",
            "description": "Spicy chicken wings served with blue cheese dressing.",
            "price": 249
          },
          {
            "id": 3,
            "name": "Nachos",
            "description": "Crispy tortilla chips topped with cheese, jalapeños, and salsa.",
            "price": 179
          },
          {
            "id": 4,
            "name": "Bruschetta",
            "description": "Toasted bread topped with diced tomatoes, garlic, and basil.",
            "price": 169
          },
          {
            "id": 5,
            "name": "Shrimp Cocktail",
            "description": "Chilled shrimp served with cocktail sauce.",
            "price": 299
          }
        ]
      },
      {
        "id": 2,
        "name": "Main Courses",
        "description": "Hearty and satisfying main dishes.",
        "items":[
          {
            "id": 6,
            "name": "Chicken Biryani",
            "description": "A fragrant rice dish cooked with tender chicken and aromatic spices.",
            "price": 250.0
          },
          {
            "id": 7,
            "name": "Paneer Tikka Masala",
            "description": "Cubes of paneer cooked in a rich and creamy tomato-based gravy.",
            "price": 220.0
          },
          {
            "id": 8,
            "name": "Mutton Rogan Josh",
            "description": "A classic Kashmiri dish made with tender mutton and a blend of spices.",
            "price": 300.0
          },
          {
            "id": 9,
            "name": "Veggie Fried Rice",
            "description": "Stir-fried rice with assorted vegetables and flavorful seasonings.",
            "price": 180.0
          },
          {
            "id": 9,
            "name": "Butter Chicken",
            "description": "Tender chicken in a rich and creamy tomato-based sauce.",
            "price": 280.0
          }
        ]
        
      },
      {
        "id": 3,
        "name": "Desserts",
        "description": "Sweet treats to satisfy your cravings.",
        "items":[
          {
            "id": 10,
            "name": "Chocolate Cake",
            "description": "A rich and indulgent chocolate cake.",
            "price": 80
          },
          {
            "id": 11,
            "name": "Vanilla Ice Cream",
            "description": "Classic vanilla ice cream with a creamy texture.",
            "price": 50
          },
          {
            "id": 12,
            "name": "Strawberry Cheesecake",
            "description": "Creamy cheesecake with a strawberry topping.",
            "price": 90
          },
          {
            "id": 13,
            "name": "Fruit Salad",
            "description": "A fresh and healthy fruit salad.",
            "price": 60
          },
          {
            "id": 14,
            "name": "Gulab Jamun",
            "description": "Soft and sweet Indian dessert dumplings.",
            "price": 40
          },
          {
            "id": 15,
            "name": "Mango Sorbet",
            "description": "Refreshing mango-flavored sorbet.",
            "price": 70
          },
          {
            "id": 16,
            "name": "Rasgulla",
            "description": "Spongy and sweet Indian dessert.",
            "price": 30
          },
          {
            "id": 17,
            "name": "Caramel Pudding",
            "description": "Smooth and creamy caramel-flavored pudding.",
            "price": 80
          },
          {
            "id": 18,
            "name": "Apple Pie",
            "description": "Homemade apple pie with a flaky crust.",
            "price": 95
          },
          {
            "id": 19,
            "name": "Choco Chip Cookies",
            "description": "Delicious chocolate chip cookies.",
            "price": 45
          }
        ]
        
      },
      {
        "id": 4,
        "name": "Beverages",
        "description": "Refreshing drinks to quench your thirst.",
        "items":[
          {
            "id": 20,
            "name": "Cola",
            "description": "Classic cola soda",
            "price": 30.0
          },
          {
            "id": 21,
            "name": "Orange Juice",
            "description": "Freshly squeezed orange juice",
            "price": 50.0
          },
          {
            "id": 22,
            "name": "Coffee",
            "description": "Hot brewed coffee",
            "price": 40.0
          },
          {
            "id": 23,
            "name": "Iced Tea",
            "description": "Chilled iced tea",
            "price": 35.0
          },
          {
            "id": 24,
            "name": "Mango Lassi",
            "description": "Creamy mango yogurt drink",
            "price": 60.0
          },
          {
            "id": 25,
            "name": "Mineral Water",
            "description": "Bottled mineral water",
            "price": 25.0
          }
        ]        
      },
      {
        "id": 5,
        "name": "Salads",
        "description": "Fresh and healthy salad options.",
        "items":[
          {
            "id": 26,
            "name": "Caesar Salad",
            "description": "Fresh romaine lettuce, croutons, and parmesan cheese tossed in Caesar dressing.",
            "price": 250
          },
          {
            "id": 27,
            "name": "Greek Salad",
            "description": "A Mediterranean delight with tomatoes, cucumbers, olives, and feta cheese in Greek dressing.",
            "price": 220
          },
          {
            "id": 28,
            "name": "Caprese Salad",
            "description": "Tomatoes, mozzarella cheese, and fresh basil drizzled with balsamic glaze.",
            "price": 280
          },
          {
            "id": 29,
            "name": "Spinach and Strawberry Salad",
            "description": "Baby spinach leaves, fresh strawberries, and walnuts with a raspberry vinaigrette.",
            "price": 210
          },
          {
            "id": 30,
            "name": "Cobb Salad",
            "description": "A hearty salad with grilled chicken, bacon, eggs, avocado, and blue cheese dressing.",
            "price": 320
          }
        ]
        
      },
      {
        "id": 6,
        "name": "Sandwiches",
        "description": "Delicious sandwich creations for every palate.",
        "items":[
          {
            "id": 31,
            "name": "Classic BLT",
            "description": "A timeless favorite with crispy bacon, lettuce, and tomato.",
            "price": 85
          },
          {
            "id": 32,
            "name": "Grilled Cheese",
            "description": "Melted cheese between slices of buttery toasted bread.",
            "price": 60
          },
          {
            "id": 33,
            "name": "Veggie Delight",
            "description": "A medley of fresh vegetables and sauces on whole wheat bread.",
            "price": 75
          },
          {
            "id": 34,
            "name": "Chicken Club",
            "description": "Grilled chicken, bacon, lettuce, and mayo on a toasted bun.",
            "price": 95
          },
          {
            "id": 35,
            "name": "Spicy Paneer Wrap",
            "description": "Paneer tikka, veggies, and spicy sauce wrapped in a tortilla.",
            "price": 70
          }
        ]
        
      },
      {
        "id": 7,
        "name": "Pasta",
        "description": "Tasty pasta dishes for pasta lovers.",
        "items":[
          {
            "id": 36,
            "name": "Spaghetti Carbonara pasta",
            "description": "Classic Italian pasta dish with eggs, cheese, and pancetta.",
            "price": 85.50
          },
          {
            "id": 37,
            "name": "Penne Arrabbiata pasta",
            "description": "Pasta with a spicy tomato sauce and red chili flakes.",
            "price": 65.25
          },
          {
            "id": 38,
            "name": "Fettuccine Alfredo pasta",
            "description": "Creamy pasta with butter, cream, and Parmesan cheese.",
            "price": 92.75
          },
          {
            "id": 39,
            "name": "Linguine with Clam Sauce pasta",
            "description": "Seafood pasta with a garlic and white wine sauce.",
            "price": 78.90
          },
          {
            "id": 40,
            "name": "Ravioli with Pesto pasta",
            "description": "Stuffed pasta with a basil pesto sauce.",
            "price": 54.50
          }
        ]
        
      },
      {
        "id": 8,
        "name": "Seafood",
        "description": "Fresh and flavorful seafood offerings.",
        "items":[
          {
            "id": 41,
            "name": "Grilled Salmon",
            "description": "Fresh salmon fillet grilled to perfection.",
            "price": 180
          },
          {
            "id": 42,
            "name": "Butter Garlic Shrimp",
            "description": "Tender shrimp cooked in a buttery garlic sauce.",
            "price": 160
          },
          {
            "id": 43,
            "name": "Lemon Herb Tilapia",
            "description": "Tilapia fillet seasoned with lemon and herbs.",
            "price": 150
          },
          {
            "id": 44,
            "name": "Crispy Calamari",
            "description": "Succulent calamari rings lightly fried to perfection.",
            "price": 140
          },
          {
            "id": 45,
            "name": "Spicy Tuna Sushi Roll",
            "description": "Tuna sushi roll with a spicy twist.",
            "price": 190
          },
          {
            "id": 46,
            "name": "Lobster Bisque",
            "description": "Creamy lobster soup with a rich flavor.",
            "price": 180
          },
          {
            "id": 47,
            "name": "Cajun Crawfish Boil",
            "description": "Crawfish boiled with Cajun spices for a spicy kick.",
            "price": 170
          }
        ]
        
      },
      {
        "id": 9,
        "name": "Vegetarian",
        "description": "Vegetarian options for those who prefer plant-based dishes.",
        "items": [
          {
            "id": 48,
            "name": "Vegetable Biryani",
            "description": "A flavorful rice dish with assorted vegetables and aromatic spices.",
            "price": 180
          },
          {
            "id": 49,
            "name": "Paneer Tikka",
            "description": "Tender paneer cubes marinated in spices and grilled to perfection.",
            "price": 150
          },
          {
            "id": 50,
            "name": "Aloo Paratha",
            "description": "Whole wheat flatbread stuffed with spiced potato filling, served with yogurt.",
            "price": 90
          },
          {
            "id": 51,
            "name": "Palak Paneer",
            "description": "Creamy spinach and paneer curry, a vegetarian classic.",
            "price": 170
          },
          {
            "id": 52,
            "name": "Mushroom Masala",
            "description": "Mushrooms cooked in a rich and spicy tomato-based gravy.",
            "price": 190
          },
          {
            "id": 53,
            "name": "Chana Masala",
            "description": "Chickpea curry with aromatic spices, a popular North Indian dish.",
            "price": 140
          },
          {
            "id": 54,
            "name": "Vegetable Spring Rolls",
            "description": "Crispy spring rolls filled with a mix of vegetables and served with dipping sauce.",
            "price": 120
          }
        ]
        
      },
      {
        "id": 10,
        "name": "Specials",
        "description": "Chef's specials for a unique dining experience.",
        "items":[
          {
            "id": 55,
            "name": "Spicy Chicken Curry",
            "description": "A hot and flavorful chicken curry with spices.",
            "price": 180
          },
          {
            "id": 56,
            "name": "Vegetable Biryani",
            "description": "A fragrant and delicious rice dish with mixed vegetables.",
            "price": 150
          },
          {
            "id": 57,
            "name": "Paneer Tikka",
            "description": "Marinated and grilled paneer cubes with spices.",
            "price": 120
          },
          {
            "id": 58,
            "name": "Chocolate Brownie",
            "description": "Warm and gooey chocolate brownie with ice cream.",
            "price": 90
          },
          {
            "id": 59,
            "name": "Mango Lassi",
            "description": "A refreshing yogurt-based drink with mango flavor.",
            "price": 60
          },
          {
            "id": 60,
            "name": "Spinach and Cheese Quesadilla",
            "description": "Grilled tortilla filled with spinach and cheese.",
            "price": 140
          },
          {
            "id": 61,
            "name": "Fruit Salad",
            "description": "Fresh fruit salad with a drizzle of honey.",
            "price": 100
          }
        ]
        
      },
      {
        
        "id": 11,
        "name": "Pizza",
        "description": "There are some diffrent type of Pizza",
        "items":[
          {
            "id": 62,
            "name": "Pizza Margherita",
            "description": "Classic Italian pizza with tomato, mozzarella, and basil.",
            "price": 180
          },
          {
            "id": 63,
            "name": "Pizza Pepperoni",
            "description": "Pizza topped with spicy pepperoni slices and cheese.",
            "price": 195
          },
          {
            "id": 64,
            "name": "Pizza Vegetarian",
            "description": "Delicious vegetarian pizza with assorted veggies and cheese.",
            "price": 175
          },
          {
            "id": 65,
            "name": "Pizza BBQ Chicken",
            "description": "Savory pizza topped with BBQ chicken and onions.",
            "price": 190
          },
          {
            "id": 66,
            "name": "Pizza Hawaiian",
            "description": "Tropical pizza with ham, pineapple, and cheese.",
            "price": 185
          },
          {
            "id": 67,
            "name": "Pizza Supreme",
            "description": "A supreme pizza loaded with various toppings and cheese.",
            "price": 198
          },
          {
            "id": 68,
            "name": "Pizza Margherita (Large)",
            "description": "Large-sized classic Italian pizza with tomato, mozzarella, and basil.",
            "price": 199
          },
          {
            "id": 69,
            "name": "Pizza Mexican",
            "description": "Spicy Mexican-style pizza with jalapeños and ground beef.",
            "price": 175
          }
        ]
        
        
      },
      {
        "id":12,
        "name":"Burger",
        "description":"best and testy burger are there",
        "items":[
          {
            "id": 70,
            "name": "Veggie Burger",
            "description": "A delicious vegetarian burger with fresh vegetables.",
            "price": 120
          },
          {
            "id": 71,
            "name": "Cheeseburger",
            "description": "Classic burger with melted cheese and juicy beef patty.",
            "price": 140
          },
          {
            "id": 72,
            "name": "Spicy Chicken Burger",
            "description": "A fiery chicken burger for those who love some heat.",
            "price": 130
          },
          {
            "id": 73,
            "name": "Mushroom Swiss Burger",
            "description": "Savory burger topped with sautéed mushrooms and Swiss cheese.",
            "price": 145
          },
          {
            "id": 74,
            "name": "BBQ Bacon Burger",
            "description": "Tasty burger with crispy bacon and smoky BBQ sauce.",
            "price": 150
          },
          {
            "id": 75,
            "name": "Double Stack Burger",
            "description": "Two beef patties, double the flavor in every bite.",
            "price": 140
          },
          {
            "id": 76,
            "name": "Vegan Burger",
            "description": "A plant-based burger for vegan enthusiasts.",
            "price": 130
          },
          {
            "id": 77,
            "name": "Turkey Burger",
            "description": "A lean and flavorful turkey burger option.",
            "price": 135
          },
          {
            "id": 78,
            "name": "Fish Fillet Burger",
            "description": "A seafood delight with a crispy fish fillet.",
            "price": 125
          },
          {
            "id": 79,
            "name": "Breakfast Burger",
            "description": "Burger with a fried egg, perfect for breakfast or brunch.",
            "price": 140
          }
        ]
        
      },
      {
        "id":13,
        "name":"Upma",
        "description":"",
        "items": [
          {
            "id": 80,
            "name": "Classic Upma",
            "description": "A traditional South Indian dish made with semolina, vegetables, and spices.",
            "price": 50
          },
          {
            "id": 81,
            "name": "Vegetable Upma",
            "description": "Upma cooked with a variety of fresh vegetables for added flavor and nutrition.",
            "price": 60
          },
          {
            "id": 82,
            "name": "Spicy Masala Upma",
            "description": "Upma with a spicy twist, seasoned with aromatic Indian spices for a kick of flavor.",
            "price": 65
          }
        ]
        
      },
      {
        "id":14,
        "name":"Pauva",
        "description":"",
        "items":[
          {
            "id": 83,
            "name": "Masala Pauva",
            "description": "Spicy and crunchy snack with a mix of spices.",
            "price": 45.99
          },
          {
            "id": 84,
            "name": "Sev Pauva",
            "description": "Crunchy sev mixed with Pauva and spices.",
            "price": 55.50
          },
          {
            "id": 85,
            "name": "Khatta Meetha Pauva",
            "description": "Sweet and tangy Pauva snack.",
            "price": 60.25
          },
          {
            "id": 86,
            "name": "Garlic Pauva",
            "description": "Pauva flavored with garlic and spices.",
            "price": 65.75
          },
          {
            "id": 87,
            "name": "Chana Pauva",
            "description": "Crunchy Pauva with roasted chana and spices.",
            "price": 58.50
          }
        ]
        
      }
    ]

    ;

  constructor() {
    localStorage.setItem("food-category", JSON.stringify(this.categories));
  }



  flag = 0;

  getAllItem() {
    return JSON.parse(localStorage.getItem("food-category") || '{}');
  }


  getCategories() {
    this.categories = JSON.parse(localStorage.getItem("food-category") || '{}');
  }

  setCategories() {
    localStorage.setItem("food-category", JSON.stringify(this.categories));
  }

  addItem(ctegoryId: any, item: any): any {

    this.getCategories();

    this.flag = 0;
    this.categories.forEach((category: any) => {
      if (category.id == ctegoryId) {
        category.items.push(item);
        this.flag = 1;
      }
    });
    if (this.flag == 0) {
      return false;
    }
    else {
      this.setCategories();
      return this.categories;
    }

  }

  updateItem(RequestItem: any): any {

    this.getCategories();

    this.flag = 0;
    this.categories.forEach((category: any) => {
      category.items.forEach((item: any) => {
        if (item.id == RequestItem.id) {
          item = RequestItem;
          this.flag = 1;
        }
      });
    });
    if (this.flag == 0) {
      return false;
    }
    else {
      this.setCategories();
      return this.categories;
    }

  }


  deleteItem(RequestItem: any): any {

    this.getCategories();

    this.flag = 0;
    this.categories.forEach((category: any) => {
      category.items.forEach((item: any) => {
        if (item.id == RequestItem.id) {
          category.splice(category.indexOf(item), 1);
          this.flag = 1;
        }
      });
    });
    if (this.flag == 0) {
      return false;
    }
    else {
      this.setCategories();
      return this.categories;
    }

  }

  getItemByCategory(categoryId: any): any {
    this.getCategories();
    let filteredCategory: any;
    this.categories.forEach(category => {
      if (category.id == categoryId) {
        filteredCategory = category.items;
      }
    });
    return filteredCategory;
  }


  getOrderByTable(table: any) {
    return localStorage.getItem(table);
  }

}
