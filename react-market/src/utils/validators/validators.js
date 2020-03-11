import React from "react";

export const requiredField = value => {
  if (value) {
    return undefined;
  } else {
    return "Поле обязательно";
  }
};

export const maxLengthCreator = maxLength => value => {
  if (value.length > maxLength) {
    return `Максимальная длина ${maxLength} символов`;
  } else {
    return undefined;
  }
};
