import { cookies } from "next/headers";
import { Layout } from "react-resizable-panels";

export async function useLayout(id: string) {
  const cookieStore = await cookies();
  const layoutCookie = cookieStore.get(id);

  const Layout: Layout = layoutCookie
    ? JSON.parse(layoutCookie.value)
    : undefined;

  return Layout;
}
