import React from 'react';
import { View } from 'react-native';
import { TouchImage } from '../../componets/TouchImage';
import { appTheme } from '../../themes/appTheme';

export const AvatarScreen = () => {

    return(
        <View
            style={{
                ...appTheme.globalContainer,
                ...appTheme.globalMargin,
                alignItems: "center"
            }}
        >
            <TouchImage
                sourceImage='https://w7.pngwing.com/pngs/388/207/png-transparent-opensuse-suse-linux-distributions-installation-linux-text-logo-grass.png'
            />
            <TouchImage
                sourceImage='https://w7.pngwing.com/pngs/368/108/png-transparent-arch-linux-linux-distribution-installation-xfce-linux-text-triangle-logo.png'
            />
            <TouchImage
                sourceImage='https://w7.pngwing.com/pngs/472/256/png-transparent-debian-linux-distribution-computer-software-logo-linux-text-magenta-linux.png'
            />
            <TouchImage
                sourceImage='https://cdn.icon-icons.com/icons2/2699/PNG/512/nixos_logo_icon_170910.png'
            />
        </View>
    )
}
