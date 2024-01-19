import Joi from "joi";

export const createContactSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": "Missing required name field" }),
  email: Joi.string()
    .required()
    .messages({ "any.required": "Missing required email field" }),
  phone: Joi.string()
    .required()
    .messages({ "any.required": "Missing required phone field" }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().messages({
    string: "Name should be string",
  }),
  email: Joi.string().messages({
    string: "Email should be string",
  }),
  phone: Joi.string().messages({
    string: "Phone should be string",
  }),
});
