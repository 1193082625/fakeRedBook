export const initialState = {
  loading: true,
  isAuthed: true,
  userInfo: {
    name: '多喜',
    photo: require('../assets/images/photo.jpg'),
  },
};

const types = {
  LOADING: 'LOADING',
  USERNAME: 'USERNAME',
  ISAUTHED: 'ISAUTHED',
};

export const storeActions = {
  setAuthed: () => ({type: types.ISAUTHED}),
  changeloading: () => ({type: types.LOADING}),
  setUsername: (payload: string) => ({type: types.USERNAME, payload}),
};

export function reducer(state, action) {
  switch (action.type) {
    case types.LOADING:
      return {...state, loading: true};
    case types.ISAUTHED:
      return {...state, isAuthed: true};
    case types.USERNAME:
      return {...state, username: action.payload};
  }
}
