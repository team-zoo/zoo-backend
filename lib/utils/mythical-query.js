module.exports = query => {
  let buildQuery = {};

  if(query.name) {
    buildQuery.name = query.name;
  }

  if(query.habitat) {
    buildQuery.habitat = query.habitat;

  }

  if(query.animalCombination) {
    buildQuery.animalCombination = query.animalCombination;
  }

  return buildQuery;
};
