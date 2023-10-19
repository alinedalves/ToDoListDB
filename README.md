# ToDoListDB

# Descrição dos Campos Escolhidos

Neste repositório, você encontrará o código MongoDB relacionado a um sistema de gerenciamento de tarefas. Abaixo estão os detalhes dos campos escolhidos para compor um documento da coleção de tarefas:

1. **title** (Título):
   - Descrição: O título da tarefa.
   - Tipo de Dados: String.
   - Exemplo: "Tarefa 1".

2. **description** (Descrição):
   - Descrição: Uma descrição mais detalhada da tarefa.
   - Tipo de Dados: String.
   - Exemplo: "Descrição da tarefa 1".

3. **creationDate** (Data de Criação):
   - Descrição: A data em que a tarefa foi criada.
   - Tipo de Dados: Data e Hora (ISODate).
   - Exemplo: "2023-10-10T00:00:00Z".

4. **completionDate** (Data de Conclusão):
   - Descrição: A data em que a tarefa foi concluída. Pode ser nulo (caso a tarefa ainda não tenha sido concluída).
   - Tipo de Dados: Data e Hora (ISODate) ou Nulo.
   - Exemplo: "2023-10-12T00:00:00Z" ou nulo.

5. **status** (Status):
   - Descrição: O status da tarefa, como "Concluído", "Pendente" ou outros status relevantes.
   - Tipo de Dados: String.
   - Exemplo: "Concluído".
