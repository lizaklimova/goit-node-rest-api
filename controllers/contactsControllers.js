import { listContacts } from "../services/contactsServices.js";

export const getAllContacts = (req, res) => {
  listContacts();
};

export const getContactById = (req, res) => {};

export const deleteContact = (req, res) => {};

export const createContact = (req, res) => {};

export const updateContact = (req, res) => {};
