const INITIAL_STATE = {
    userTokenInfo: '',
    dataList : []
    
  };
  
  const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'LOGIN-USER':
        return {
          ...state,
          userTokenInfo: action.payload,
        };
        case 'DATA-LIST':
        return {
          ...state,
          dataList: action.payload,
        };
      case 'LOGOUT-USER':
        return {
          ...state,
          userTokenInfo: '',
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  