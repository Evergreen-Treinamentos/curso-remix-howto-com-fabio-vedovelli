export default function Button() {
  console.log("=======================================");
  console.log("Button component");
  console.log("=======================================");

  return (
    <button className="bg-slate-500 text-white rounded-full px-4 py2">
      Este botão deve ser montado apenas no browser
    </button>
  );
}
