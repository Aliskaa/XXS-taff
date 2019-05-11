import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import ApiCalendar from 'react-google-calendar-api'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick = (event, name) => {
    if (name === 'sign-in') {
      ApiCalendar.handleAuthClick();
    } else if (name === 'sign-out') {
      ApiCalendar.handleSignoutClick();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Lucky</Text>

        <Button title='sign-in' onPress={(e) => this.handleItemClick(e, 'sign-in')} />
        
        <Button title='sign-out' onPress={(e) => this.handleItemClick(e, 'sign-out')}  />
      </View>
      
        
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
