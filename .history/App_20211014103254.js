import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props)

    //this.updateUserType = this.updateUserType.bind(this)
    this.state = {
      calculResult: 0,
    }
  }
  render() {
    return (
      <View style={{ margin: 20 }}>
        <View style={{ height: '30%', fontSize: 20, borderColor: 'red', borderWidth: 2, padding: 10 }}>
          <Text style={{ fontSize: 20, alignSelf: 'center' }}>
            {this.state.calculResult}
          </Text>
        </View>

        <View style={{ flexDirection: 'row',justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 20, alignSelf: 'center' }}>
            1
          </Text>
          <Text style={{ fontSize: 20, alignSelf: 'center' }}>
            2
          </Text>
          <Text style={{ fontSize: 20, alignSelf: 'center' }}>
            2
          </Text>
          <Text style={{ fontSize: 20, alignSelf: 'center' }}>
            2
          </Text>
        </View>
      </View>

    )
  }
}