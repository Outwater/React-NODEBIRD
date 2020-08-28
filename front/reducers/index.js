import { HYDRATE } from "next-redux-wrapper";

const dummyUser = {
  id: 1,
  nickname: "제로초",
  Posts: [],
  Followings: [],
  Followers: [],
};

const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  post: { mainPosts: [] },
};

export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const LOG_IN = "LOG_IN"; // 액션의 이름
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS"; // 액션의 이름
export const LOG_IN_FAILURE = "LOG_IN_FAILURE"; // 액션의 이름
export const LOG_OUT = "LOG_OUT";

// Action
export const loginAction = (data) => {
  return {
    type: LOG_IN,
    data,
  };
};

export const logoutAction = {
  type: LOG_OUT,
};

// Reducer

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return { ...state, ...action.payload };
    case LOG_IN:
      return {
        ...state,
        user: {
          user: dummyUser,
          isLoggedIn: true,
          loginData: action.data,
          // user: action.data,
        },
      };
    case LOG_OUT:
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
