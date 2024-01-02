import BackendManager from "@/components/BackendManager/home";

export async function POST(request) {
  const { token } = await request.json();
  const data = await BackendManager.Logout(token);

  return Response.json(data);
}
