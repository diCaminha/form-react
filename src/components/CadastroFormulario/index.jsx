import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import { React, useState } from "react";

function CadastroFormulario() {
  
    let [nome, setNome] = useState("");
    let [sobrenome, setSobrenome] = useState("");

    return (
    <form
        onSubmit={(event) => {
            event.preventDefault();
            console.log(nome, sobrenome);
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
        id="cpf" 
        label="CPF" 
        margin="normal" 
        fullWidth />
      <FormControlLabel
        label="Novidades"
        control={<Switch name="novidades" defaultChecked />}
      />
      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" defaultChecked />}
      />
      <Button type="submit">Cadastrar</Button>
    </form>
  );
}

export default CadastroFormulario;
