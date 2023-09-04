import React from "react";

import { GlobalContextExercicio } from "./globalStorageExercicio";

export const LimparExercicio = () =>{
    const {limparDados} = React.useContext(GlobalContextExercicio);

    return(
        <button onClick={limparDados}>
            Limpar
        </button>
    )
}