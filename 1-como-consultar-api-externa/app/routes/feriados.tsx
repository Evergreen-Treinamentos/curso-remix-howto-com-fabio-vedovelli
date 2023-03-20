import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

type Feriado = {
  name: string;
  date: string;
  type: string;
};

export async function loader() {
  const feriados: Feriado[] = await fetch(
    "https://brasilapi.com.br/api/feriados/v1/2023"
  ).then((res) => res.json());

  return json(feriados);
}

export default function () {
  const feriados = useLoaderData<typeof loader>();

  return (
    <>
      <h1>Feriados Nacionais ano 2023</h1>
      <ul>
        {feriados.map((feriado) => (
          <li key={feriado.name}>{feriado.name}</li>
        ))}
      </ul>
    </>
  );
}
