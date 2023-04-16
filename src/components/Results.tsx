import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './';

export const Results = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text
            style={{
              fontFamily: 'SpaceMono-Bold',
              color: '#fff',
            }}>
            Tip Amount
          </Text>
          <Text
            style={{
              fontFamily: 'SpaceMono-Bold',
              fontSize: 12,
              color: 'hsl(184, 14%, 56%)',
            }}>
            / person
          </Text>
        </View>

        <Text
          style={{
            color: '#26C2AD',
            fontFamily: 'SpaceMono-Bold',
            fontSize: 26,
          }}>
          $99.99
        </Text>
      </View>

      <View style={styles.row}>
        <View>
          <Text
            style={{
              fontFamily: 'SpaceMono-Bold',
              color: '#fff',
            }}>
            Total
          </Text>
          <Text
            style={{
              fontFamily: 'SpaceMono-Bold',
              fontSize: 12,
              color: 'hsl(184, 14%, 56%)',
            }}>
            / person
          </Text>
        </View>

        <Text
          style={{
            color: '#26C2AD',
            fontFamily: 'SpaceMono-Bold',
            fontSize: 26,
          }}>
          $99.99
        </Text>
      </View>

      <Button title="Reset" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00494d',
    padding: 20,
    borderRadius: 12,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});
