import BackendManager from "@/components/BackendManager/home";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export async function POST() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return Response.json({ error: "unauthorized" });
  }

  try {
    const data = await BackendManager.DeactivateUser(session.token);
    return Response.json(data);
  } catch (e) {
    console.log(e);
  }
}
