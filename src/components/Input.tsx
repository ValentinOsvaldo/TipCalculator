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
  error?: boolean;
  onChange?: (value: string) => void;
}

export const Input: React.FC<Props> = ({
  error,
  helperMessage,
  keyboardType = 'default',
  label,
  leftIcon,
  onChange,
  placeholder,
  style,
  value,
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const borderColor = {
    error: 'red',
    focus: '#26c0ab',
  };

  const getBorderColor = (): string => {
    if (error && isFocus || error) return borderColor['error'];
    if (isFocus) return borderColor['focus'];

    return '#f4fafa';
  };

  return (
    <View
      style={{
        ...styles.textInputContainer,
        ...(style as any),
      }}>
      {(label || helperMessage) && (
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.helperText}>{helperMessage}</Text>
        </View>
      )}

      <View
        style={{
          ...styles.inputContainer,
          borderColor: getBorderColor(),
        }}>
        {leftIcon}
        <TextInput
          keyboardType={keyboardType}
          style={styles.input}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          placeholder={placeholder}
          placeholderTextColor="#7f9c9f"
          value={value}
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
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 4,
  },
  label: {
    color: '#5e7a7d',
    fontFamily: 'SpaceMono-Bold',
  },
  helperText: {
    color: 'red',
    fontFamily: 'SpaceMono-Bold',
    fontSize: 12, 
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
