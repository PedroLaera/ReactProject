import React from "react";
import Buton from "../buton/index";

class Form extends React.Component {
  render() {
    return (
      <form>
        /*________________________________________________________________*/
        <div>
          <label htmlFor="terefa">Adicione um novo estudo:</label>
          <input
            type="terefa"
            id="terefa"
            name="terefa"
            placeholder="o que deseja estudar"
            required
          />
        </div>
        /*________________________________________________________________*/
        <div>
          <label htmlFor="time">Adicione um novo tempo:</label>
          <input
            type="time"
            id="time"
            name="time"
            step={"1"}
            min={"00:00:00"}
            max={"01:30:00"}
            required
          />
        </div>
        /*________________________________________________________________*/
        <Buton />
      </form>
    );
  }
}

export default Form;
