export const getPosts = () => {
  // return fetch('http://localhost:7890/tweets')
  
  return Promise.resolve([
    { id: 1, title: 'Superfoods', body: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.' },
    { id: 2, title: 'Leafy Greens', body: 'Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko.' },
    { id: 3, title: 'Rainbow foods', body: 'Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean. ' }
  ]);
};

export const getPost = () => {
  return Promise.resolve([
    { id: 3, title: 'Rainbow foods', body: 'Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean. ' }
  ]);
};




