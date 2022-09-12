import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";

const Profile = (props) => {
  const { navigation } = props;
  const { game_name, description, pnote, pnote_title, image, short } =
    props.route.params;

  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Text style={styles.gameheader}>{game_name}</Text>
        <Image
          style={{
            width: 400,
            height: 150,
            resizeMode: "contain",
            marginTop: 15,
          }}
          source={{ uri: image }}
        />
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.gameheader}>Latest Patchnotes</Text>
        <Image
          style={{
            width: 200,
            height: 100,
            resizeMode: "contain",
            marginTop: 15,
          }}
          source={{ uri: short }}
        />
        <Text style={styles.note_title}>{pnote_title}</Text>
        <Pressable
          onPress={() =>
            navigation.navigate("Patchnote", {
              pnote_title: pnote_title,
              pnote: pnote,
              short: short,
            })
          }
          style={styles.button}
        >
          <Text style={styles.text}>Read Patchnotes!</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gameheader: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 10,
  },
  description: {
    color: "white",
    paddingHorizontal: 34,
    paddingVertical: 14,
    fontSize: 14,
  },
  note_title: {
    color: "white",
    fontSize: 20,
    paddingHorizontal: 10,
    paddingTop: 2,
    paddingBottom: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "indigo",
    marginBottom: 30,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Profile;
