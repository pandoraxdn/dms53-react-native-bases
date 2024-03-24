import React, { useState } from 'react';
import { Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { BtnTouch } from '../../componets/BtnTouch';

export const ImagePickerScreen = () => {

    const [image, setImage] = useState<string|null>(null);

    const [image64, setImage64] = useState<string|null>(null);

    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 9,
        });

        (!result.canceled) && (() => {
          setImage( result.assets[0].uri );
          convertImageToBase64( result.assets[0].uri );
        })();

    };

    const convertImageToBase64 = async (imageUri: string) => {
        try {
          const base64 = await FileSystem.readAsStringAsync(imageUri, {
            encoding: FileSystem.EncodingType.Base64,
          });
          setImage64(base64);
        } catch (error) {
          console.error('Error converting image to base64:', error);
        }
    };

  return (
    <View 
        style={{ 
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center' 
        }}
    >
        <BtnTouch
            title="Seleccionar Imagen" 
            action={pickImage} 
            background='black'
        />
        {
            (image) && 
            (
                <Image 
                    source={{ uri: `data:image/jpeg;base64,${image64}` }} 
                    style={{ width: 150, height: 150, borderRadius: 20 }} 
                />
            )
        }
    </View>
  );
}
