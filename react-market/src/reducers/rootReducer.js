import { combineReducers } from "redux";
import DogReducer from "../components/containers/DogContainer/DogReducer";
import WeatherforecastReducer from "../components/containers/WeatherforecastContainer/WeatherforecastReducer";
import UsersCourseReducer from "../components/containers/UsersCourseContainer/UsersCourseReducer";
import UsersCourseAutoReducer from "../components/containers/UsersCourseAutoContainer/UsersCourseAutoReducer";
import BGUReducer from "../components/containers/BGUContainer/BGUContainerReducer";
import UsersCourseProfileReducer from "../components/containers/UsersCourseProfileContainer/UsersCourseProfileReducer";
import UsersCourseAuthReducer from "../components/containers/UsersCourseAuthContainer/UsersCourseAuthReducer";
import UsersCourseLoginReducer from "../components/containers/UsersCourseLoginContainer/UsersCourseLoginReducer";
import AppContainerReducer from "../components/containers/AppContainer/AppContainerReducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  dogState: DogReducer,
  weatherforecastState: WeatherforecastReducer,
  usersCourseState: UsersCourseReducer,
  usersCourseAutoState: UsersCourseAutoReducer,
  bguState: BGUReducer,
  UsersCourseProfileState: UsersCourseProfileReducer,
  UsersCourseAuthReducerState: UsersCourseAuthReducer,
  UsersCourseLoginReducerState: UsersCourseLoginReducer,
  AppContainerReducerState: AppContainerReducer,
  form: formReducer
});

export default rootReducer;
