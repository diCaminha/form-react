import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import { React, useState } from "react";

function CadastroFormulario() {
  
    let [nome, setNome] = useState("");

    return (
    <form
        onSubmit={(event) => {
            event.preventDefault();
            console.log(nome);
        }}>

      <TextField
        value={nome}
        onChange={(event) => {
            setNome(event.target.value)
            if(nome.length >= 3){
                setNome(nome.substr(0,3));
            }
        }}
        id="nome" 
        label="Nome" 
        margin="normal" 
        fullWidth />
      
      <TextField 
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
