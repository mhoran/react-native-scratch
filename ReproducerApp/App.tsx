import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Drawer} from 'react-native-drawer-layout';

const Stack = createNativeStackNavigator();

const sidebar = () => {
  return <></>;
};

export default class App extends React.PureComponent {
  state = {
    drawerOpen: true,
  };

  openDrawer = () => {
    this.setState({drawerOpen: true});
  };

  closeDrawer = () => {
    this.setState({drawerOpen: false});
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="App"
            options={{headerShown: false, gestureEnabled: false}}>
            {() => (
              <View style={styles.container}>
                <SafeAreaView style={[styles.container]}>
                  <Drawer
                    open={this.state.drawerOpen}
                    renderDrawerContent={sidebar}
                    keyboardDismissMode={'on-drag'}
                    drawerStyle={{
                      backgroundColor: '#121212',
                    }}
                    onOpen={this.openDrawer}
                    onClose={this.closeDrawer}
                    swipeEdgeWidth={60}
                    drawerPosition={'left'}
                    drawerType="slide">
                    <StatusBar
                      barStyle="light-content"
                      backgroundColor="transparent"
                      translucent={true}
                    />
                    <View style={[styles.topbar]}>
                      <View style={styles.channelsButtonWrapper}>
                        <TouchableOpacity
                          style={styles.topbarButton}
                          onPress={this.openDrawer}>
                          <Text
                            style={[
                              styles.channelsButtonText,
                              false && {
                                color: '#ffcf7f',
                              },
                            ]}>
                            #
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={{flex: 1}} />
                  </Drawer>
                </SafeAreaView>
              </View>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
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
