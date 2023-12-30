import BackendManager from "@/components/BackendManager/quiz";

export async function POST(request) {
  const { token, ...body } = await request.json();

  const data = await BackendManager.quizInteraction(token, body);

  return Response.json(data);
}
