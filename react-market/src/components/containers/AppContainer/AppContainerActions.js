import * as types from "./AppContainerConstants";

export const AppInitialazedStart = () => {
  return {
    type: types.APP_INITIALAZED_START
  };
};

export const AppInitialazedSuccess = () => {
  return {
    type: types.APP_INITIALAZED_SUCCESS
  };
};

export const AppInitialazedFail = error => {
  return {
    type: types.APP_INITIALAZED_FAIL,
    error: error
  };
};
