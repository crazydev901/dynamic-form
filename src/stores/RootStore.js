import { createContext } from "react";

import { CompletionStore } from "./CompletionStore";

export class RootStore {
  completionStore = new CompletionStore();
}

export const rootStore = new RootStore();

export const RootStoreContext = createContext(rootStore);
