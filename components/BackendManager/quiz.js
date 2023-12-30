import ApiCal from "./ApiCall";

const BackendManager = {};
BackendManager.verifyUser = async (token) => {
  let res = await ApiCal.post("/UserPlayerQuiz/verify", {
    token,
    version: 2,
  });

  return res;
};

BackendManager.StartQuiz = async (token) => {
  let res = await ApiCal.post("/UserPlayerQuiz/Start", { token, version: 2 });
  return res;
};

BackendManager.quizInteraction = async (token, data) => {
  try {
    let res = await ApiCal.post(
      "/UserPlayerQuiz/setAnswer",
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
