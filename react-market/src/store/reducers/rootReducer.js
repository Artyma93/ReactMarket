import { combineReducers } from "redux";
import DogReducer from "./DogReducer";
import WeatherforecastReducer from "./WeatherforecastReducer";
import UsersCourseReducer from "./UsersCourseReducer";
import UsersCourseAutoReducer from "./UsersCourseAutoReducer";

const rootReducer = combineReducers({
  dogState: DogReducer,
  weatherforecastState: WeatherforecastReducer,
  usersCourseState: UsersCourseReducer,
  usersCourseAutoState: UsersCourseAutoReducer
});

export default rootReducer;
