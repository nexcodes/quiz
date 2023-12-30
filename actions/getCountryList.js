import axios from "axios";

export default async function getCountryList() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/countryList`
  );
  return res.data.data;
}
