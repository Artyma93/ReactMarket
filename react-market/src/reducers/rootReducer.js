import { combineReducers } from "redux";
import DogReducer from "../components/containers/Dog/DogReducer";
import WeatherforecastReducer from "../components/containers/Weatherforecast/WeatherforecastReducer";
import UsersCourseReducer from "../components/containers/UsersCourse/UsersCourseReducer";
import UsersCourseAutoReducer from "../components/containers/UsersCourseAuto/UsersCourseAutoReducer";
import BGUReducer from "../components/containers/BGUContainer/BGUContainerReducer";

const rootReducer = combineReducers({
  dogState: DogReducer,
  weatherforecastState: WeatherforecastReducer,
  usersCourseState: UsersCourseReducer,
  usersCourseAutoState: UsersCourseAutoReducer,
  bguState: BGUReducer
});

export default rootReducer;
