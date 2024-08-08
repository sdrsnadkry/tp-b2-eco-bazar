import { appleIcon, saladActiveIcon } from "../assets/icons";

const categoryItems = [
  {
    id: 1,
    icon: appleIcon,
    activeIcon: saladActiveIcon,
    title: "Fruit Items",
    category: "FRUITS",
  },
  {
    id: 2,
    icon: appleIcon,
    activeIcon: saladActiveIcon,
    title: "Vegetables",
    category: "VEGIES",
  },
  {
    id: 3,
    icon: appleIcon,
    activeIcon: saladActiveIcon,
    title: "Meat",
    category: "MEAT",
  },
  {
    id: 4,
    icon: appleIcon,
    activeIcon: saladActiveIcon,
    title: "Chicken Meat",
    category: "CHICKEN_MEAT",
  },
];

const products = [
  { id: 1, name: "Apple", price: 1.2, category: "FRUITS" },
  { id: 2, name: "Banana", price: 0.5, category: "FRUITS" },
  { id: 3, name: "Orange", price: 1.0, category: "FRUITS" },
  { id: 4, name: "Grapes", price: 2.5, category: "FRUITS" },
  { id: 5, name: "Pineapple", price: 3.0, category: "FRUITS" },

  { id: 6, name: "Carrot", price: 0.8, category: "VEGIES" },
  { id: 7, name: "Broccoli", price: 1.5, category: "VEGIES" },
  { id: 8, name: "Spinach", price: 1.0, category: "VEGIES" },
  { id: 9, name: "Tomato", price: 0.7, category: "VEGIES" },
  { id: 10, name: "Cucumber", price: 0.6, category: "VEGIES" },

  { id: 11, name: "Beef", price: 5.0, category: "MEAT" },
  { id: 12, name: "Pork", price: 4.5, category: "MEAT" },
  { id: 13, name: "Lamb", price: 6.0, category: "MEAT" },
  { id: 14, name: "Turkey", price: 3.5, category: "MEAT" },
  { id: 15, name: "Duck", price: 5.5, category: "MEAT" },

  { id: 16, name: "Chicken Breast", price: 3.0, category: "CHICKEN_MEAT" },
  { id: 17, name: "Chicken Thighs", price: 2.5, category: "CHICKEN_MEAT" },
  { id: 18, name: "Chicken Wings", price: 2.0, category: "CHICKEN_MEAT" },
  { id: 19, name: "Chicken Drumsticks", price: 2.8, category: "CHICKEN_MEAT" },
  { id: 20, name: "Chicken Whole", price: 5.0, category: "CHICKEN_MEAT" },
];

export { categoryItems, products };
