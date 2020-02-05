import { combineReducers } from "redux";
import DogReducer from "../components/containers/Dog/DogReducer";
import DogReducer2 from "../components/containers/Dog2/DogReducer";

const rootReducer = combineReducers({
  dogState: DogReducer
});

export default rootReducer;
