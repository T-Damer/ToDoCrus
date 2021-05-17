import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { CreateAccount, Home, Profile } from "./screens";

const Tabs = createBottomTabNavigator();

const TabsScreen = () => {
  <Tabs.Navigator>
    <Tabs.Screen name="fireIcon" component={Home} />
    <Tabs.Screen name="🎯" component={CreateAccount} />
    <Tabs.Screen name="👤" component={Profile} />
  </Tabs.Navigator>;
};

export default TabsScreen;
