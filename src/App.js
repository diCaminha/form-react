import { Container } from '@material-ui/core';
import './App.css';
import CadastroFormulario from "./components/CadastroFormulario";

function App() {
  return (
    <Container maxWidth="sm">
      <h1>formulario de cadastro</h1>   
      <CadastroFormulario/>
    </Container>
  );
}

export default App;
