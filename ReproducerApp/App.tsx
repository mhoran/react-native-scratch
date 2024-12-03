import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAvoidingView} from './KeyboardAvoidingView';

export default function () {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.topbar}>
          <View style={styles.channelsButtonWrapper}>
            <TouchableOpacity style={styles.topbarButton}>
              <Text style={[styles.channelsButtonText]}>#</Text>
            </TouchableOpacity>
          </View>
        </View>
        <KeyboardAvoidingView style={styles.container}>
          <ScrollView style={{flex: 1}} keyboardDismissMode="interactive" />
          <View style={styles.bottomBox}>
            <TextInput style={styles.inputBox} />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBox: {
    paddingHorizontal: 10,
    paddingVertical: 7.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#333',
  },
  inputBox: {
    maxHeight: 60.5,
    padding: 5,
    justifyContent: 'center',
    borderColor: 'gray',
    backgroundColor: '#fff',
    flex: 1,
  },
  topbar: {
    flexDirection: 'row',
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  channelsButtonWrapper: {
    paddingLeft: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  topbarButton: {
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  channelsButtonText: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Gill Sans',
    color: '#eee',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
});
