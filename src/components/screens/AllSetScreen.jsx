import { Dimensions, StyleSheet, Text, View, Image, SafeAreaView,TouchableOpacity } from 'react-native';
import React from 'react';

const AllSetScreen = ({navigation}) => {
  const { width, height } = Dimensions.get('window');

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../../assets/all set.png')}
        style={[styles.image, { width: width * 0.8, height: height * 0.4 ,marginTop:height * 0.2}]}
        resizeMode="contain"
      />
      <Text style={styles.text}>You’re all set to go!</Text>
      <View style={[styles.buttonContainer, { marginTop: height * 0.2 }]}>
        <TouchableOpacity
          style={[styles.buttonContinue, { width: width * 0.8 }]}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AllSetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  image: {
    marginBottom: 10,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight:"600"
  },
  buttonContinue: {
    backgroundColor: "#7265E2",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  buttonContainer:{
    marginTop:100
  }
});
