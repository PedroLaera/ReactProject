import { useParams } from "react-router";
import { useNavigate } from "react-router";
const Login = () => {
  const navigation = useNavigate();
  const { id } = useParams();

  return (
    <div>
      <h1>Login</h1>
      <p>Faça login para acessar o site.</p>
      <form>
        <input type="button" value="Entrar" />
        <input type="button" value="Esqueci minha senha" />
        <input type="button" value="Cadastrar-se" />
      </form>
      <br />
      <button onClick={() => navigation("/")}>Ir para Home</button>
      Login - ID: {id}
    </div>
  );
};

export default Login;
