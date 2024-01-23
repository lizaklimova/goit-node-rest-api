import HttpError from "../helpers/HttpError.js";

const validateBody = (schema) => {
  const func = (req, _, next) => {
    const fieldsQty = Object.keys(req.body).length;
    const { error } = schema.validate(req.body);

    if (error) {
      next(HttpError(400, error.message));
    }

    if (!fieldsQty) {
      next(HttpError(400, "Body must have at least one field"));
    }

    next();
  };

  return func;
};

export default validateBody;
