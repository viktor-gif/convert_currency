import { API } from "../api/api";

const SET_CURRENCY_COURSES = "currency_converter/app/SET_CURRENCY_COURSES";
const IS_PROGRESS = "currency_converter/app/IS_PROGRESS";

const initialState = {
  currencyCourses: null,
  requestInProgress: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENCY_COURSES:
      let date = new Date()
      return {
        // I added UAH currency manually so it is not in rest-api НБУ and rate === 1
        ...state,
        currencyCourses: [{
          cc: "UAH",
          exchangedate: date.toLocaleDateString('ru'),
          r030: 1,
          rate: 1,
          txt: "Українська гривня"
        },
          ...action.currencyCourses],
      };
    case IS_PROGRESS:
      return {
        ...state,
        requestInProgress: action.isProgress
      }
    default:
      return state;
  }
};
//action-creators
export const setCurrencyCourses = (currencyCourses) => ({ type: SET_CURRENCY_COURSES, currencyCourses });
export const setProgress = (isProgress)  => ({ type: IS_PROGRESS, isProgress })

//thunk-creators
export const getCurrencyCourses = () => async (dispatch) => {
  dispatch(setProgress(true));
  const data = await API.getCurrencyCourses();
  dispatch(setCurrencyCourses(data))
  dispatch(setProgress(false));
};

export default appReducer;
