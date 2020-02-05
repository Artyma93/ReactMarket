import { combineReducers } from "redux";
import DogReducer from "../components/containers/Dog/DogReducer";

const rootReducer = combineReducers({
  dogState: DogReducer
});

export default rootReducer;
