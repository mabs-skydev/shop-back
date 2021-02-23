module.exports.getValidationErrors = errors => {
  let result = {};

  for (const error of errors.details) {
    result[error.context.label] = error.message;
  }

  return result;
};
