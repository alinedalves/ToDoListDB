Comando mongo shell/queries 

db.tarefa.insert({
  titulo: 'Tarefa 1',
  descricao: 'Descrição da tarefa 1',
  creationDate: ISODate("2023-10-10T00:00:00.000Z"),
  completionDate: ISODate("2023-10-12T00:00:00.000Z"),
  status: 'Concluído'
})

db.tasks.insert({
  titulo: 'Tarefa 2',
  descricao: 'Descrição da tarefa 2',
  creationDate: new Date('2023-10-11'),
  completionDate: null,
  status: 'Pendente'
})


db.tasks.find({ status: 'Concluído' })

db.tasks.remove({ titulo: 'Tarefa 2' })
