import React, { Component, useState } from 'react';
import {
  View,
  FlatList,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

/*
  items => required
  value => required
  onValueChange
  filter => default normalSearch
  delayToShow => in ms
  minCharacters => default 3
  onTop => default false
*/

const Autofill2 = () => {
  const [a, setA] = useState(false);
  return <Text>GORDA GILA</Text>;
};

export default Autofill2;

// export default class AutoFill extends Component {
class AutoFill extends Component {
  state = {
    textInputRef: null,
    value: '',
    selected: undefined,
    textHeight: undefined,
    items: this.props.items,
  };

  defaultFilter = (newValue) => {
    const { items } = this.props;
    return items.filter((s) => {
      const lower = s.toLowerCase();
      return lower.startsWith(newValue.toLowerCase());
    });
  };

  onChangeText = (newValue) => {
    const { value, onValueChange, filter } = this.props;
    let newItems = filter ? filter(newValue) : this.defaultFilter(newValue);
    if (newItems.length === 0) {
      newItems = this.state.items;
    }
    onValueChange(newItems.length === 0 ? value : newValue);
    this.setState({ items: newItems });
  };

  render() {
    const { items } = this.state;
    const { renderItem, value, inputPosition = 'top' } = this.props;
    const position = {
      [inputPosition]: this.state.textHeight,
    };

    return (
      <View>
        <View>
          <TextInput
            ref={(ref) => (this.textInputRef = ref)}
            value={value}
            style={{
              height: 24,
              borderWidth: 1,
              width: 315,
            }}
            onChangeText={this.onChangeText}
            // onTextInput={({ nativeEvent: { text } }) => this.onChangeText(text)}
            onLayout={({
              nativeEvent: {
                layout: { height },
              },
            }) => this.setState({ textHeight: height })}
          />
          <View
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              width: '100%',
              maxHeight: 200,
              ...position,
            }}>
            <FlatList
              {...{ renderItem }}
              keyExtractor={(item, index) => `${index}`}
              data={items}
              bounces={false}
            />
          </View>
        </View>
      </View>
    );
  }
}
