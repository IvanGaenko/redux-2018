const ADD_VIDEO = 'ADD_VIDEO';
const EDIT_VIDEO = 'EDIT_VIDEO';
const DELETE_VIDEO = 'DELETE_VIDEO';

const INIT = [];

export default function videoReducer(state = INIT, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_VIDEO:
      const newItem = {
        id: String(Math.random()),
        title: payload.title,
        url: payload.url,
        tags: payload.tags,
      };
      console.log(newItem.id);
      
      return [newItem, ...state];
    
    case EDIT_VIDEO:
      return state.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            title: payload.title,
            tags: payload.tags,
          };
        }
        return item;
      });

    case DELETE_VIDEO:
      return state.filter(item => item.id !== action.payload.id);

    default:
      return state;
  }
}

export const addVideo = ({ id, title, url, tags }) => ({
  type: ADD_VIDEO,
  payload: { id, title, url, tags },
});

export const editVideo = ({ title, tags }) => ({
  type: EDIT_VIDEO,
  payload: { title, tags },
});

export const delVideo = id => ({
  type: DELETE_VIDEO,
  payload: { id },
});