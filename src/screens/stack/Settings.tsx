import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParamsDrawer } from '../../navigator/DrawerNavigator';
import { AuthContext } from '../../context/AuthContext';
import { appTheme } from '../../themes/appTheme';
import { BtnTouch } from '../../componets/BtnTouch';

interface Props extends DrawerScreenProps<RootStackParamsDrawer,"Settings">{};

export const Settings = ( { navigation }: Props ) => {

    const { authState } = useContext( AuthContext );

    return(
        <View
            style={{
                ...appTheme.globalContainer,
                ...appTheme.globalMargin
            }}
        >
            <BtnTouch
                title='Abrir menú'
                background='black'
                action={ () => navigation.toggleDrawer() }
            />
            <Text
                style={{ fontSize: 25 }}
            >
                { JSON.stringify(authState, null, 4) }
            </Text>
        </View>
    );
}
