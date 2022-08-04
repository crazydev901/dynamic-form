import { useContext } from "react";
import { RootStoreContext } from "../stores/RootStore";

const useStore = () => useContext(RootStoreContext);

export default useStore;
