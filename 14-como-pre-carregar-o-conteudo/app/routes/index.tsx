import type { LoaderArgs } from "@remix-run/node";
import { Layout } from "~/Layouts/Layout";
import { isAuthenticated } from "~/session.server";

export async function loader({ request }: LoaderArgs) {
  await isAuthenticated(request);

  return null;
}

export default function () {
  return (
    <Layout>
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum beatae
          similique exercitationem quam, rerum natus nemo at veritatis
          dignissimos pariatur facilis repudiandae harum sed rem est adipisci
          ipsum recusandae corporis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nobis
          enim facere officia harum assumenda quaerat quod voluptatibus non
          eligendi. Aliquid natus consequuntur rem harum. Alias non iste quae
          autem?
        </p>
      </div>
    </Layout>
  );
}
