export function checkedAndUnchecked(state) {
  return !state.isChecked && state.wasChecked;
}
