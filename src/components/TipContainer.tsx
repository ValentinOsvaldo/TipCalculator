import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input, Results, TipButton } from './';
import { TipContext } from '../context';

export const TipContainer = () => {
  const { tipState, onChangeState, reset, error } = useContext(TipContext);

  const onPressTip = (value: number) => {
    if (tipState.customTip !== '') {
      onChangeState('', 'customTip');
    }

    onChangeState(value, 'tipPercentage')
  }

  return (
    <View style={styles.tipContainer}>
      <Input
        label="Bill"
        keyboardType="decimal-pad"
        leftIcon={<Icon name="attach-money" color="gray" size={20} />}
        value={`${tipState.bill}`}
        onChange={value => {
          onChangeState(value, 'bill');
        }}
        placeholder="0"
        helperMessage={error && error}
        error={!!error}
      />

      <View style={{ flexDirection: 'column' }}>
        <Text
          style={{
            color: '#5e7a7d',
            fontFamily: 'SpaceMono-Bold',
            fontSize: 14,
            marginBottom: 8,
          }}>
          Select Tip %
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <TipButton
            value={5}
            isSelected={value => tipState.tipPercentage == value}
            onPress={onPressTip}
          />
          <View style={{ width: 12 }} />
          <TipButton
            value={10}
            isSelected={value => tipState.tipPercentage == value}
            onPress={onPressTip}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TipButton
            value={15}
            isSelected={value => tipState.tipPercentage == value}
            onPress={onPressTip}
          />
          <View style={{ width: 12 }} />
          <TipButton
            value={25}
            isSelected={value => tipState.tipPercentage == value}
            onPress={onPressTip}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TipButton
            value={50}
            isSelected={value => tipState.tipPercentage == value}
            onPress={onPressTip}
          />
          <View style={{ width: 12 }} />
          <Input
            placeholder="Custom"
            style={{ flex: 1 }}
            value={tipState.customTip}
            onChange={value => {
              if (tipState.tipPercentage !== '') {
                onChangeState('', 'tipPercentage')
              }
              onChangeState(value, 'customTip')
            }}
            keyboardType="decimal-pad"
            helperMessage={error && error}
            error={!!error}
          />
        </View>
      </View>

      <Input
        label="Number of people"
        keyboardType="decimal-pad"
        leftIcon={<Icon name="person" color="gray" size={20} />}
        value={`${tipState.people}`}
        onChange={value => {
          onChangeState(value, 'people');
        }}
        placeholder="0"
        helperMessage={error && error}
        error={!!error}
      />

      <Results
        tipAmount={`${tipState.tipAmount}`}
        total={`${tipState.total}`}
        onReset={reset}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tipContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    bottom: 0,
  },
});
