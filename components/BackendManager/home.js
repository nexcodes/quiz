import ApiCal from "./ApiCall";

const BackendManager = {};
BackendManager.sendContactRequest = async (data) => {
  let res = await ApiCal.post("/contactRequest/Add", {}, data);

  return res;
};

BackendManager.Logout = async (token) => {
  let res = await ApiCal.post("/UserPlayer/Logout", { token: token }, {});

  return res;
};
BackendManager.DeactivateUser = async (token) => {
  let res = await ApiCal.post("/UserPlayer/Deactivate", { token: token }, {});

  return res;
};

BackendManager.getUser = async (token) => {
  let res = await ApiCal.get("/UserPlayer/GetProfile", { token }, {});

  return res;
};

BackendManager.getCountryList = async () => {
  let res = await ApiCal.get("/country/list", {}, {});

  return res;
};

BackendManager.updateUser = async (token, data) => {
  try {
    let res = await ApiCal.post(
      "/UserPlayer/EditProfile/UserInfo",
      {
        token,
        version: 1,
      },
      data
    );

    return res;
  } catch (e) {
    console.log(e);
  }
};

export default BackendManager;
