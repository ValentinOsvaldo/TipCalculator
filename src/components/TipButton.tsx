import React from 'react';
import { Button } from './Button';

interface Props {
  value: number;
  isSelected: (value: number) => boolean;
  onPress: (value: number) => void;
}

export const TipButton: React.FC<Props> = ({ value, isSelected, onPress }) => {
  return (
    <Button
      title={`${value}%`}
      style={{
        flex: 1,
        marginBottom: 14,
        backgroundColor: isSelected(value) ? '#26C2AD' : '#00494d',
      }}
      textStyle={{
        fontSize: 22,
        color: isSelected(value) ? '#00494d' : '#fff',
      }}
      onPress={() => onPress(value)}
    />
  );
};
