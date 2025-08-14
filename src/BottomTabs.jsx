import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopScreen from "./screen/ShopScreen";
import HomeScreen from "./screen/HomeScreen";
import ProfileScreen from "./screen/ProfileScreen";
import SettingScreen from "./screen/SettingScreen";
import CustomBottomTab from "./components/BottomTabs/CustomBottomTab";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator tabBar={props => <CustomBottomTab {...props}/>}>
      <Tab.Group screenOptions={{headerShown: false}}>
        <Tab.Screen options={{tabBarLabel: 'Home'}} name="Home" component={HomeScreen}/>
        <Tab.Screen options={{tabBarLabel: 'Shop'}} name="Shop" component={ShopScreen}/>
        <Tab.Screen options={{tabBarLabel: 'Profile'}} name="Profile" component={ProfileScreen}/>
        <Tab.Screen options={{tabBarLabel: 'Settings'}} name="Settings" component={SettingScreen}/>

      </Tab.Group>
    </Tab.Navigator>
  )
}