// This middleware will take care of the errors, so this way we can handle errors in a centralized way
//this receives the error, request, response, and next function as parameters
const errorHandler = (err, req, res, next) => {
  //if we have a custom error with a status, we will use that status
  if (err.status) {
    res.status(err.status).json({ message: err.message });
  } else {
    res.status(500).json({ message: err.message });
  }
};

export default errorHandler;
