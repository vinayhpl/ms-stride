import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faCalendarAlt,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import api from "../../api/api";
import Toast from "react-native-toast-message";

const RegisterScreen = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const toggleConfirmPasswordVisibility = () =>
    setConfirmPasswordVisible(!confirmPasswordVisible);

  const showDatePicker = () => setShow(true);

  const formik = useFormik({
    initialValues: {
      userid: "",
      password: "",
      fld_name: "",
      fld_email: "",
      fld_password: "",
      fld_confirm_password: "",
      fld_height: "",
      fld_weight: "",
      // fld_date_of_registration: new Date().toLocaleDateString("en-GB"),
      fld_gender_id: null,
      fld_gender_name: "",
      // fld_date_of_birth: date.toLocaleDateString(),
      fld_date_of_birth: "",
      fld_work_start_time: "",
      fld_work_end_time: "",
      fld_profile_pic: "",
      fld_is_eligeble_to_login: "",
      fld_otp: "",
    },
    validationSchema: Yup.object({
      fld_name: Yup.string().required("Name is required"),
      fld_email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),
      fld_gender_name: Yup.string().required("Gender is required"),
      fld_password: Yup.string().required("Password is required"),
      fld_confirm_password: Yup.string()
        .oneOf([Yup.ref("fld_password"), null], "Passwords must match")
        .required("Confirm password is required"),
      fld_date_of_birth: Yup.string().required("Date of birth is required"),
      fld_height: Yup.string().required("Height is required"),
      fld_weight: Yup.string().required("Weight is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const registrationData = {
          stepcounter_app_trn_tbl_registration: [
            {
              fld_rf_id: "",
              fld_name: values.fld_name,
              fld_email: values.fld_email,
              fld_password: values.fld_password,
              fld_gender_id: values.fld_gender_id,
              fld_gender_name: values.fld_gender_name,
              fld_contact_number: "",
              fld_date_of_birth: values.fld_date_of_birth,
              fld_height: values.fld_height,
              fld_weight: values.fld_weight,
              fld_work_start_time: "",
              fld_work_end_time: "",
              fld_profile_pic: "",
              fld_is_eligeble_to_login: "",
              fld_otp: "",
            },
          ],
          synceddatetime: new Date()
            .toISOString()
            .replace("T", " ")
            .slice(0, 19),
          FormCode: "105",
          AppVersion: "1.0.0",
          ApiKey: "kavin",
          AppTypeNo: "3",
        };

        const response = await api.registration(
          values.userid,
          values.password,
          registrationData
        );

        if (response && response.status === "1") {
          navigation.navigate("VerifyEmail", { email: values.fld_email });
        } else {
          console.log(
            "Registration error:",
            response.responsemessage || "Unknown error"
          );
          Toast.show({
            type: "error",
            text1: "Registration failed",
            text2: response.responsemessage,
            position: "top",
            visibilityTime: 10000,
          });
        }
      } catch (error) {
        console.error("Error:", error);
        Toast.show({
          type: "error",
          text1: "Registration failed",
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
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled"
    >
      <SafeAreaView style={styles.container}>
        <Toast />
        <Text style={styles.heading}>Registration</Text>
        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[
              styles.genderOption,
              selectedGender === "male" && styles.selectedGender,
            ]}
            onPress={() => {
              setSelectedGender("male");
              formik.setFieldValue("fld_gender_id", 1);
              formik.setFieldValue("fld_gender_name", "male");
            }}
          >
            <Image
              source={require("../../../assets/Male.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderOption,
              selectedGender === "female" && styles.selectedGender,
            ]}
            onPress={() => {
              setSelectedGender("female");
              formik.setFieldValue("fld_gender_id", 2);
              formik.setFieldValue("fld_gender_name", "female");
            }}
          >
            <Image
              source={require("../../../assets/Female.png")}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
        {formik.touched.fld_gender_name && formik.errors.fld_gender_name && (
          <Text style={styles.errorText}>{formik.errors.fld_gender_name}</Text>
        )}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <FontAwesomeIcon icon={faUser} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={formik.values.fld_name}
              onChangeText={formik.handleChange("fld_name")}
              onBlur={formik.handleBlur("fld_name")}
            />
          </View>
          {formik.touched.fld_name && formik.errors.fld_name && (
            <Text style={styles.errorText}>{formik.errors.fld_name}</Text>
          )}
          <View style={styles.inputWrapper}>
            <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              value={formik.values.fld_email}
              onChangeText={formik.handleChange("fld_email")}
              onBlur={formik.handleBlur("fld_email")}
            />
          </View>
          {formik.touched.fld_email && formik.errors.fld_email && (
            <Text style={styles.errorText}>{formik.errors.fld_email}</Text>
          )}
          <View style={styles.inputWrapper}>
            <FontAwesomeIcon icon={faLock} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={!passwordVisible}
              value={formik.values.fld_password}
              onChangeText={formik.handleChange("fld_password")}
              onBlur={formik.handleBlur("fld_password")}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <FontAwesomeIcon
                icon={passwordVisible ? faEyeSlash : faEye}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          {formik.touched.fld_password && formik.errors.fld_password && (
            <Text style={styles.errorText}>{formik.errors.fld_password}</Text>
          )}
          <View style={styles.inputWrapper}>
            <FontAwesomeIcon icon={faLock} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry={!confirmPasswordVisible}
              value={formik.values.fld_confirm_password}
              onChangeText={formik.handleChange("fld_confirm_password")}
              onBlur={formik.handleBlur("fld_confirm_password")}
            />
            <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
              <FontAwesomeIcon
                icon={confirmPasswordVisible ? faEyeSlash : faEye}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          {formik.touched.fld_confirm_password &&
            formik.errors.fld_confirm_password && (
              <Text style={styles.errorText}>
                {formik.errors.fld_confirm_password}
              </Text>
            )}
          <View style={styles.inputWrapper}>
            <FontAwesomeIcon icon={faCalendarAlt} style={styles.icon} />
            <TextInput
              style={styles.input}
              onFocus={() => {
                showDatePicker();
              }}
              placeholder="Date of Birth (DD/MM/YYYY)"
              value={formik.values.fld_date_of_birth}
              onBlur={formik.handleBlur("fld_date_of_birth")}
            />
          </View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                const currentDate = selectedDate || date;
                setDate(currentDate);
                formik.setFieldValue(
                  "fld_date_of_birth",
                  currentDate.toLocaleDateString()
                );
                setShow(false);
              }}
            />
          )}
          {formik.touched.fld_date_of_birth &&
            formik.errors.fld_date_of_birth && (
              <Text style={styles.errorText}>
                {formik.errors.fld_date_of_birth}
              </Text>
            )}
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Height"
              value={formik.values.fld_height}
              onChangeText={formik.handleChange("fld_height")}
              onBlur={formik.handleBlur("fld_height")}
            />
            <Text style={styles.unitText}>feet/cm</Text>
          </View>
          {formik.touched.fld_height && formik.errors.fld_height && (
            <Text style={styles.errorText}>{formik.errors.fld_height}</Text>
          )}
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Weight"
              value={formik.values.fld_weight}
              onChangeText={formik.handleChange("fld_weight")}
              onBlur={formik.handleBlur("fld_weight")}
            />
            <Text style={styles.unitText}>kg</Text>
          </View>
          {formik.touched.fld_weight && formik.errors.fld_weight && (
            <Text style={styles.errorText}>{formik.errors.fld_weight}</Text>
          )}
        </View>

        <View>
          <TouchableOpacity
            style={styles.saveButton}
            // onPress={() => navigation.navigate("VerifyEmail")}
            onPress={formik.handleSubmit}
          >
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
        {loading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color="#6A4FC7" />
          </View>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  heading: {
    textAlign: "center",
    fontSize: 24,
    marginVertical: 20,
    marginTop: height * 0.07,
    marginBottom: 0,
    fontWeight: "bold",
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  genderOption: {
    alignItems: "center",
    width: "48%",
    paddingVertical: 20,
  },
  image: {
    width: "100%",
    height: height * 0.15,
    resizeMode: "contain",
  },
  inputContainer: {
    marginBottom: height * 0.03,
  },
  selectedGender: {
    backgroundColor: "#ADD8E6",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 15,
    // elevation: 2,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
    color: "#A9A9A9",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    // marginTop: 5,
  },
  unitText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#A9A9A9",
  },
  saveButton: {
    backgroundColor: "#6A4FC7",
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#FFF",
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

export default RegisterScreen;
