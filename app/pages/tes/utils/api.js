// "use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function getData() {
  const response = await fetch(`http://localhost:1337/api/home?populate=list_produks`, {
    next: { revalidate: 0 },
  });
  if (response.ok) {
    const posts = await response.json();
    return posts;
  } else {
    revalidatePath("/pages/tes");
    redirect("/not-found");
  }
}
