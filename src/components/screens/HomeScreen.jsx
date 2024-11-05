// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text>HomeScreen</Text>
//     </View>
//   )
// }

// export default HomeScreen

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f5f5f5',
//       },
// })

import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../../assets/homeLogo.png")} style={styles.logo} />
        <Icon name="menu-outline" size={24} color="#000" />
      </View>

      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>Hi Saran,</Text>
        <Text style={styles.locationText}>Bengaluru, India</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
          <Text style={styles.activeTabText}>Days</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>Week</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>Month</Text>
        </TouchableOpacity>
      </View>

      {/* Timer and Semicircles */}
      <View style={styles.timerContainer}>
        <Image
          source={require("../../../assets/semicircle.png")}
          style={styles.semicircleImage}
        />
        {/* <Image
          source={require("./assets/timer.png")}
          style={styles.timerImage}
        /> */}
        {/* <Text style={styles.timeText}>45 Minutes</Text> */}
      </View>
      <View style={styles.hoursContainer}>
        <Text style={styles.workText}>Work Hours</Text>
        <Text style={styles.nonWorkText}>Non- Work Hours</Text>
      </View>


      <View style={styles.dataCards}>
        <View style={styles.card}>
          <Icon name="hourglass-outline" size={24} color="#7a4ff2" />
          <Text style={styles.cardLabel}>Time Target:</Text>
          <Text style={styles.cardValue}>45 Mins</Text>
          <Text style={styles.cardLabel}>Steps Target:</Text>
          <Text style={styles.cardValue}>30000</Text>
        </View>
        <View style={styles.card}>
          <Icon name="checkmark-circle-outline" size={24} color="#7a4ff2" />
          <Text style={styles.cardLabel}>Achieved Time:</Text>
          <Text style={styles.cardValue}>45 Mins</Text>
          <Text style={styles.cardLabel}>Achieved Steps:</Text>
          <Text style={styles.cardValue}>30000</Text>
        </View>
      </View>

      <View style={styles.metricsContainer}>
        <View style={styles.metricBox}>
          <Icon name="flame-outline" size={24} color="#fff" />
          <Text style={styles.metricValue}>370</Text>
          <Text style={styles.metricLabel}>Calories</Text>
        </View>
        <View style={styles.metricBox}>
          <Icon name="walk-outline" size={24} color="#fff" />
          <Text style={styles.metricValue}>1235</Text>
          <Text style={styles.metricLabel}>Steps</Text>
        </View>
        <View style={styles.metricBox}>
          <Icon name="navigate-outline" size={24} color="#fff" />
          <Text style={styles.metricValue}>8.3</Text>
          <Text style={styles.metricLabel}>Km</Text>
        </View>
      </View>

      <View style={styles.bottomNavigation}>
        <Icon name="home-outline" size={24} color="#7a4ff2" />
        <Icon name="person-outline" size={24} color="#aaa" />
        <Icon name="flash-outline" size={24} color="#aaa" />
        <Icon name="settings-outline" size={24} color="#aaa" />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  logo: { width: 100, height: 30, resizeMode: "contain" },
  greetingContainer: { marginBottom: 16 },
  greetingText: { fontSize: 20, fontWeight: "bold" },
  locationText: { color: "gray" },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },
  tabButton: { padding: 10 },
  activeTab: { borderBottomWidth: 2, borderBottomColor: "#7a4ff2" },
  tabText: { color: "#aaa" },
  activeTabText: { color: "#7a4ff2", fontWeight: "bold" },
  timerContainer: { alignItems: "center", marginVertical: 20 },
  semicircleImage: {
    position: "absolute",
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  timerImage: { width: 80, height: 80, resizeMode: "contain" },
  timeText: { fontSize: 32, fontWeight: "bold", marginTop: 10 },
  hoursContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  workText: { color: "#7a4ff2", fontWeight: "bold", fontSize: 16 },
  nonWorkText: { color: "#aaa", fontWeight: "bold", fontSize: 16 },
  dataCards: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  card: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: "#f3f3f3",
    borderRadius: 10,
    alignItems: "center",
  },
  cardLabel: { color: "#7a4ff2", marginVertical: 2 },
  cardValue: { color: "#7a4ff2", fontWeight: "bold" },
  metricsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },
  metricBox: {
    alignItems: "center",
    backgroundColor: "#7a4ff2",
    padding: 16,
    borderRadius: 10,
    width: 80,
  },
  metricValue: { fontSize: 24, fontWeight: "bold", color: "#fff" },
  metricLabel: { color: "#fff" },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
