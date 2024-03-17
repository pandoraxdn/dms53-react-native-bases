import React, { useContext } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { appTheme } from '../themes/appTheme';
import { AuthContext } from '../context/AuthContext';

interface Props{
    sourceImage: string;
}

export const TouchImage = ( { sourceImage }:Props ) => {

    const { authState, changeFavImage } = useContext( AuthContext );

    return(
        <TouchableOpacity
            onPress={ () =>  {
                ( !authState.isLoggenIn )
                ? console.log( "User not login" )
                : changeFavImage( sourceImage )
            }}
        >
            <Image
                style={{
                    ...appTheme.avatar,
                    marginTop: 5,
                }}
                source={{
                    uri: sourceImage
                }}
            />
        </TouchableOpacity>
    );
}
