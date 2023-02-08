export function loader() {
  console.log(ENV.DB_CONNECTION_STRING);
  console.log(ENV.TIMEOUT);

  return null;
}

export default function () {
  return <h1>{ENV.TIMEOUT}</h1>;
}
