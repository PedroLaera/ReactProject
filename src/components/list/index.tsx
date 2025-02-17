import React from "react";

function Lista() {
  const terefas = [
    {
      terefa: "React",
      time: "01:00:00",
    },
    {
      terefa: "Estudar TypeScript",
      time: "01:30:00",
    },
    {
      terefa: "Estudar Typescript",
      time: "01:45:00",
    },
  ];
  return (
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {terefas.map((item, index) => (
          <li key={index}>
            <h3>{item.terefa}</h3>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
