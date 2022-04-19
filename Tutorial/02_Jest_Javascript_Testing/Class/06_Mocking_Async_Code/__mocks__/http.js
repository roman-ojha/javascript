const fetchData = () => {
  return Promise.resolve({ title: "delectus aut autem" });
  //   now here we are returning the static value so that while testing we don't want to depend on other other third party
};

exports.fetchData = fetchData;
