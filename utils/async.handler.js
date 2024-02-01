const HttpException = require("../errors/httpException");

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((error) => {
    if (error instanceof HttpException) {
      res.status(error.statusCode).json({ message: error.message });
    } else {
      // Handle other errors
      res.status(500).json({ message: error.message });
    }
  });
};

module.exports = asyncHandler;
