const responder = (statusCode, message, res, data) => {
  if (data === undefined) {
    return res.status(statusCode).json(message);
  }
  return res.status(statusCode).json({
    message,
    data,
  });
};

module.exports = {
  responder,
};
