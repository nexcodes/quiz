import styles from "./profile.module.css";
import Profile from "./_components/profile/profile";
import getUser from "@/actions/getUser";
import getCountryList from "@/actions/getCountryList";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  try {
    var user = await getUser(session?.token);
    var countryList = await getCountryList();
  } catch (e) {
    console.log(e);
  }

  return (
    <>
      <main className={styles.main}>
        <Profile user={user || null} countryList={countryList || null} />
      </main>
    </>
  );
}
