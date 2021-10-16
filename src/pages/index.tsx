import Link from "next/link";

function Home() {
  return (
    <>
      <Link href="calculator">Calculadora</Link>
      <br />
      <Link href="counter">Contador</Link>
      <br />
      <Link href="pokemonList">Pokemons</Link>
    </>
  );
}

export default Home;
