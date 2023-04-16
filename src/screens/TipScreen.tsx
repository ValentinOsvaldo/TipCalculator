import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TipContainer } from '../components';

export const TipScreen = () => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#c5e4e7" barStyle="dark-content" />
      <ScrollView
        style={{ backgroundColor: '#c5e4e7' }}
        contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.header}>
          <Text style={styles.headerText}>TIP CALCULATOR</Text>
        </View>

        <TipContainer />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 22,
  },
  headerText: {
    color: '#5e7a7d',
    fontFamily: 'SpaceMono-Bold',
    fontSize: 26,
    textAlign: 'center',
  }
});
