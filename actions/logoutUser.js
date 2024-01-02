import axios from "axios";

export default async function logoutUser(token) {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/logout`,
    {
      token,
    }
  );
  return res.data;
}
