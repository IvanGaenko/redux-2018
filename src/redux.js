import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createId = () => Math.random();

const books = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          id: createId(),
          title: payload
        }
      ];
    case 'UPDATE_BOOK':
    return state.map((item) => {
      if (item.id === payload.id) {
        return {
          ...item,
          title: payload.newName,
        }
      }
      return item;
    });
    case 'REMOVE_BOOK':
    return state.filter(book => book.id !== payload);
    default:
    return state;
  }
}

const readers = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_READER':
    return [
        ...state,
        {
        id: createId(),
        title: payload
        }
      ]
    case 'UPDATE_READER':
    return state.map((item) => {
      if (item.id === payload.id) {
        return {
          ...item,
          title: payload.newName,
        }
      }
      return item;
    })
    case 'REMOVE_READER':
    return state.filter(reader => reader.id !== payload);
    default:
    return state;
  }
}

const reducer = combineReducers({
  books: books,
  readers: readers
})

const initialState = {
  books: [],
  readers: [],
}

const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(logger)));

const addBook = (bookName) => ({
  type: 'ADD_BOOK',
  payload: bookName
});

const addReader = (bookName) => ({
  type: 'ADD_READER',
  payload: bookName
});

const removeBook = (bookName) => ({
  type: 'REMOVE_BOOK',
  payload: bookName
});

const removeReader = (bookName) => ({
  type: 'REMOVE_READER',
  payload: bookName
});

const updateBook = (id, newName) => ({
  type: 'UPDATE_BOOK',
  payload: { id, newName}
});

const updateReader = (id, newName) => ({
  type: 'UPDATE_READER',
  payload: { id, newName}
});

store.subscribe(() => {
  console.log('From subscribe', store.getState());
});

console.log('---------------books');
store.dispatch(addBook('Book 1'));
store.dispatch(addBook('Book 2'));
store.dispatch(addBook('Book 3'));
store.dispatch(addBook('Book 4'));
store.dispatch(removeBook(store.getState().books[0].id));
store.dispatch(updateBook(store.getState().books[0].id, 'Updated Book Title'));

console.log('---------------readers');
store.dispatch(addReader('Reader 1'));
store.dispatch(addReader('Reader 2'));
store.dispatch(addReader('Reader 3'));
store.dispatch(addReader('Reader 4'));
store.dispatch(removeReader(store.getState().readers[0].id));
store.dispatch(updateReader(store.getState().readers[0].id, 'Updated Readers Title'));