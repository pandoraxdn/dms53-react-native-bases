import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
//import { Tab1Screen } from "../screens/Tab/Tab1Screen";
//import { Tab2Screen } from "../screens/Tab/Tab2Screen";
import { ScannerQrScreen } from "../screens/camera/ScannerQrScreen";
import { StackNavigator } from "./StackNavigator";
import { MaterialTopNavigator } from "./MaterialTopNavigator";
//import Ionicons from '@expo/vector-icons/Ionicons';
//import { Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { colorsTheme } from "../themes/appTheme";
import { TareaNavigator } from "./TareaNavigator";


export type RootTabBottomParams = {
    TareaNavigator: undefined;
    ScannerQrScreen: undefined;
    MaterialTopNavigator: undefined;
    StackNavigator: undefined;
}

const Tab = createMaterialBottomTabNavigator<RootTabBottomParams>();

export const MaterialBottomNavigator = () => {
    return(
        <Tab.Navigator
            initialRouteName="StackNavigator"
            sceneAnimationEnabled={ true }
            activeColor={ colorsTheme.primary }
            inactiveColor={ colorsTheme.tertiary }
            labeled={true} // Mostrar label
            barStyle={{
                borderTopWidth: 2,
                borderTopColor: colorsTheme.secondary,
                paddingBottom: 0,
                backgroundColor: colorsTheme.background,
                elevation: 0,
            }}
            screenOptions={ ({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName: string = "";
                    switch( route.name ){
                        case 'TareaNavigator':
                            iconName = 'group';
                            break;
                        case 'ScannerQrScreen':
                            iconName = 'camera';
                            break;
                        case 'MaterialTopNavigator':
                            iconName = 'apple';
                            break;
                        case 'StackNavigator':
                            iconName = 'compass';
                            break;
                    }
                    //return <Text style={{ color }}>{ iconName }</Text>;
                    return <FontAwesome name={iconName} size={24} color={ color } />
                }
            })}
        >
            <Tab.Screen
                name="TareaNavigator"
                options={{ 
                    title: "Pantalla 1",
                    //tabBarLabel: "I",
                }}
                component={ TareaNavigator }
            />
            <Tab.Screen
                name="ScannerQrScreen"
                options={{ title: "Pantalla 2" }}
                component={ ScannerQrScreen }
            />
            <Tab.Screen
                name="MaterialTopNavigator"
                options={{ title: "Pantalla 3" }}
                component={ MaterialTopNavigator }
            />
            <Tab.Screen
                name="StackNavigator"
                options={{ title: "Pantalla 4" }}
                component={ StackNavigator }
            />
        </Tab.Navigator>
    );
}
