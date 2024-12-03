import * as React from 'react';
import {useState} from 'react';
import {
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {Drawer} from 'react-native-drawer-layout';
import Animated, {FadeInRight} from 'react-native-reanimated';
import {KeyboardAvoidingView} from './KeyboardAvoidingView';

const BufferLine: React.FC<{item: unknown; index: number}> = ({index}) => {
  return (
    <TouchableHighlight onLongPress={() => {}}>
      <View
        style={{
          backgroundColor: '#2e3440',
          paddingVertical: 5,
          paddingHorizontal: 10,
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
            color: '#eee',
            fontSize: 14,
          }}>
          Message
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export default function () {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [showButton, setShowButton] = useState(false);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Drawer
          open={drawerOpen}
          onOpen={() => setDrawerOpen(true)}
          onClose={() => setDrawerOpen(false)}
          renderDrawerContent={() => null}>
          <View style={styles.topbar}>
            <View style={styles.channelsButtonWrapper}>
              <TouchableOpacity
                style={styles.topbarButton}
                onPress={() => setDrawerOpen(true)}>
                <Text style={[styles.channelsButtonText]}>#</Text>
              </TouchableOpacity>
            </View>
          </View>
          <KeyboardAvoidingView style={{...styles.container}}>
            <FlatList
              inverted
              renderItem={({item, index}) => (
                <BufferLine item={item} index={index} />
              )}
              data={Array(300)}
              style={{flex: 1}}
              keyboardDismissMode="interactive"
              initialNumToRender={35}
              maxToRenderPerBatch={35}
              removeClippedSubviews={true}
              windowSize={15}
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
        </Drawer>
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
});
