import { makeAutoObservable } from "mobx"
export default class Session {

    user = null;

    constructor(root) {
      this.root=root;
      makeAutoObservable(this, { });
    }

    async register(email, password) {
      try {
        this.root.uiState.pendingRequestCount++;
        this.user = null;

      } catch(e) {
        console.error(e);
        this.user = null;
      } finally {
        this.root.uiState.pendingRequestCount--;
      }
      
    }

    async login(email, password) {
      try {
        this.root.uiState.pendingRequestCount++;
        this.user = null;

      } catch(e) {
        console.error(e);
        this.user = null;
      } finally {
        this.root.uiState.pendingRequestCount--;
      }
    }
}