//this is a middleware function that handles when the user tries to access a route that does not exist
const notFound = (req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
};

export default notFound;
