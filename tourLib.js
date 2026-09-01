let tours = [];
let nextId = 1;

const addOne = (name, info, image, price, location) => {
  const tour = {
    id: nextId++,
    name,
    info,
    image,
    price,
    location,
  };
  tours.push(tour);
  return tour;
};

const getAll = () => {
  return tours;
};

module.exports = {
  addOne,
  getAll,
};