//Primeira Querie

db.tasks.update(
  { titulo: 'Tarefa 1' }, 
  { $set: { responsavel: 'Novo Responsável' } }
)

 Collection.update() is deprecated. Use updateOne, updateMany, or bulkWrite.
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0

//Segunda Querie:

db.tasks.update(
  { titulo: 'Tarefa 1' }, 
  { $inc: { completionDate: 1000 * 60 * 60 * 24 * 2 } }
)

Collection.update() is deprecated. Use updateOne, updateMany, or bulkWrite.
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

db.tasks.update(
...   { titulo: 'Tarefa 1' },
...   { $inc: { completionDate: 1000 * 60 * 60 * 24 * 2 } }

//Terceira Querie:

db.tasks.update(
  { titulo: 'Tarefa 1', status: 'In Progress' }, 
  { $set: { status: 'Complete' } }
)


  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}

//Quarta Querie:

db.tasks.update(
  { titulo: 'Tarefa 1' }, 
  { $set: { descricao: 'Nova descrição da Tarefa 1' } }
)

{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

//Quinta Querie:

db.tasks.update(
  { titulo: 'Tarefa 1' }, 
  { $set: { urgente: true } }
)

{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
