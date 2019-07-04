import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, ScrollView } from 'react-native';
import { DrawerItems } from 'react-navigation';

export default class DrawerMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: ''
        }
    }

    componentDidMount() {
        var a = new Date();
        var weekdays = new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";
        var r = weekdays[a.getDay()];

        setInterval(function() {
            this.setState({
                date: r + ', ' + new Date().toLocaleString()
            })
        }.bind(this), 1000);
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16, alignSelf: 'center' }}>
                        { this.state.date }
                    </Text>
                </View>
                <ScrollView>
                    <DrawerItems {...this.props} />
                </ScrollView>
                <View>
                    <Text style={{color: '#fff', marginLeft: 40, fontSize: 16, marginBottom: 20}}>Version 1.0</Text>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
});