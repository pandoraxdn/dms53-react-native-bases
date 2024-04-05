import React from 'react';
import { View, Text, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import { LineChart, ProgressChart, PieChart, BarChart } from 'react-native-chart-kit';
import { appTheme } from '../../themes/appTheme';

export const GraficosScreen = () => {

    const chartConfig = {
        backgroundColor: 'white', // Fondo
        backgroundGradientFrom: "violet", // Inicio
        backgroundGradientTo: "black", // Fin
        decimalPlaces: 2, // Número de decimales
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

    const height = Dimensions.get("window").height;
    const width = Dimensions.get("window").height;

    return(
        <SafeAreaView
            style={{ flex: 1, alignItems: "center" }}
        >
            <ScrollView>
                <View>
                    <Text
                        style={ appTheme.title }
                    >
                        Bezier Line Char
                    </Text>
                    <LineChart
                        data={{
                            labels: [ "Enero", "Febrero", "Marzo", "Abril" ],
                            datasets:[
                                {
                                    data:[
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                    ]
                                }
                            ]
                        }}
                        chartConfig={ chartConfig }
                        width={ width * 0.9 }
                        height={ height * 0.3 }
                        yAxisLabel='$'
                        yAxisInterval={1}
                        style={{ borderRadius: 20 }}
                    />
                </View>
                <View>
                    <Text
                        style={ appTheme.title }
                    >
                        Line Char
                    </Text>
                    <LineChart
                        data={{
                            labels: [ "Enero", "Febrero", "Marzo", "Abril" ],
                            legend: ["Dias de lluvia"],
                            datasets:[
                                {
                                    data:[
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                    ],
                                    color: ( opacity = 1) => `rgba(255,255,255,${opacity})`,
                                    strokeWidth: 2,
                                }
                            ]
                        }}
                        chartConfig={ chartConfig }
                        width={ width * 0.9 }
                        height={ height * 0.3 }
                        style={{ borderRadius: 20 }}
                    />
                </View>
                <View>
                    <Text
                        style={ appTheme.title }
                    >
                        Progress Char
                    </Text>
                    <ProgressChart
                        data={{
                            labels: [ "Pro1", "Pro2", "Pro3" ],
                            data:[
                                Math.random(),
                                Math.random(),
                                Math.random(),
                            ]
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
                <View>
                    <Text
                        style={ appTheme.title }
                    >
                        Pie Char
                    </Text>
                    <PieChart
                        data={[
                            {
                              name: 'Seoul',
                              population: Math.random() * 100,
                              color: 'rgba(131, 167, 234, 1)',
                              legendFontColor: '#7F7F7F',
                              legendFontSize: 15,
                            },
                            {
                              name: 'Toronto',
                              population: Math.random() * 100,
                              color: '#F00',
                              legendFontColor: '#7F7F7F',
                              legendFontSize: 15,
                            },
                            {
                              name: 'New York',
                              population: Math.random() * 100,
                              color: '#ffffff',
                              legendFontColor: '#7F7F7F',
                              legendFontSize: 15,
                            },
                            {
                              name: 'Moscow',
                              population: Math.random() * 100,
                              color: 'rgb(0, 0, 255)',
                              legendFontColor: '#7F7F7F',
                              legendFontSize: 15,
                            },
                        ]}
                        width={ width * 0.9 }
                        height={ height * 0.3 }
                        accessor="population"
                        backgroundColor="transparent"
                        paddingLeft="15"
                        chartConfig={ chartConfig }
                        style={{
                            borderRadius: 20,
                        }}
                    />
                </View>
                <View>
                    <Text
                        style={ appTheme.title }
                    >
                        Char Mander
                    </Text>
                    <BarChart
                        data={{
                            labels: [ "Enero", "Febrero", "Marzo", "Abril" ],
                            datasets:[
                                {
                                    data:[
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                    ]
                                }
                            ]
                        }}
                        chartConfig={ chartConfig }
                        yAxisLabel='$'
                        yAxisSuffix=''
                        width={ width * 0.9 }
                        height={ height * 0.3 }
                        style={{ borderRadius: 20 }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );

}
