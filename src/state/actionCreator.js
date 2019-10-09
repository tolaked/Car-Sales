import * as types from "./actionTypes";

export function remove(item) {
  return { type: types.REMOVEFEATURE, payload: item };
}

export function add(item) {
  return { type: types.BUYITEM, payload: item };
}
