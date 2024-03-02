// "use server";
import { redirect } from "next/navigation";
import { revalidatePath, revalidateTag } from "next/cache";

const url = process.env.NEXT_PUBLIC_API_URL;

export async function getHome() {
  const response = await fetch(
    `${url}/home?populate[0]=hero_section.gambar_hero.media&populate[1]=list_logos.logo_client.media&populate[2]=produk_section&populate[3]=list_produks.gambar_produk.media&populate[4]=keunggulan_section.mockup_produk.media&populate[5]=keunggulan_section.list_fiturs&populate[6]=bisnis_section&populate[7]=list_bidangs.icon_bisnis.media`,
    {
      next: { revalidate: 0 },
    }
  );
  if (response.ok) {
    const home = await response.json();
    return home;
  } else {
    // revalidatePath("/");
    redirect("/not-found");
  }
}
