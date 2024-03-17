import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { appTheme } from '../../themes/appTheme';
import { BtnTouch } from '../../componets/BtnTouch';

export const ScreenII = () => {

    const navigator = useNavigation();

    return(
        <View
            style={{
                ...appTheme.globalContainer,
                ...appTheme.globalMargin
            }}
        >
            <Text
                style={ appTheme.title }
            >
                ScreenII
            </Text>
            <BtnTouch
                title='Ir página 3'
                action={ () => navigator.navigate('ScreenIII') }
            />
        </View>
    )
}
