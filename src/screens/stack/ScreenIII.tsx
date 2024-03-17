import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigator/StackNavigator';
import { appTheme } from '../../themes/appTheme';
import { BtnTouch } from '../../componets/BtnTouch';

interface Props extends StackScreenProps<RootStackParams,"ScreenIII">{};

export const ScreenIII = ( { navigation } :Props ) => {

    return(
        <View
            style={{
                ...appTheme.globalContainer,
                ...appTheme.globalMargin
            }}
        >
            <Text
                style={appTheme.title}
            >
                ScreenIII
            </Text>
            <BtnTouch 
                title='Regresar pantalla'
                action={ () => navigation.pop() }
            />
            <BtnTouch 
                title='Regresar inicio'
                action={ () => navigation.popToTop() }
            />
        </View>
    );
}
