import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import RNAutofill from 'react-native-autofill';

import fruits from './fruits';

export default class App extends Component {
  state = {
    value: '',
  };
  componentDidMount() {}

  setValue = (value) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#caf0f8',
        }}>
        <RNAutofill
          {...{ value }}
          items={fruits}
          onValueChange={this.setValue}
          // filter={(newValue) =>
          //   fruits.filter((s) => {
          //     const lower = s.toLowerCase();
          //     return lower.startsWith(newValue.toLowerCase());
          //   })
          // }
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      </View>
    );
  }
}
