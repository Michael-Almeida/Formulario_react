import { TextField, Button } from "@mui/material";
import React, { useState } from "react";

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        id="cep"
        label="CEP"
        type="number"
        margin="normal"
        variant="outlined"
      />

      <TextField
        value={endereco}
        onChange={(event) => setEndereco(event.target.value)}
        id="endereco"
        label="endereco"
        type="text"
        fullWidth
        margin="normal"
        variant="outlined"
      />

      <TextField
        value={numero}
        onChange={(event) => setNumero(event.target.value)}
        id="numero"
        label="numero"
        type="number"
        margin="normal"
        variant="outlined"
      />

      <TextField
        value={estado}
        onChange={(event) => setEstado(event.target.value)}
        id="estado"
        label="estado"
        type="text"
        margin="normal"
        variant="outlined"
      />

      <TextField
        value={cidade}
        onChange={(event) => setCidade(event.target.value)}
        id="cidade"
        label="cidade"
        type="text"
        margin="normal"
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro{" "}
      </Button>
    </form>
  );
}

export default DadosEntrega;
