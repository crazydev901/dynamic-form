import { makeObservable, observable, action } from "mobx";

export class CompletionStore {
  constructor() {
    makeObservable(this, {
      submittedForm: observable,
      setSubmittedForm: action,
    });
  }

  submittedForm = [];

  setSubmittedForm(data) {
    this.submittedForm = data;
  }
}
