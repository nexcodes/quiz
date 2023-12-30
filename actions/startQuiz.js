import axios from "axios";

export default async function startQuiz(token) {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/startQuiz`,
    { token }
  );

  return res.data.data;
}
