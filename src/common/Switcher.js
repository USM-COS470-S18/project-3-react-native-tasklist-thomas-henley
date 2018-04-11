import React from 'react';
import { Switch, View, Text } from 'react-native';

const Switcher = ({ label, value, onValueChange, color }) => {
  const { labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <Switch value={value} onValueChange={onValueChange} onTintColor={color} />
    </View>
  );
};

const styles = {
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Switcher };
