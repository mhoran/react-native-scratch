import { StyleSheet, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { registerRootComponent } from "expo";
import MenuView, { MenuAction } from "@expo/ui/community/menu";
import MaterialIcons from "@react-native-vector-icons/material-icons";

const actions: MenuAction[] = [
  {
    id: "library",
    title: "Upload from library",
    image: "photo.on.rectangle",
  },
  {
    id: "files",
    title: "Upload from files",
    image: "folder",
  },
  { id: "camera", title: "Open camera", image: "camera" },
];

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={{ flex: 1 }} />
          <MenuView actions={actions}>
            <View accessibilityLabel="Upload Image">
              <MaterialIcons name="attach-file" size={27} color="black" />
            </View>
          </MenuView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});
