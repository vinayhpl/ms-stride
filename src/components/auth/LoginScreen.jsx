// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   SafeAreaView,
// } from "react-native";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesome } from "@expo/vector-icons";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import api from "../../api/api";

// const LoginScreen = ({ navigation }) => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
//   const [loading, setLoading] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       userid: "",
//       password: "",
//       rememberMe: false,
//     },
//     validationSchema: Yup.object({
//       userid: Yup.string().required("email is required"),
//       password: Yup.string().required("Password is required"),
//     }),
//     onSubmit: async (values) => {
//       try {
//         setLoading(true);
//         const additionalData = {
//           synceddatetime: "2023-01-24 11:57:34",
//           FormCode: "201",
//           ApiKey: "kavin",
//           AppTypeNo: "3",
//           AppVersion: "1.0.0",
//           DbVersion: "10.4.1",
//           DbSource: "W",
//         };
//         const response = await api.login(
//           values.userid,
//           values.password,
//           additionalData
//         );
//         // console.log("res", response);
//         if (response && response.status === "1") {
//           navigation.navigate("HomeScreen");
//         } else {
//           console.log("api res", response.responsemessage);
//           const errorMessage = response
//             ? response.responsemessage || "Invalid username or password"
//             : "Unexpected API response format";
//           toast.current.show({
//             severity: "error",
//             summary: "Login Failed",
//             detail: errorMessage,
//           });
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         toast.current.show({
//           severity: "error",
//           summary: "Login Failed",
//           detail: "An unexpected error occurred. Please try again.",
//         });
//       } finally {
//         setLoading(false);
//       }
//     },
//   });
//   return (
//     <SafeAreaView style={styles.container}>
//       <Image
//         source={require("../../../assets/logo.png")}
//         style={styles.logo}
//         resizeMode="contain"
//       />

//       <Text style={styles.title}>Login</Text>
//       <Text style={styles.subtitle}>Login to continue using the app</Text>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Your Email</Text>
//         <View style={styles.inputWrapper}>
//           <FontAwesome
//             name="envelope"
//             size={24}
//             color="#ccc"
//             style={styles.icon}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Enter your email"
//             placeholderTextColor="#ccc"
//             value={formik.values.userid}
//             onChangeText={formik.handleChange("userid")}
//           />
//         </View>
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Password</Text>
//         <View style={styles.inputWrapper}>
//           <FontAwesome name="lock" size={24} color="#ccc" style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Enter Password"
//             placeholderTextColor="#ccc"
//             secureTextEntry={!passwordVisible}
//             value={formik.values.password}
//             onChangeText={formik.handleChange("password")}
//           />
//           <TouchableOpacity onPress={togglePasswordVisibility}>
//             <FontAwesomeIcon
//               icon={passwordVisible ? faEyeSlash : faEye}
//               // style={styles.icon}
//             />
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity style={styles.forgotPassword}>
//           <Text style={styles.forgotPasswordText}>Forget Password</Text>
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity
//         style={styles.loginButton}
//         onPress={formik.handleSubmit}
//       >
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.registerButton}
//         onPress={() => navigation.navigate("Register")}
//       >
//         <Text style={styles.registerButtonText}>Register</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     paddingHorizontal: 20,
//   },
//   icon: {
//     marginRight: 10,
//     color: "#A9A9A9",
//   },
//   logo: {
//     width: 150,
//     height: 150,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: "#888",
//     marginBottom: 30,
//   },
//   inputContainer: {
//     width: "100%",
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     color: "#888",
//     marginBottom: 5,
//   },
//   inputWrapper: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#f0f0f0",
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     height: 50,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//     color: "#333",
//   },
//   forgotPassword: {
//     alignSelf: "flex-end",
//     marginTop: 5,
//   },
//   forgotPasswordText: {
//     color: "#888",
//     fontSize: 14,
//   },
//   loginButton: {
//     backgroundColor: "#7b61ff",
//     width: "100%",
//     padding: 15,
//     borderRadius: 30,
//     alignItems: "center",
//     marginTop: 20,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   registerButton: {
//     marginTop: 20,
//     borderWidth: 1,
//     borderColor: "#7b61ff",
//     width: "100%",
//     padding: 15,
//     borderRadius: 30,
//     alignItems: "center",
//   },
//   registerButtonText: {
//     color: "#7b61ff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from "../../api/api";
import Toast from "react-native-toast-message";

const LoginScreen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      userid: "",
      password: "",
    },
    validationSchema: Yup.object({
      userid: Yup.string().required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const loginData = {
          synceddatetime: new Date()
            .toISOString()
            .slice(0, 19)
            .replace("T", " "),
          FormCode: "201",
          ApiKey: "kavin",
          AppTypeNo: "3",
          AppVersion: "1.0.0",
          DbVersion: "10.4.1",
          DbSource: "W",
        };
        const response = await api.login(
          values.userid,
          values.password,
          loginData
        );
        if (response && response.status === "1") {
          navigation.navigate("HomeScreen");
        } else {
          console.log("API response:", response.responsemessage);
          Toast.show({
            type: "error",
            text1: "Login failed",
            text2: response.responsemessage,
            position: "top",
            visibilityTime: 10000,
          });
        }
      } catch (error) {
        console.error("Error:", error);
        Toast.show({
          type: "error",
          text1: "Login failed",
          text2: error.message,
          position: "top",
          visibilityTime: 10000,
        });
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Toast />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <SafeAreaView style={styles.innerContainer}>
          <Image
            source={require("../../../assets/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>Login to continue using the app</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Your Email</Text>
            <View style={styles.inputWrapper}>
              <FontAwesome
                name="envelope"
                size={24}
                color="#ccc"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#ccc"
                value={formik.values.userid}
                onChangeText={formik.handleChange("userid")}
              />
            </View>
            {formik.errors.userid && formik.touched.userid && (
              <Text style={styles.errorText}>{formik.errors.userid}</Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputWrapper}>
              <FontAwesome
                name="lock"
                size={24}
                color="#ccc"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter Password"
                placeholderTextColor="#ccc"
                secureTextEntry={!passwordVisible}
                value={formik.values.password}
                onChangeText={formik.handleChange("password")}
              />
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
              </TouchableOpacity>
            </View>
            {formik.errors.password && formik.touched.password && (
              <Text style={styles.errorText}>{formik.errors.password}</Text>
            )}
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forget Password</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={formik.handleSubmit}
            disabled={loading}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </SafeAreaView>
        {loading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color="#6A4FC7" />
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: height * 0.15,
  },
  icon: {
    marginRight: 10,
    color: "#A9A9A9",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#888",
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#888",
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginTop: 5,
  },
  forgotPasswordText: {
    color: "#888",
    fontSize: 14,
  },
  errorText:{
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  loginButton: {
    backgroundColor: "#7B61FF",
    width: "100%",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerButton: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#7B61FF",
    width: "100%",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  registerButtonText: {
    color: "#7B61FF",
    fontSize: 18,
    fontWeight: "bold",
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
});
