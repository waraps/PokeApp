import * as React from "react";
import { Easing } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  transitionSpec,
  CardStyleInterpolators,
  TransitionPresets,
} from "@react-navigation/stack";

// Components
import IsLoading from "../components/IsLoading";

// Screens
import Home from "../screens/Home";
import CatchThem from "../screens/CatchThem";
import PokeDetails from "../screens/PokeDetails";

// Utils
import { loadFonts } from "../utils/loadFonts";

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 400,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const configClose = {
  animation: "timing",
  config: {
    duration: 400,
    easing: Easing.linear,
  },
};

const Stack = createStackNavigator();
export default function Router() {
  const [loaded, setLoaded] = React.useState(true);
  React.useEffect(() => {
    loadingFonts();
  }, []);

  const loadingFonts = async () => setLoaded(await loadFonts());

  if (loaded) {
    return <IsLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        InitialRouteName={Home}
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          // ...TransitionPresets.SlideFromRightIOS,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: config,
            close: configClose,
          },
        }}
        animation="fade"
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CatchThem"
          component={CatchThem}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PokeDetails"
          component={PokeDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}