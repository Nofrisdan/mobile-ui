import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationTab from './Component/NavigationTab';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View} from 'react-native';

const App = () => {
  React.useEffect(() => {
    SystemNavigationBar.navigationHide();
  }, []);

  return (
    <NavigationContainer>
      <NavigationTab />
    </NavigationContainer>
  );
};

export default App;
