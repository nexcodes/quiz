import BackendManager from "@/components/BackendManager/home";

export async function POST(request) {
  const { token } = await request.json();

  const data = await BackendManager.getUser(token);

  return Response.json(data);
}
