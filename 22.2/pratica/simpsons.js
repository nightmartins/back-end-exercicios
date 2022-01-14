const fs = require("fs").promises;

fs.readFile("./simpsons.json", "utf-8")
  .then((fileContent) => {
    return JSON.parse(fileContent);
  })
  .then((simpsons) => {
    return simpsons.map(({ id, name }) => `${id} - ${name}`);
  })
  .then((strings) => {
    strings.forEach((string) => console.log(string));
  });

async function getSimpsonById(id) {
  const simpsons = await fs
    .readFile("./simpsons.json", "utf-8")
    .then((fileContent) => JSON.parse(fileContent));

  const chosenSimpson = simpsons.find((simpson) => simpson.id === id);

  if (!chosenSimpson) {
    /* A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.
     * Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
     * tendo como motivo o que passarmos para o `throw`.
     * Ou seja, a linha abaixo rejeita a Promise da nossa função com o motivo 'id não encontrado'
     */
    throw new Error("id não encontrado");
  }

  /* Da mesma forma que `throw` aciona o fluxo de erro e rejeita a Promise,
   * `return` aciona o fluxo de sucesso e resolve a Promise.
   * Sendo assim, a linha abaixo é equivalente a chamar `resolve(chosenSimpson)`
   * dentro do executor de uma Promise.
   */
  return chosenSimpson;
}

async function filterSimpsons() {
  const simpsons = await fs
    .readFile("./simpsons.json", "utf-8")
    .then((fileContent) => JSON.parse(fileContent));

  const newArray = simpsons.filter(
    (simpson) => simpson.id !== "10" && simpson.id !== "6"
  );

  await fs.writeFile("./simpsons.json", JSON.stringify(newArray));
}

async function createSimpsonsFamily() {
  const simpsons = await fs
    .readFile("./simpsons.json", "utf-8")
    .then((fileContent) => JSON.parse(fileContent));

  const simpsonsFamily = simpsons.filter((simpson) =>
    [1, 2, 3, 4].includes(simpson.id)
  );

  await fs.writeFile("./simpsonsFamily.json", JSON.stringify(simpsonsFamily));
}

async function addNelsonToFamily() {
  const simpsonsFamily = await fs
    .readFile("./simpsonsFamily.json", "utf-8")
    .then((fileContent) => JSON.parse(fileContent));

  simpsonsFamily.push({ id: "8", name: "Nelson Muntz" });

  await fs.writeFile("./simpsonsFamily.json", simpsonsFamily);
}

function replaceNelson() {
  // Realizamos a leitura do arquivo
  return (
    fs
      .readFile("./simpsonsFamily.json", "utf-8")
      // Interpretamos o conteúdo como JSON
      .then((fileContent) => JSON.parse(fileContent))
      // Filtramos o array para remover o personagem Nelson
      .then((simpsons) => simpsons.filter((simpson) => simpson.id !== "8"))
      // Criamos um novo Array contendo a personagem Maggie
      .then((simpsonsWithoutNelson) =>
        simpsonsWithoutNelson.concat([{ id: "8", name: "Maggie Simpson" }])
      )
      // Escrevemos o novo array no arquivo
      .then((simpsonsWithMaggie) =>
        fs.writeFile(
          "./simpsonsFamily.json",
          JSON.stringify(simpsonsWithMaggie)
        )
      )
  );
}
