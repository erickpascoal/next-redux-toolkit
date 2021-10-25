import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { reduxWrapper, store } from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default reduxWrapper.withRedux(MyApp);
