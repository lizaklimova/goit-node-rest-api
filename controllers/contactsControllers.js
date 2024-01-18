import {
  listContacts,
  getById,
  removeContact,
  addContact,
  updateById,
} from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";

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

export const createContact = async (req, res) => {};

export const updateContact = async (req, res, next) => {
  try {
    const { id } = req.params;
  } catch (error) {
    next(error);
  }
};
