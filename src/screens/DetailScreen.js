import React from 'react';
import { Text, View, Linking,
    TouchableNativeFeedback,
    TouchableOpacity,
    Platform, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { italic } from 'ansi-colors';

export default class DetailScreen extends React.Component {

    static navigationOptions = {
        title: 'News Portal'
    };

    render() {

        const { navigation } = this.props;
        const publish = navigation.getParam('time', '');
        const urlImg = navigation.getParam('urlImg', '');
        const cont = navigation.getParam('cont', '');
        const title = navigation.getParam('title', '');
        const ref = navigation.getParam('ref', '');
        const finalTime = navigation.getParam('timeFinal', '');
        const url = navigation.getParam('url', ref);

        return (
            <ScrollView style={{marginBottom: 28}}>
                <Card
                    title={title}
                    image={{uri: urlImg}}
                >
                    <Text style={{fontSize: 20, color: '#FF473A', marginBottom: 12}}>{finalTime}</Text>
                    <Text style={{fontSize: 14}}>{publish}</Text>
                    <Text style={{marginTop: 30, fontSize: 16}}>{cont}</Text>
                    <Text style={{marginTop: 20}}>Ref: </Text>
                    <Text style={{color: '#FF473A', marginBottom: 10}} onPress={ ()=> Linking.openURL(url) } >{url}</Text>
                </Card>
            </ScrollView>
        );
    }
}

const styles = {
    noteStyle: {
      margin: 5,
      fontStyle: 'italic',
      color: '#b2bec3',
      fontSize: 10
    },
    featuredTitleStyle: {
      marginHorizontal: 5,
      textShadowColor: '#00000f',
      textShadowOffset: { width: 3, height: 3 },
      textShadowRadius: 3
    }
  };