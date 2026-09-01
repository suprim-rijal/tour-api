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

const findById = (id) => {
  return tours.find((tour) => tour.id === Number(id)) || null;
};

const update = (id, data) => {
  const tour = tours.find((tour) => tour.id === Number(id));
  if (!tour) return null;

  Object.assign(tour, data);
  return tour;
};

module.exports = { addOne, getAll, findById, update };

