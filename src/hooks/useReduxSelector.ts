import { TypedUseSelectorHook, useSelector } from "react-redux";
import { ReduxStore } from "store/store";

export const useReduxSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
