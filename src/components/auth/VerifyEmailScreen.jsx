import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import OTPTextInput from "react-native-otp-textinput";
import { Button } from "react-native-paper";
import api from "../../api/api";
import Toast from "react-native-toast-message";
const VerifyEmailScreen = ({ route, navigation }) => {
  const { email } = route.params;
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleVerifyOTP = async () => {
    setLoading(true);
    try {
      const verificationData = {
        stepcounter_app_trn_tbl_registration: [
          {
            fld_email: email,
            fld_otp: otp,
          },
        ],
        synceddatetime: new Date().toISOString().replace("T", " ").slice(0, 19),
        FormCode: "105",
        AppVersion: "1.0.0",
        ApiKey: "kavin",
        AppTypeNo: "3",
      };
      const response = await api.verifyEmail(verificationData);

      if (response && response.status === "1") {
        navigation.navigate("WorkDetails",{ email});
      } else {
        setErrorMessage(response.responsemessage || "OTP Verification failed. Please try again.");
        Toast.show({
          type: 'error',
          text1: 'OTP Verification failed',
          text2:response.responsemessage,
          position: 'top',
          visibilityTime: 10000,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Toast.show({
        type: 'error',
        text1: 'OTP Verification failed',
        text2: error.message,
        position: 'top',
        visibilityTime: 10000,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Toast/>
      <Image
        source={require("../../../assets/email.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.emailTitle}>Verify Email</Text>
        <Text style={styles.emailMessage}>
          We will send you a one-time {"\n"} password passcode via this{"\n"}{" "}
          mail@mail.com email address.
        </Text>
      </View>
      <View>
        <OTPTextInput
          tintColor="#2A2A2A"
          inputCount={6}
          textInputStyle={styles.otpInput}
          handleTextChange={setOtp}
        />
      </View>
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <View style={styles.resendContainer}>
        <Text style={styles.didNotReceiveText}>Didn’t receive a code?</Text>
        <Text style={styles.resendText}>Resend code</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.buttonVerify}
          onPress={handleVerifyOTP}
          // onPress={() => navigation.navigate("WorkDetails")}
          disabled={loading}
        >
          {loading ? (
            <Text style={styles.buttonText}>Verifying...</Text>
          ) : (
            <Text style={styles.buttonText}>Verify Email</Text>
          )}
        </Button>
        {/* {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#6A4FC7" />
        </View>
      )} */}
      </View>
    </SafeAreaView>
  );
};

export default VerifyEmailScreen;

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  image: {
    width: width * 0.8,
    height: height * 0.4,
    // marginTop: -height * 0.1,
    marginBottom: 10,
  },
  textContainer: {
    alignItems: "center",
  },
  emailTitle: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  emailMessage: {
    textAlign: "center",
    fontSize: 16,
  },
  otpInput: {
    marginTop: 20,
  },
  errorMessage: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
  },
  resendContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  didNotReceiveText: {
    color: "#2A2A2A",
    fontSize: 16,
  },
  resendText: {
    color: "#7265E2",
    fontWeight: "bold",
    fontSize: 16,
    paddingLeft:10
  },
  buttonContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: height * 0.18,
  },
  buttonVerify: {
    backgroundColor: "#7265E2",
    paddingVertical: 15,
    paddingHorizontal: 90,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    // width:'85%'
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
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
