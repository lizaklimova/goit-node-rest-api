import HttpError from "./HttpError.js";

const validateBody = (schema) => {
  const func = (req, _, next) => {
    const { body } = req;
    const fieldsQty = Object.keys(body).length;
    const { error } = schema.validate(body);

    if (!fieldsQty) {
      throw HttpError(400, "Body must have at least one field");
    }

    if (error) {
      next(HttpError(400, error.message));
    }

    next();
  };

  return func;
};

export default validateBody;
