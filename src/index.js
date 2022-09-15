import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store/configStore";
import {Provider} from "react-redux";
import {QueryClient, QueryClientProvider} from "react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>
);
