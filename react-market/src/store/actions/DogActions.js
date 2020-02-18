import * as actionTypes from "./actionTypes";

export const fetchDogRequest = () => {
  return {
    type: actionTypes.DOG_API_CALL_REQUEST
  };
};

export const fetchDogSuccess = () => {
  return {
    type: actionTypes.DOG_API_CALL_SUCCESS
  };
};

export const fetchDogFail = () => {
  return {
    type: actionTypes.DOG_API_CALL_FAILURE
  };
};

export const fetchDog = (dog) => {
  return {
    type: actionTypes.DOG_API_CALL_FETCH,
    dog
  };
};
