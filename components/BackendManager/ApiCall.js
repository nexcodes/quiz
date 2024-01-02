import axios from "axios";

//globe variable
const url = process.env.endPoint;
const ApiCal = {};

ApiCal.post = async (endPoint, header = {}, data) => {
  const res = await axios({
    method: "post",
    url: url + endPoint,
    headers: {
      lang: "en",
      device_info: "web",
      Authorization: header?.token ? "Bearer " + header?.token : "",
      "api-version": header?.version || 2,
    },
    data: data,
  });
  return res.data;
};

ApiCal.get = async (endPoint, header = {}, systemType, country, currency) => {
  const res = await axios({
    method: "GET",
    url: url + endPoint,
    headers: {
      lang: "en",
      device_info: "web",
      Authorization: header?.token ? "Bearer " + header?.token : "",
      limit: 100000000,
      "api-version": header?.version || 1,
    },
  });
  return res.data;
};

export default ApiCal;
