export const saveToReduxList = (payload) => {
    return {
      type: 'DATA-LIST',
      payload,
    };
};

export const saveToReduxToken = (payload) => {
    return {
      type: 'LOGIN-USER',
      payload,
    };
};

export const clearToReduxToken = (payload) => {
  return {
    type: 'LOGOUT-USER',
    payload,
  };
};