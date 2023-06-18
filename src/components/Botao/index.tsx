import React from "react";
import Style from './Botao.module.scss'

class Botao extends React.Component {
    render() {
        return (
            <button className={Style.botao}>
                Botão
            </button>
        )
    }
}
export default Botao;