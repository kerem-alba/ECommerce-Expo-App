import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import IntroductionScreen from "../screens/Intro/IntroductionScreen";
import ProductsScreen from "../screens/Products/ProductsScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import LogoutScreen from "../screens/Logout/LogoutScreen";
import ProductDetailScreen from "../screens/ProductsDetail/ProductDetailScreen";
import CartScreen from "../screens/Cart/CartScreen";
import CategoriesScreen from "../screens/Category/CategoriesScreen";
import { RootStackParamList } from "./type";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "pricetags-outline";

          if (route.name === "Products") {
            iconName = focused ? "pricetags" : "pricetags-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Categories") {
            iconName = focused ? "grid" : "grid-outline";
          } else if (route.name === "Logout") {
            iconName = focused ? "log-out" : "log-out-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Logout" component={LogoutScreen} />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Introduction" component={IntroductionScreen} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={BottomTabNavigation} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
