import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { useState, useEffect } from "react";

const Home = (props) => {
  const { navigation } = props;
  const [usersData, setUsersData] = useState([]);
  const getData = () => {
    fetch("http://192.168.1.150:8888/api/index")
      .then((response) => response.json())
      .then((data) => setUsersData(data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Latest Games</Text>
        {usersData.map((game, idx) => {
          return (
            <View>
              <Text key={idx} style={styles.text}>
                {game.game_name}
              </Text>
              <TouchableHighlight
                onPress={() =>
                  navigation.navigate("Profile", {
                    game_name: game.game_name,
                    description: game.description,
                    pnote_title: game.patchnotes[0].post_title,
                    pnote: game.patchnotes[0].post_body,
                    image: game.game_image,
                    short: game.patchnotes[0].post_image,
                  })
                }
              >
                <Image
                  style={{ width: 400, height: 150, resizeMode: "contain" }}
                  source={{ uri: game.game_image }}
                  key={idx}
                />
              </TouchableHighlight>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  header: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 10,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Home;
