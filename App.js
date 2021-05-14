import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ThemeContainer from './src/components/ThemeContainer';
import { Toolbar,ListItem } from 'react-native-material-ui';

export default class App extends React.Component {
  render() {
    return (
      <ThemeContainer>
      <Toolbar
        leftElement="menu"
        centerElement="Vaccination Guide" 
        rightElement={{
            menu: {
                icon: "more-vert",
                labels: ["About Us", "Locate Us"]
            }
        }}
        onRightElementPress={ (label) => { console.log(label) }}
      />
      <View>
      <ListItem
        divider
        centerElement={{
          primaryText: 'Primary text',
        }}
        onPress={() => {}}
      />
      </View>
      </ThemeContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
