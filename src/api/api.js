import axios from "axios";

const BASE_URL = "http://10.60.62.186:8000";

const api = {
  registration: async (userid, password, registrationData) => {
    try {
      const payload = {
        userid,
        password,
        ...registrationData,
      };
      const response = await axios.post(`${BASE_URL}/register`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      console.error("Registration error:", error.message);
      throw error;
    }
  },
  verifyEmail: async (verificationData) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/verify_otp`,
        verificationData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Verification error:", error.message);
      throw error;
    }
  },
  updateWorkDetails: async (workDetailsData) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/update_work_status`,
        workDetailsData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error saving work details:", error.message);
      throw error;
    }
  },
  login: async (userid, password, loginData) => {
    try {
      const payload = {
        userid,
        password,
        ...loginData,
      };
      const response = await axios.post(`${BASE_URL}/login`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      console.error("Login error:", error.message);
      throw error;
    }
  },
  stepCounter: async (stepCountData) => {
    try {
      const response = await axios.post(`${BASE_URL}/step_counter`, stepCountData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      console.error("Step counter data saving error:", error.message);
      throw error;
    }
  },
};

export default api;
