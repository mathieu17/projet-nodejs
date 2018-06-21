export default (req, res, next) => {
  const error = new Error(`Not found for ressource${req.url}`);
  error.status = 404;
  next(error);
};
