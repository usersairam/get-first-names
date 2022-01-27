let names = require("../country/state/city/index.js");
let getNamesInCity = require("../utilities/utils/index.js");
module.exports = getPeopleInCity = () => {
  return getNamesInCity(names);
};
