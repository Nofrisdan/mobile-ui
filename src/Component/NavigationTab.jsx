import React from 'react';
import HomeScreen from '../Screen/HomeScreen';
import FindScreen from '../Screen/FindScreen';
import InventoryScreen from '../Screen/InventoryScreen';
import PostScreen from '../Screen/PostScreen';
import SettingsScreen from '../Screen/SettingsScreen';
// load depedencies createBottomNavigator
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();

const NavigationTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 5,
          left: 20,
          right: 20,
          backgroundColor: '#fffffff',
          elevation: 0,
          height: 90,
          borderRadius: 15,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: tabInfo => {
            return (
              <Icon
                name="home"
                size={40}
                color={tabInfo.focused ? '#006600' : '#8e8e93'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Find"
        component={FindScreen}
        options={{
          tabBarIcon: tabInfo => {
            return (
              <Icon
                name="search"
                size={40}
                color={tabInfo.focused ? '#006600' : '#8e8e93'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarIcon: tabInfo => {
            return (
              <Icon
                name="plus-circle"
                size={40}
                color={tabInfo.focused ? '#006600' : '#8e8e93'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: tabInfo => {
            return (
              <IconFeather
                name="settings"
                size={40}
                color={tabInfo.focused ? '#006600' : '#8e8e93'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={InventoryScreen}
        options={{
          tabBarIcon: tabInfo => {
            return (
              <IconMaterial
                name="inventory"
                size={40}
                color={tabInfo.focused ? '#006600' : '#8e8e93'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationTab;
