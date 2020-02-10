import { combineReducers } from "redux";
import DogReducer from "../components/containers/Dog/DogReducer";
import WeatherforecastReducer from "../components/containers/Weatherforecast/WeatherforecastReducer";

const rootReducer = combineReducers({
  dogState: DogReducer,
  weatherforecastState: WeatherforecastReducer
});

export default rootReducer;
