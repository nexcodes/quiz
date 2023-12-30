import styles from "./profile.module.css";
import Profile from "./_components/profile/profile";
import getUser from "@/actions/getUser";
import getCountryList from "@/actions/getCountryList";
import { Spinner } from "@/components/spinner";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  const user = await getUser(session.token);
  const countryList = await getCountryList();

  if (!user || !countryList) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spinner size={40} />
      </div>
    );
  }

  return (
    <>
      <main className={styles.main}>
        <Profile user={user} countryList={countryList} />
      </main>
    </>
  );
}
