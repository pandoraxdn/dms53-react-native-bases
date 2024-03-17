import React, { ReactNode } from 'react';
//import { TiposDatos } from './src/ts/TiposDatos';
//import { Funciones } from './src/ts/Funciones';
//import { Interfaces } from './src/ts/Interfaces';
//import { ContadorSimpleScreen } from './src/screens/ContadorSimpleScreen';
//import { ContadorScreen } from './src/screens/ContadorScreen';
//import { ComponenteBase } from './src/screens/ComponenteBase';
//import { ComponenteIStyleBase } from './src/screens/styles/ComponenteIStyleBase';
//import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
//import { DimensionesScreen } from './src/screens/DimensionesScreen';
//import { PositionScreen } from './src/screens/PositionScreen';
//import { FlexScreen } from './src/screens/FlexScreen';
//import { HooksScreen } from './src/screens/HooksScreen';
//import { CounterReducerScreen } from './src/screens/CounterReducerScreen';
//import { UseReducerScreen } from './src/screens/UseReducerScreen';
//import { UseEffectScreen } from './src/screens/UseEffectScreen';
//import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
    return (
        <NavigationContainer>
            <AppState>
                <DrawerNavigator/>
            </AppState> 
        </NavigationContainer>
    );
}

const AppState = ( { children }: {children: ReactNode} ) => {
    return(
        <AuthProvider>
            { children }
        </AuthProvider>
    );
}

export default App;
