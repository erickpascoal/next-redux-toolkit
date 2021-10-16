import { useDispatch } from "react-redux";
import { ReduxDispatch } from "store/store";

export const useReduxDispatch = () => useDispatch<ReduxDispatch>();
