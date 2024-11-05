// import { Dimensions, SafeAreaView, StyleSheet, Image, Text, View } from "react-native";
// import React from "react";

// const WorkDetailsScreen = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Image
//         source={require("../../assets/Workdetails.png")}
//         style={styles.image}
//         resizeMode="contain"
//       />
//       <Text style={styles.title}>Work Details</Text>
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Work Timings</Text>
//         <View style={styles.timeContainer}>
//           <View style={styles.timeBox}>
//             <Text style={styles.timeLabel}>Starting Time</Text>
//             <Text style={styles.time}>9:00 AM</Text>
//           </View>
//           <View style={styles.timeBox}>
//             <Text style={styles.timeLabel}>Ending Time</Text>
//             <Text style={styles.time}>7:00 PM</Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Work Days</Text>
//         <View style={styles.daysContainer}>
//           {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day, index) => (
//             <View key={index} style={[styles.dayBox, index > 4 && styles.inactiveDay]}>
//               <Text style={styles.dayText}>{day}</Text>
//             </View>
//           ))}
//         </View>
//       </View>

//       <View style={styles.buttonContainer}>
//         <Text style={styles.buttonText}>Continue</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default WorkDetailsScreen;

// const { width, height } = Dimensions.get("window");

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//   },
//   image: {
//     width: width * 0.9,
//     height: height * 0.3,
//     alignSelf: "center",
//     marginTop: height * 0.05,
//   },
//   title: {
//     fontSize: 24,
//     marginTop: 10,
//     textAlign: "center",
//     fontWeight: "bold",
//     color: "#333",
//   },
//   section: {
//     marginHorizontal: 20,
//     marginVertical: 15,
//     backgroundColor: "#EAE8FC",
//     borderRadius: 15,
//     padding: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 10,
//   },
//   timeContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   timeBox: {
//     width: "45%",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//   },
//   timeLabel: {
//     color: "#333",
//     fontSize: 14,
//   },
//   time: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginTop: 5,
//   },
//   daysContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginTop: 10,
//   },
//   dayBox: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#9378FF",
//   },
//   dayText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   inactiveDay: {
//     backgroundColor: "#D3D3D3",
//   },
//   buttonContainer: {
//     backgroundColor: "#9378FF",
//     borderRadius: 30,
//     paddingVertical: 15,
//     alignItems: "center",
//     marginHorizontal: 20,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });
// import React, { useState } from "react";
// import { Dimensions, SafeAreaView, StyleSheet, Image, Text, View, TouchableOpacity, Platform } from "react-native";
// import DateTimePicker from "@react-native-community/datetimepicker";

// const WorkDetailsScreen = ({route,navigation}) => {
//   const { email } = route.params;
//   const [startTime, setStartTime] = useState(new Date());
//   const [endTime, setEndTime] = useState(new Date());
//   const [showStartTimePicker, setShowStartTimePicker] = useState(false);
//   const [showEndTimePicker, setShowEndTimePicker] = useState(false);
//   const [selectedDays, setSelectedDays] = useState([]);

//   const toggleDaySelection = (day) => {
//     if (selectedDays.includes(day)) {
//       setSelectedDays(selectedDays.filter((d) => d !== day));
//     } else {
//       setSelectedDays([...selectedDays, day]);
//     }
//   };

//   const onTimeChange = (event, selectedTime, type) => {
//     if (type === "start") {
//       setShowStartTimePicker(false);
//       if (selectedTime) setStartTime(selectedTime);
//     } else {
//       setShowEndTimePicker(false);
//       if (selectedTime) setEndTime(selectedTime);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Image
//         source={require("../../../assets/Workdetails.png")}
//         style={styles.image}
//         resizeMode="cover"
//       />
//       <Text style={styles.title}>Work Details</Text>
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Work Timings</Text>
//         <View style={styles.timeContainer}>
//           <TouchableOpacity style={styles.timeBox} onPress={() => setShowStartTimePicker(true)}>
//             <Text style={styles.timeLabel}>Starting Time</Text>
//             <Text style={styles.time}>{startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.timeBox} onPress={() => setShowEndTimePicker(true)}>
//             <Text style={styles.timeLabel}>Ending Time</Text>
//             <Text style={styles.time}>{endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
//           </TouchableOpacity>
//         </View>

//         {showStartTimePicker && (
//           <DateTimePicker
//             value={startTime}
//             mode="time"
//             display="default"
//             onChange={(e, selectedTime) => onTimeChange(e, selectedTime, "start")}
//           />
//         )}
//         {showEndTimePicker && (
//           <DateTimePicker
//             value={endTime}
//             mode="time"
//             display="default"
//             onChange={(e, selectedTime) => onTimeChange(e, selectedTime, "end")}
//           />
//         )}
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Work Days</Text>
//         <View style={styles.daysContainer}>
//           {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day, index) => (
//             <TouchableOpacity
//               key={index}
//               style={[
//                 styles.dayBox,
//                 selectedDays.includes(day) ? styles.activeDay : styles.inactiveDay
//               ]}
//               onPress={() => toggleDaySelection(day)}
//             >
//               <Text style={styles.dayText}>{day}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>

