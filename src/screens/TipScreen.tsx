import React, { useContext } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button, Input, Results } from '../components';
import { TipContext } from '../context';

export const TipScreen = () => {
  const { tipState, onChangeState } = useContext(TipContext);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#c5e4e7" barStyle="dark-content" />
      <ScrollView style={{ backgroundColor: '#c5e4e7' }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.header}>
          <Text style={styles.headerText}>TIP CALCULATOR</Text>
        </View>
        <View style={styles.tipContainer}>
          <Input
            label="Bill"
            keyboardType="decimal-pad"
            leftIcon={<Icon name="attach-money" color="gray" size={20} />}
            value={`${tipState.bill}`}
            onChange={value => onChangeState(value, 'bill')}
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
              <Button
                title="5%"
                style={{
                  flex: 1,
                  marginBottom: 14,
                  backgroundColor: '#00494d',
                }}
                textStyle={{
                  fontSize: 24,
                  color: '#fff',
                }}
              />
              <View style={{ width: 12 }} />
              <Button
                title="10%"
                style={{
                  flex: 1,
                  marginBottom: 14,
                  backgroundColor: '#00494d',
                }}
                textStyle={{
                  fontSize: 24,
                  color: '#fff',
                }}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Button
                title="15%"
                style={{
                  flex: 1,
                  marginBottom: 14,
                  backgroundColor: '#00494d',
                }}
                textStyle={{
                  fontSize: 24,
                  color: '#fff',
                }}
              />
              <View style={{ width: 12 }} />
              <Button
                title="25%"
                style={{
                  flex: 1,
                  marginBottom: 14,
                  backgroundColor: '#00494d',
                }}
                textStyle={{
                  fontSize: 24,
                  color: '#fff',
                }}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Button
                title="50%"
                style={{
                  flex: 1,
                  marginBottom: 14,
                  backgroundColor: '#00494d',
                }}
                textStyle={{
                  fontSize: 24,
                  color: '#fff',
                }}
              />
              <View style={{ width: 12 }} />
              <Input placeholder="Custom" style={{ flex: 1 }} />
            </View>
          </View>

          <Input
            label="Number of people"
            keyboardType="decimal-pad"
            leftIcon={<Icon name="person" color="gray" size={20} />}
            value={`${tipState.people}`}
            onChange={value => onChangeState(value, 'people')}
          />

          <Results />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 24,
  },
  headerText: {
    color: '#5e7a7d',
    fontFamily: 'SpaceMono-Bold',
    fontSize: 32,
    textAlign: 'center',
  },
  tipContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    flex: 1,
    padding: 28,
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
