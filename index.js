import "react-native-gesture-handler";
import { registerRootComponent } from "expo";
import configureStore from "./src/redux/store";
import App from "./App";
import React from "react";
import { Provider } from "react-redux";

const store = configureStore();

const ReduxProvider = () => (
  <Provider store={store}>

    <App />
  </Provider>
);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(ReduxProvider);
