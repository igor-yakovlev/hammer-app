import update from 'immutability-helper';
import { ADD_ITEM, DELETE_ITEM, IMPORT_ITEMS, UPDATE_ITEM } from "redux/constants/Planner";
import { ItemTypes } from 'views/app-views/main/planner/types/ItemTypes';

const initState = {
  '1234': { top: 50, left: 100, type: ItemTypes.TABLE_4_CHAIRS },
  '3432': { top: 200, left: 150, type: ItemTypes.TABLE_5_CHAIRS },
}

const planner = (state = initState, action) => {
  switch (action.type) {
    case IMPORT_ITEMS: {
      return update(state, {$set: action.items});
    }
    case ADD_ITEM: {
      const [id] = Object.keys(action.item);
      const item = action.item[id];
      return update(state,{[id]: {$set: item}})
    }
    case UPDATE_ITEM: {
      const {id, left, top} = action.item;
      return update(state, {
        [id]: {
          $merge: { left, top },
        },
      })
    }
    case DELETE_ITEM: {
      return update(state, {$unset: [action.id]})
    }
    default: {
      return state;
    }
  }
}

export default planner;
