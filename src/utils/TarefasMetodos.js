import Database from "../database/database.js";

class TarefasMetodos {
    /**
     * Metodo para inserir tarefas no banco de dados
     * @param {TarefasModel} Tarefa 
     */
    static inserirTarefas(Tarefa){
        Database.Tarefas.push(Tarefa)
    }
    static buscarTarefas(){
        return Database.Tarefas;
    }

}

export default TarefasMetodos