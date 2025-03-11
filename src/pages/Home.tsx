import { Link } from "react-router";
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Bem-vindo ao nosso site!</p>
      <h2>Contato</h2>
      <p>Email: contato@site.com</p>
      <p>Telefone: (11) 9999-9999</p>
      Login
      <button type="button">
        <Link to="./Login">Fazer Login</Link>
      </button>
      <Link to="/Login/10">Ir para Login</Link>
    </div>
  );
};

export default Home;
