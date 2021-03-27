import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import { React, useState } from "react";

function CadastroFormulario(props) {
  
    let [nome, setNome] = useState("");
    let [sobrenome, setSobrenome] = useState("");
    let [cpf, setCpf] = useState("");
    let [novidades, setNovidades] = useState(false);
    let [promocoes, setPromocoes] = useState(false);

    return (
    <form
        onSubmit={(event) => {
            event.preventDefault();
            props.aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
        }}>

      <TextField
        value={nome}
        onChange={(event) => {
            let nomeTmp = event.target.value;
            if(nomeTmp.length >= 3){
                nomeTmp = nomeTmp.substr(0,3);
            }
            setNome(nomeTmp);
        }}
        id="nome" 
        label="Nome" 
        margin="normal" 
        fullWidth />
      
      <TextField
        value={sobrenome}
        onChange={(event) => {
            setSobrenome(event.target.value);
        }}
        id="sobrenome" 
        label="Sobrenome" 
        margin="normal" 
        fullWidth />
      
      <TextField
        value={cpf}
        onChange={(event) => {
            setCpf(event.target.value);
        }}
        id="cpf" 
        label="CPF" 
        margin="normal" 
        fullWidth />

      <FormControlLabel
        label="Novidades"
        onChange={(event) => setNovidades(event.target.checked)}
        control={<Switch name="novidades" defaultChecked={novidades} />}
      />
      <FormControlLabel
        label="Promoções"
        onChange={(event) => setPromocoes(event.target.checked)}
        control={<Switch name="promocoes" defaultChecked={promocoes} />}
      />
      <Button type="submit">Cadastrar</Button>
    </form>
  );
}

export default CadastroFormulario;
