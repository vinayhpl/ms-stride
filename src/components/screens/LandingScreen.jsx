import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React from "react";

const LandingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../../assets/LandingScreenImage.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Stride to Success</Text>
      <Text style={styles.subtitle}>
        Go head-to-head in a fun step {"\n"} challenge with your friends.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonContinue}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LandingScreen;
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: width,
    height: height,
    marginTop: -height * 0.18,
  },
  title: {
    marginTop: -height * 0.18,
    fontSize: 24,
    // fontWeight: "bold",

    marginBottom: 20,
    textAlign: "center",
    fontWeight: "600",
  },
  buttonContinue: {
    backgroundColor: "#7265E2",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop:height* 0.12
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginLeft: 40,
    marginRight: 40,
  },
  buttonContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop:40
  },
});
