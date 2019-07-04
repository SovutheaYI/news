import React from 'react';
import { Text, View, Linking,
    TouchableNativeFeedback,
    TouchableOpacity,
    Platform } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { DefaultTheme, withTheme, Provider as PaperProvider } from 'react-native-paper';


class SettingScreen extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {

        const { container, title } = styles;

        let fontSize = [{
            value: 'Large'
        }, {
            value: 'Medium'
        }, {
            value: 'Small'
        }];
        
        let themeColor = [{
            value: 'Light'
        }, {
            value: 'Dark'
        }];

        return (
            <View style={container}>
                <Text style={{color: '#FF473A'}}>Font Size</Text>
                <Dropdown 
                    data={fontSize}
                    label='Select Font Size'
                    dropdownMargins={{
                        min: 8,
                        max: 16
                    }}
                    onChangeText={(value, index, data) => this.handle(data[index].font)}
                />
                <Text style={{marginTop: 24, color: '#FF473A'}}>Theme</Text>
                <Dropdown 
                    data={themeColor}
                    label='Select Theme'
                    dropdownMargins={{
                        min: 8,
                        max: 16
                    }}
                />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        padding: 18
    }
  };

  export default SettingScreen;