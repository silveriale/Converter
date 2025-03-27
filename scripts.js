//Cotações do dia 27/03/2025
const USD = 5.76;
const EUR = 6.21;
const GBP = 7.43;

// Obtendo os elementos do formulário.
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const foooter = document.querySelector("main footer");

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
  // O Replace vai pegar a expressão definida e vai procurar dentro do texto o padrão, o padrão verifica caracteres do tipo texto, e substitui por um valor vazio.
  // Ele vai atualizar o conteúdo do input usando esse novo conteúdo que não tem letra.
});

//  Captando o evento de submit (enviar) do formulário.
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

//  Criando a função para converter a moeda.
function convertCurrency(amount, price, symbol) {
  try {
    //Aplica a classe que exibe o footer para mostrar o resultado.
    foooter.classList.add("show-result");
  } catch (error) {
    //Remove a classe do footer removendo ele da tela.
    foooter.classList.remove("show-result");

    console.error(error);
    alert("Não foi possível converter. Tente novamente mais tarde.");
  }
}
