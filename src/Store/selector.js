export function checkedAndUnchecked(state) {
  return !state.isChecked && state.wasChecked;
}

export function neverChecked(state) {
  return !state.isChecked && !state.wasChecked
}
