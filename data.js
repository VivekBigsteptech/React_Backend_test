const fs = require('fs')

const data = [
  {
    "_id": 1,
    "product_name": "apple",
    "description": "Eat one apple every day to keep the doctor away",
    "price": 12,
    "image": fs.readFileSync('./apple.png').toString('base64'),
    "image_name": "apple.jpg",
  },
  {
    "_id": 2,
    "product_name": "Mango",
    "description": "The king of all fruit",
    "price": 10,
    "image": fs.readFileSync('./mango.png').toString('base64'),
    "image_name": "mango.png",
  },
  {
    "_id": 3,
    "product_name": "Pineapple",
    "description": "No pine, no apple, just a whole lot of pineapple.",
    "price": 10,
    "image": fs.readFileSync('./pineapple.png').toString('base64'),
    "image_name": "pineapple.png",
  },
  {
    "_id": 4,
    "product_name": "Orange",
    "description": "Orange fruit is always good.",
    "price": 10,
    "image": fs.readFileSync('./orange.png').toString('base64'),
    "image_name": "orange.png",
  },
  {
    "_id": 5,
    "product_name": "Grapes",
    "description": "Apple is great, but grapes are even better",
    "price": 12,
    "image": fs.readFileSync('./grapes.png').toString('base64'),
    "image_name": "grapes.png",
  },
]

module.exports = {
  data
};