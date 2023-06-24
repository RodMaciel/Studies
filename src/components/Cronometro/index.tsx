import React, { useState, useEffect } from "react";
import Botao from "../Botao";
import Relogio from "./Relógio";
import styles from "./cronometro.module.scss";
import { Itarefa } from "../../Types/tarefa";
import { tempoParaSegundos } from "../../common/utils/time";

interface Props {
  selecionado: Itarefa | undefined;
}

export default function Cronometro({ selecionado }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if(selecionado?.tempo) {
        setTempo(tempoParaSegundos(selecionado.tempo))
    }
  },[selecionado])
  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Escolha um card e inicie o cronometro</p>
      <div className={styles.relogioWrapper}>
        <Relogio tempo = {tempo}/>
      </div>

      <Botao>Começar</Botao>
    </div>
  );
}
