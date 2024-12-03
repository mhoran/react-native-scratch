import * as React from 'react';
import {useState} from 'react';
import {
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {FadeInRight} from 'react-native-reanimated';
import {KeyboardAvoidingView} from './KeyboardAvoidingView';

const BufferLine: React.FC<{index: number}> = ({index}) => {
  const showReadMarker = index % 9 === 0;

  return (
    <View>
      <TouchableHighlight onLongPress={() => {}}>
        <View
          style={{
            backgroundColor: '#2e3440',
            paddingVertical: 5,
            paddingHorizontal: 10,
            flexDirection: 'row',
          }}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[
              styles.text,
              {
                width: 80,
                textAlign: 'right',
              },
            ]}>
            username
          </Text>
          <Text style={styles.text}> </Text>

          <Text style={[styles.text, {flex: 1}]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>

          <Text style={[styles.text]}> 11:11</Text>
        </View>
      </TouchableHighlight>
      {showReadMarker && (
        <View style={{borderWidth: 1, borderColor: 'magenta'}} />
      )}
    </View>
  );
};

export default function () {
  const [showButton, setShowButton] = useState(false);

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
        <KeyboardAvoidingView style={{...styles.container}}>
          <FlatList
            inverted
            data={Array(300)}
            renderItem={({item, index}) => (
              <BufferLine key={index} index={index} />
            )}
            style={{flex: 1}}
            keyboardDismissMode="interactive"
          />
          <View style={styles.bottomBox}>
            <TextInput
              style={styles.inputBox}
              onFocus={() => setShowButton(true)}
              onBlur={() => setShowButton(false)}
            />
            {showButton && (
              <Animated.View entering={FadeInRight}>
                <View style={{width: 40, paddingLeft: 10}} />
              </Animated.View>
            )}
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
    zIndex: 1,
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
  text: {
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
    color: '#eee',
    fontSize: 14,
  },
});
