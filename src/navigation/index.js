import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import RestaurantDetailsScreen from "../screens/RestaurantDetailsScreen";
import DishDetailsScreen from "../screens/DishDetailsScreen";
import Basket from "../screens/Basket";
import OrdersScreen from "../screens/OrdersScreen";
import OrderDetails from "../screens/OrderDetails";

import { Foundation, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import OrderScreen from "../screens/OrdersScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="Restaurants" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantDetailsScreen} />
      <Stack.Screen name="Dish" component={DishDetailsScreen} />
      <Stack.Screen name="Basket" component={Basket} />
      <Stack.Screen name="Orders" component={OrdersScreen} />
      <Stack.Screen name="Order" component={OrderDetails} />

    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "white" }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list-alt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={RestaurantDetailsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// const HomeStack = createNativeStackNavigator();

// const HomeStackNavigator = () => {
//   return (
//     <HomeStack.Navigator>
//     </HomeStack.Navigator>
//   );
// };

// const OrdersStack = createNativeStackNavigator();

// const OrderStackNavigator = () => {
//   return (
//     <OrdersStack.Navigator>
//     </OrdersStack.Navigator>
//   );
// };

export default RootNavigator;
