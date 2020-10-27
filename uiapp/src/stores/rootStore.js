import UiState from "./uistate";

export default class RootStore {
  constructor() {
      this.uiState = new UiState(this)
  }
}