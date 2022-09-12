import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";

const Patchnote = (props) => {
  const { pnote, pnote_title, short } = props.route.params;

  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <View style={styles.container}>
        <Image
          style={{
            width: 200,
            height: 100,
            resizeMode: "contain",
            marginTop: 15,
          }}
          source={{ uri: short }}
        />
        <Text style={styles.title}>{pnote_title}</Text>
        <Text style={styles.text}>{pnote}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  title: {
    color: "white",
    fontSize: 22,
    paddingHorizontal: 10,
    paddingTop: 2,
    paddingBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 16,
    paddingHorizontal: 10,
  },
});

export default Patchnote;
