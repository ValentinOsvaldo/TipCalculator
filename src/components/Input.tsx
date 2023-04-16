import React, { useRef, useState } from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';

interface Props {
  value?: string;
  label?: string;
  leftIcon?: React.ReactNode;
  helperMessage?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  style?: StyleProp<ViewStyle>;
  onChange?: (value: string) => void;
}

export const Input: React.FC<Props> = ({
  label,
  value,
  leftIcon,
  helperMessage,
  keyboardType = 'default',
  placeholder,
  style,
  onChange
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <View
      style={{
        ...styles.textInputContainer,
        ...(style as any),
      }}>
      {(label || helperMessage) && (
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
          <Text>{helperMessage}</Text>
        </View>
      )}

      <View
        style={{
          ...styles.inputContainer,
          borderColor: isFocus ? '#26c0ab' : '#f4fafa',
        }}>
        {leftIcon}
        <TextInput
          keyboardType={keyboardType}
          style={styles.input}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          placeholder={placeholder}
          placeholderTextColor="#7f9c9f"
          value={ value }
          onChangeText={onChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'column',
    marginBottom: 14,
  },
  labelContainer: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  label: {
    color: '#5e7a7d',
    fontFamily: 'SpaceMono-Bold',
  },
  inputContainer: {
    alignItems: 'center',
    backgroundColor: '#F3F8FB',
    flexDirection: 'row',
    paddingHorizontal: 12,
    borderWidth: 2,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    textAlign: 'right',
    color: '#00494d',
    fontFamily: 'SpaceMono-Bold',
    fontSize: 22,
  },
});
