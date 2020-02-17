import { combineReducers } from "redux";
import DogReducer from "../components/containers/Dog/DogReducer";
import WeatherforecastReducer from "../components/containers/Weatherforecast/WeatherforecastReducer";
import UsersCourseReducer from "../components/containers/UsersCourse/UsersCourseReducer";
import UsersCourseAutoReducer from "../components/containers/UsersCourseAuto/UsersCourseAutoReducer";

const rootReducer = combineReducers({
  dogState: DogReducer,
  weatherforecastState: WeatherforecastReducer,
  usersCourseState: UsersCourseReducer,
  usersCourseAutoState: UsersCourseAutoReducer
});

export default rootReducer;
