import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const ContadorSimpleScreen = () => {

    const [ valor, setValor ] = useState(10);

    return(
        <View
            style={{
                flex: 1,
                justifyContent: "center"
            }}
        >
            <Text
                style={{
                    textAlign: "center",
                    fontSize: 40
                }}
            >
                Contador: {valor}
            </Text>
            <TouchableOpacity
                onPress={ () => setValor( valor + 1 ) }
                style={{
                    backgroundColor: "violet",
                    borderRadius: 100,
                    marginHorizontal: 60
                }}
            >
                <View>
                    <Text
                        style={{
                            textAlign: "center",
                            color: "white",
                            fontSize: 40
                        }}
                    >
                        Add
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={ () => setValor( valor - 1 ) }
                style={{
                    backgroundColor: "violet",
                    borderRadius: 100,
                    marginHorizontal: 60,
                    marginTop: 10
                }}
            >
                <View>
                    <Text
                        style={{
                            textAlign: "center",
                            color: "white",
                            fontSize: 30
                        }}
                    >
                        Decrement
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
