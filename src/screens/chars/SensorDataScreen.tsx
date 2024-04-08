import React from 'react';
import { View, Text, RefreshControl, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { LineChart, BarChart, ProgressChart } from 'react-native-chart-kit';
import { useSensorData } from '../../hooks/useSensorData';
import { appTheme } from '../../themes/appTheme';

export const SensorDataScreen = () => {

    const height = Dimensions.get('window').height;

    const width = Dimensions.get('window').width;

    const { isLoading, loadData, data, today, yesterday, beforeYesterday } = useSensorData();

    const chartConfig = {
        backgroundColor: 'white',
        backgroundGradientFrom: "olive",
        backgroundGradientTo: "black",
        decimalPlaces: 2,
        color: ( opacity = 1 ) => `rgba(255,255,255,${opacity})`,
        labelColor: ( opacity = 1 ) => `rgba(255,255,255,${opacity})`,
        style:{
            borderRadius: 20,
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "white",
        }
    }

    return(
        <SafeAreaView
            style={{
                flex: 1,
                alignItems: 'center'
            }}
        >
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={ (!isLoading) }
                        onRefresh={ loadData }
                        colors={ ["olive"] }
                        progressBackgroundColor="black"
                    />
                }
            >
                <View
                    style={{
                        alignItems: 'center',
                        backgroundColor: 'olive',
                        borderRadius: 20,
                        borderColor: "black",
                        borderWidth: 5,
                        width: width * 0.9,
                    }}
                >
                    <Text
                        style={{
                            ...appTheme.title,
                            color: 'white'
                        }}
                    >
                        Información Sensor
                    </Text> 
                    <Text
                        style={{
                            ...appTheme.menuText,
                            color: 'white',
                            textAlign: 'center'
                        }}
                    >
                        { `Número de registros(documents): \n${data?.numberRegisters}` }
                    </Text> 
                </View>
                <View>
                    <Text
                        style={{
                            ...appTheme.title,
                            color: 'black',
                            textAlign: 'center'
                        }}
                    >
                        Datos sensor día de hoy
                        { `\nValor máximo: ${today?.max} cm` }
                        { `\nValor minínimo: ${today?.min} cm` }
                    </Text>
                    <LineChart
                        data={{
                            labels: [ ...today?.labels ],
                            datasets:[
                                {
                                    data: [ ...today?.values ],
                                }
                            ]
                        }}
                        chartConfig={ chartConfig }
                        width={ width * 0.9 }
                        height={ height * 0.3 }
                        yAxisInterval={1}
                        yAxisSuffix='cm'
                        style={{ borderRadius: 20 }}
                    />
                </View>
                <View>
                    <Text
                        style={{
                            ...appTheme.title,
                            color: 'black',
                            textAlign: 'center'
                        }}
                    >
                        Datos sensor día de ayer
                        { `\nValor máximo: ${yesterday?.max}` }
                        { `\nValor minínimo: ${yesterday?.min}` }
                    </Text>
                    <LineChart
                        data={{
                            labels: [ ...yesterday?.labels ],
                            legend: ["Datos sensor día de ayer"],
                            datasets:[
                                {
                                    data: [ ...yesterday?.values ],
                                    color: ( opacity = 1) => `rgba(85, 107, 47,${opacity})`,
                                    strokeWidth: 4,
                                }
                            ]
                        }}
                        yAxisSuffix='cm'
                        chartConfig={ chartConfig }
                        width={ width * 0.9 }
                        height={ height * 0.3 }
                        style={{ borderRadius: 20 }}
                    />
                </View>
                <View>
                    <Text
                        style={{
                            ...appTheme.title,
                            color: 'black',
                            textAlign: 'center'
                        }}
                    >
                        Datos sensor día de ante ayer
                        { `\nValor máximo: ${beforeYesterday?.max}` }
                        { `\nValor minínimo: ${beforeYesterday?.min}` }
                    </Text>
                    <BarChart
                        data={{
                            labels: [ ...beforeYesterday?.labels ],
                            datasets:[
                                {
                                    data: [ ...beforeYesterday?.values ],
                                }
                            ]
                        }}
                        chartConfig={ chartConfig }
                        yAxisLabel=''
                        yAxisSuffix='cm'
                        width={ width * 0.9 }
                        height={ height * 0.3 }
                        style={{ borderRadius: 20 }}
                    />
                </View>
                <View>
                    <Text
                        style={{
                            ...appTheme.title,
                            color: 'black',
                            textAlign: 'center'
                        }}
                    >
                        Datos sensor día de ante ayer
                        { `\nValor máximo: ${beforeYesterday?.max}` }
                        { `\nValor minínimo: ${beforeYesterday?.min}` }
                    </Text>
                    <ProgressChart
                        data={{
                            labels: [ ...beforeYesterday?.labels ],
                            data:[ ...beforeYesterday?.values.map( (value) => value/100 ) ],
                        }}
                        width={ width * 0.9 }
                        height={ height * 0.3 }
                        strokeWidth={16}
                        radius={32}
                        hideLegend={false}
                        chartConfig={chartConfig}
                        style={{ borderRadius: 20 }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
