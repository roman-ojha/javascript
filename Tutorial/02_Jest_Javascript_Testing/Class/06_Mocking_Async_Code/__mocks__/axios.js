// if we want to mock axios package
// so we can create the get function

const get = (url) => {
  return Promise.resolve({
    data: { title: "delectus aut autem" },
  });
};

exports.get = get;
