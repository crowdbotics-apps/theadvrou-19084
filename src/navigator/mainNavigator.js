import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps82884Navigator from '../features/Maps82884/navigator';
import Add-Item82888Navigator from '../features/Add-Item82888/navigator';
import UserProfile82880Navigator from '../features/UserProfile82880/navigator';
import Maps82889Navigator from '../features/Maps82889/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps82884: { screen: Maps82884Navigator },
Add-Item82888: { screen: Add-Item82888Navigator },
UserProfile82880: { screen: UserProfile82880Navigator },
Maps82889: { screen: Maps82889Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
