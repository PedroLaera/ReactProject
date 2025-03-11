import { useState } from "react";

const Contador = () => {
  const [valorContador, setValorContador] = useState(0);

  const contaMais1 = () => {
    setValorContador(valorContador + 1);
  };

  const contaMenos1 = () => {
    setValorContador(valorContador - 1);
  };

  const exibirMensagem = () => {
    if (valorContador > 0) {
      return "O valor " + valorContador + " é positivo";
    } else if (valorContador < 0) {
      return "O valor " + valorContador + " é negativo";
    }
  };

  return (
    <div>
      <button onClick={contaMais1}>+1 troca</button>
      <h1>Quantidade de trocas: {valorContador}</h1>
      <button onClick={contaMenos1}>-1 troca</button>
      <h2>{exibirMensagem()}</h2>
    </div>
  );
};
export default Contador;
