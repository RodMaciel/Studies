import React from "react";
import Botao from "../Botao";
import  Relogio  from "./Relógio";
import styles from './cronometro.module.scss';

export default function Cronometro () {
    return (
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={styles.relogioWrapper}>
                <Relogio/>
        </div>

        <Botao>
            Começar
        </Botao>
        </div>
        
    )
}