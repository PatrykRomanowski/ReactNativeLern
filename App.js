import {
  createAppContainer
} from "react-navigation";
import {
  createStackNavigator
} from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreens";
import PersonComponent from "./src/screens/PersonComponent";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SqereScreen from "./src/screens/SquereScreen";

const navigator = createStackNavigator({
  Home: HomeScreen,
  Components: ComponentScreen,
  Person: PersonComponent,
  List: ListScreen,
  Image: ImageScreen,
  Counter: CounterScreen,
  Color: ColorScreen,
  Sqere: SqereScreen,

}, {
  initialRouteName: "Home",
  defaultNavigationOptions: {
    title: "App",
  },
});

export default createAppContainer(navigator);