import { ADD_ITEM, DELETE_ITEM, IMPORT_ITEMS, UPDATE_ITEM } from "redux/constants/Planner";

export const importItems = (items) => {
  return {
    type: IMPORT_ITEMS,
    items
  };
};

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    item
  }
}

export const updateItem = (item) => {
  return {
    type: UPDATE_ITEM,
    item
  }
}

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    id
  }
}
