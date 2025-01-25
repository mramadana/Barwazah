import { defineStore } from "pinia";

// Axios
const axios = useApi();

// success response
const { response } = responseApi();

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: {
      phone: "",
      country_code: "",
      accountType: null
    },
    token: null,
    isLoggedIn: false,
    newPhone: null,
    notificationToken: null,
    test: 'test key',
    currentemail: null,
    currentPasword: null,
    hasTwoAccount: null,
    newemail: null
  }),
  actions: {
    // Sign In
    async signInHandler(resData) {
      if (resData.statusCode === 200 && resData.key === "success") {
        // Store user data
        this.user = resData.data;
        this.token = resData.data.token;
        this.isLoggedIn = true;

        // Update axios token
        const axios = useApi();
        axios.defaults.headers.Authorization = `Bearer ${this.token}`;

        return { status: "success", msg: resData.message };
      } else {
        return { status: "error", msg: resData.message };
      }
    },

    // Sign Up
    async signUpHandler(formData) {
      const resData = await axios.post("sign-up", formData);
      if (response(resData) == "success") {
        this.user = resData.data.data;
        navigateTo("/Auth/activateAccount");
        return { status: "success", msg: resData.data.msg };
      } else {
        return { status: "error", msg: resData.data.msg };
      }
    },

    // Verification Code
    async verificationHandler(formData) {
      const resData = await axios.post("activate?_method=patch", formData);
      if (response(resData) == "success") {
        this.token = resData.data.data.token;
        this.isLoggedIn = true;
        navigateTo("/");
        return { status: "success", msg: resData.data.msg };
      } else {
        return { status: "error", msg: resData.data.msg };
      }
    },

    // update Profile
    async profileHandler(formData) {
      const config = {
        headers: { Authorization: `Bearer ${this.token}` },
      };

      const resData = await axios.post(
        "update-profile",
        formData,
        config
      );
      if (response(resData) == "success") {
        this.user = resData.data.data;
        return { status: "success", msg: resData.data.msg };
        
      } else {
        return { status: "error", msg: resData.data.msg };
      }
    },

    // New Phone
    async phoneHandler(formData, newPhone) {
      const config = {
        headers: { Authorization: `Bearer ${this.token}` },
      };

      const resData = await axios.post(
        "change-phone-send-code",
        formData,
        config
      );
      if (response(resData) == "success") {
        this.newPhone = newPhone;
        navigateTo("/mobileActivateCode");
        return { status: "success", msg: resData.data.msg };
      } else {
        return { status: "error", msg: resData.data.msg };
      }
    },

    // Logout
    async logoutHandler() {
      const config = {
        headers: { Authorization: `Bearer ${this.token}` },
      };

      try {
        const { data: resData } = await axios.post("Logout", {}, config);
        if (resData.key === "success") {
          this.token = null;
          this.user = {
            phone: "",
            country_code: "",
          };
          this.isLoggedIn = false;
          navigateTo("/Auth/login");
          return { status: "success", msg: resData.message };
        } else {
          return { status: "error", msg: resData.message };
        }
      } catch (error) {
        return { status: "error", msg: error.response?.data?.message || "An error occurred" };
      }
    },

    // delete account
    async deleteAccountHandler() {
      const config = {
        headers: { Authorization: `Bearer ${this.token}` },
      };

      const resData = await axios.post("delete-account", '' ,config);
      if (
        response(resData) == "success" ||
        response(resData) == "blocked" ||
        response(resData) == "unauthenticated"
      ) {
        this.token = null;
        this.user = {
          phone: "",
          country_code: "",
          image: null,
          email: null,
          name: null
        };
        this.isLoggedIn = false;
        return { status: "success", msg: resData.data.msg };
      } else {
        return { status: "error", msg: resData.data.msg };
      }
    },

    // chnage mail
    async changeMailHandler(formData, currentemail, currentPasword) {
      const config = {
        headers: { Authorization: `Bearer ${this.token}` },
      };

      const resData = await axios.post(
        "change-email-send-code",
        formData,
        config
      );
      if (response(resData) == "success") {
        this.currentemail = currentemail;
        this.currentPasword = currentPasword;
        navigateTo('/emailActivateCode');
        return { status: "success", msg: resData.data.msg };
      } else {
        return { status: "error", msg: resData.data.msg };
      }
    }
  },
  persist: {
    storage: persistedState.cookiesWithOptions({
      sameSite: "strict",
    }),
  },
});
