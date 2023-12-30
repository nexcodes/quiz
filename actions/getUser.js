import axios from "axios";

export default async function getUser(token) {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/getUser`,
    {
      token,
    }
  );
  return res.data.data.userInfo;
}
