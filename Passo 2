db.createCollection("tarefas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["titulo", "descricao", "creationDate", "completionDate", "status"],
      properties: {
        titulo: {
          bsonType: "string",
          description: "O título é um atributo requerido"
        },
        descricao: {
          bsonType: "string",
          description: "A descrição é um atributo requerido"
        },
        creationDate: {
          bsonType: "date",
          description: "A data de criação é um atributo requerido"
        },
        completionDate: {
          bsonType: ["date", "null"],
          description: "A data de conclusão deve ser uma data ou nulo"
        },
        status: {
          bsonType: "string",
          description: "O status é um atributo requerido"
        }
      }
    }
  }
});
