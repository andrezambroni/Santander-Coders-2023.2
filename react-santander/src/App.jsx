import MeuComponente from "./components/MeuComponente";

function App() {
  return (
    <div className="App">
      <h1>Ola mundo</h1>
      <MeuComponente></MeuComponente>
      <MeuBotao conteudo='me clique'></MeuBotao>
      <MeuBotao conteudo='depois aqui'></MeuBotao>
      <MeuBotao conteudo='por fim aqui'></MeuBotao>
    </div>
  );
}

function MeuBotao(props){

  console.log()
  return(
    <button>{props.conteudo}</button>
  )
}
  





export default App;
