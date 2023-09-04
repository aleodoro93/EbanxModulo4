import TarefaModel from "../model/TarefasModel.js"
import TarefasMetodos from "../utils/TarefasMetodos.js"

class TarefasController {
    static rotas(app){
        app.post("/tarefas", (req, res)=>{
            const tarefas = new TarefaModel(req.body.titulo, req.body.descricao, req.body.status)
            TarefasMetodos.inserirTarefas(tarefas)
            res.status(201).json(tarefas)
        })

        app.get("/tarefas", (req, res)=>{
            const tarefas = TarefasMetodos.buscarTarefas()
            res.status(200).json(tarefas)
        })
    }

}

export default TarefasController 