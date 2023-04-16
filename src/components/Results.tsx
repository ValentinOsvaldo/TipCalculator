import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './';

interface Props {
  tipAmount: string;
  total: string;
  onReset: () => void;
}

export const Results: React.FC<Props> = ({ tipAmount, total, onReset }) => {
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
          ${ tipAmount }
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
          ${ total }
        </Text>
      </View>

      <Button title="Reset" onPress={onReset} />
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
