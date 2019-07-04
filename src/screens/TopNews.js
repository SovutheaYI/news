import React from 'react';
import { Text, View, Linking,
    TouchableNativeFeedback,
    TouchableOpacity,
    Platform } from 'react-native';
import { Card, Divider } from 'react-native-elements';
import moment from 'moment';
import { withNavigation } from 'react-navigation';

class TopNews extends React.Component {
    
    render() {

        let TouchablePlatformSpecific = Platform.OS === 'ios' ? 
        TouchableOpacity : 
        TouchableNativeFeedback;
        let touchableStyle = Platform.OS === 'ios' ? 
        styles.iosTouchable : 
        styles.androidTouchable
        const {
            title,
            description,
            publishedAt,
            source,
            urlToImage,
            url,
            id,
            content
        } = this.props.article;
        const { noteStyle, featuredTitleStyle } = styles;
        const time = moment(publishedAt || moment.now()).fromNow();
        var final = publishedAt.substring(0, 10);
        return (
                <TouchablePlatformSpecific style={touchableStyle}
                    useForeground
                    onPress={() => this.props.navigation.navigate('Detail', {title: title, urlImg: urlToImage, cont: content, time: time, header: 'SPORT', date: final, url: url})}
                >
                    <Card
                        featuredTitle={title}
                        featuredTitleStyle={featuredTitleStyle}
                        image={{
                            uri: urlToImage
                        }}
                    >
                        <Text style={{marginBottom: 10}} numberOfLines={4}>
                            {description || 'Read More..'}
                        </Text>
                        <Text style={{marginBottom: 10, fontSize: 11}}>Read More..</Text>
                        <Divider style={{backgroundColor: '#dfe6e9'}} />
                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                        >
                            <Text style={noteStyle}>{source.name.toUpperCase()}</Text>
                            <Text style={noteStyle}>{time}</Text>
                        </View>
                    </Card>
                </TouchablePlatformSpecific>
        );
    }
}

const styles = {
    noteStyle: {
      margin: 5,
      fontStyle: 'italic',
      color: '#FF473A',
      fontSize: 10
    },
    featuredTitleStyle: {
      marginHorizontal: 5,
      textShadowColor: '#00000f',
      textShadowOffset: { width: 3, height: 3 },
      textShadowRadius: 3
    }
  };

export default withNavigation(TopNews);