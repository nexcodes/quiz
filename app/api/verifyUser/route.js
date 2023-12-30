import BackendManager from "@/components/BackendManager/quiz";

export async function POST(request) {
  const { token } = await request.json();

  const data = await BackendManager.verifyUser(token);

  return Response.json(data);
}
