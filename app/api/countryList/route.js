import BackendManager from "@/components/BackendManager/home";

export async function GET() {
  const data = await BackendManager.getCountryList();
  return Response.json(data);
}
