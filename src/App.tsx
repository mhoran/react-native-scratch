import { StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { registerRootComponent } from 'expo';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <TextInput
            style={{ backgroundColor: 'white' }}
            submitBehavior="submit"
            returnKeyType="send"
            enablesReturnKeyAutomatically
            multiline
            onSubmitEditing={() => console.log('onSubmitEditing')}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    padding: 8,
  },
});