//       <TouchableOpacity style={styles.buttonContainer}   onPress={() => navigation.navigate("AllSet")}>
//         <Text style={styles.buttonText}>Continue</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// export default WorkDetailsScreen;

// const { width, height } = Dimensions.get("window");

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//   },
//   image: {
//     width: width ,
//     height: height * 0.3,
//     alignSelf: "center",
//     marginTop: height * 0.05,
//   },
//   title: {
//     fontSize: 24,
//     marginTop: 10,
//     textAlign: "center",
//     fontWeight: "bold",
//     color: "#333",
//   },
//   section: {
//     marginHorizontal: 20,
//     marginVertical: 15,
//     backgroundColor: "#EAE8FC",
//     borderRadius: 15,
//     padding: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 10,
//   },
//   timeContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   timeBox: {
//     width: "45%",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//   },
//   timeLabel: {
//     color: "#333",
//     fontSize: 14,
//   },
//   time: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginTop: 5,
//   },
//   daysContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginTop: 10,
//   },
//   dayBox: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   dayText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   activeDay: {
//     backgroundColor: "#9378FF",
//   },
//   inactiveDay: {
//     backgroundColor: "#D3D3D3",
//   },
//   buttonContainer: {
//     backgroundColor: "#9378FF",
//     borderRadius: 30,
//     paddingVertical: 15,
//     alignItems: "center",
//     marginHorizontal: 20,
//     marginTop: height * 0.13,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });
import React, { useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from "./../../api/api";

const WorkDetailsScreen = ({ route, navigation }) => {
  const { email } = route.params;
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);

  const toggleDaySelection = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const onTimeChange = (event, selectedTime, type) => {
    if (type === "start") {
      setShowStartTimePicker(false);
      if (selectedTime) setStartTime(selectedTime);
    } else {
      setShowEndTimePicker(false);
      if (selectedTime) setEndTime(selectedTime);
    }
  };

  const handleSubmit = async () => {
    const workDetailsData = {
      stepcounter_app_trn_tbl_registration: [
        {
          fld_email: email,
          fld_work_start_time: startTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          fld_work_end_time: endTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          fld_work_in_days: selectedDays.join("$"),
        },
      ],
      synceddatetime: new Date().toISOString().slice(0, 19).replace("T", " "),
      FormCode: "105",
      AppVersion: "1.0.0",
      ApiKey: "kavin",
      AppTypeNo: "3",
    };

    try {
      const response = await api.updateWorkDetails(workDetailsData);
      if (response && response.status === "1") {
        navigation.navigate("AllSet");
      } else {
        console.log("API response:", response.responsemessage);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../../assets/Workdetails.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>Work Details</Text>
      <Text style={styles.subtitle}>Choose your preferred timings and {"\n"} workdays to set your schedule.</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Work Timings</Text>
        <View style={styles.timeContainer}>
          <TouchableOpacity
            style={styles.timeBox}
            onPress={() => setShowStartTimePicker(true)}
          >
            <Text style={styles.timeLabel}>Starting Time</Text>
            <Text style={styles.time}>
              {startTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.timeBox}
            onPress={() => setShowEndTimePicker(true)}
          >
            <Text style={styles.timeLabel}>Ending Time</Text>
            <Text style={styles.time}>
              {endTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
          </TouchableOpacity>
        </View>

        {showStartTimePicker && (
          <DateTimePicker
            value={startTime}
            mode="time"
            display="default"
            onChange={(e, selectedTime) =>
              onTimeChange(e, selectedTime, "start")
            }
          />
        )}
        {showEndTimePicker && (
          <DateTimePicker
            value={endTime}
            mode="time"
            display="default"
            onChange={(e, selectedTime) => onTimeChange(e, selectedTime, "end")}
          />
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Work Days</Text>
        <View style={styles.daysContainer}>
          {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dayBox,
                selectedDays.includes(day)
                  ? styles.activeDay
                  : styles.inactiveDay,
              ]}
              onPress={() => toggleDaySelection(day)}
            >
              <Text style={styles.dayText}>{day}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WorkDetailsScreen;

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: width,
    height: height * 0.3,
    alignSelf: "center",
    marginTop: height * 0.05,
  },
  title: {
    fontSize: 24,
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    marginTop: 10,
    textAlign: "center",
    // fontWeight: "bold",
    color: "##2A2A2A",
    marginBottom: 10,
  },
  section: {
    marginHorizontal: 20,
    marginVertical: 15,
    backgroundColor: "#EAE8FC",
    borderRadius: 15,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeBox: {
    width: "45%",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  timeLabel: {
    color: "#333",
    fontSize: 14,
  },
  time: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },
  daysContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  dayBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  dayText: {
    color: "#fff",
    fontWeight: "bold",
  },
  activeDay: {
    backgroundColor: "#9378FF",
  },
  inactiveDay: {
    backgroundColor: "#D3D3D3",
  },
  buttonContainer: {
    backgroundColor: "#9378FF",
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: height * 0.04,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
