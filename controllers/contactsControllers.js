import {
  listContacts,
  getById,
  removeContact,
  addContact,
  updateById,
} from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";
import {
  createContactSchema,
  updateContactSchema,
} from "../schemas/contactsSchemas.js";
import validateBody from "../helpers/validateBody.js";

export const getAllContacts = async (req, res) => {
  const result = await listContacts();
  res.status(200).json(result);
};

export const getContactById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getById(id);

    if (!result) {
      throw HttpError(404, "Not Found");
    }

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await removeContact(id);

    if (!result) {
      throw HttpError(404, "Not Found");
    }

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const createContact = async (req, res, next) => {
  try {
    validateBody(createContactSchema);

    const result = await addContact(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const updateContact = async (req, res, next) => {
  try {
    validateBody(updateContactSchema);

    const { id } = req.params;
    const result = await updateById(id, body);

    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
