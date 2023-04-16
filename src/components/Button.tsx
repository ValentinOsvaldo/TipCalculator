import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface Props {
  title: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Button: React.FC<Props> = ({
  title,
  style,
  textStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        ...styles.button,
        ...(style as any),
      }}
      onPress={onPress}>
      <Text
        style={{
          ...styles.buttonText,
          ...(textStyle as any),
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#26C2AD',
    borderRadius: 4,
    paddingVertical: 8,
  },
  buttonText: {
    color: '#00494d',
    fontFamily: 'SpaceMono-Bold',
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
