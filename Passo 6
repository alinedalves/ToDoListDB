1. Antes da Indexação:

db.tasks.find({ creationDate: { $gte: new ISODate("2023-10-10T00:00:00.000Z") } }).explain("executionStats")

{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'ToDoListDB.tasks',
    indexFilterSet: false,
    parsedQuery: { creationDate: { '$gte': ISODate("2023-10-10T00:00:00.000Z") } },
    queryHash: '0FE297A6',
    planCacheKey: '0FE297A6',
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    winningPlan: {
      stage: 'COLLSCAN',
      filter: { creationDate: { '$gte': ISODate("2023-10-10T00:00:00.000Z") } },
      direction: 'forward'
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1,
    executionTimeMillis: 6,
    totalKeysExamined: 0,
    totalDocsExamined: 2,
    executionStages: {
      stage: 'COLLSCAN',
      filter: { creationDate: { '$gte': ISODate("2023-10-10T00:00:00.000Z") } },
      nReturned: 1,
      executionTimeMillisEstimate: 0,
      works: 3,
      advanced: 1,
      needTime: 1,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      direction: 'forward',
      docsExamined: 2
    }
  },
  command: {
    find: 'tasks',
    filter: { creationDate: { '$gte': ISODate("2023-10-10T00:00:00.000Z") } },
    '$db': 'ToDoListDB'
  },
  serverInfo: {
    host: 'AlineDarc',
    port: 27017,
    version: '6.0.8',
    gitVersion: '3d84c0dd4e5d99be0d69003652313e7eaf4cdd74'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600
  },
  ok: 1
}

2.Índices:

db.tasks.createIndex({ creationDate: 1 })
creationDate_1
db.tasks.createIndex({ status: 1 })
status_1

3. Depois da Indexação:

db.tasks.find({ creationDate: { $gte: new ISODate("2023-10-10T00:00:00.000Z") } }).explain("executionStats")


{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'ToDoListDB.tasks',
    indexFilterSet: false,
    parsedQuery: { creationDate: { '$gte': ISODate("2023-10-10T00:00:00.000Z") } },
    queryHash: '0FE297A6',
    planCacheKey: '5C90E1C6',
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    winningPlan: {
      stage: 'FETCH',
      inputStage: {
        stage: 'IXSCAN',
        keyPattern: { creationDate: 1 },
        indexName: 'creationDate_1',
        isMultiKey: false,
        multiKeyPaths: { creationDate: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: {
          creationDate: [
            '[new Date(1696896000000), new Date(9223372036854775807)]'
          ]
        }
      }
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1,
    executionTimeMillis: 13,
    totalKeysExamined: 1,
    totalDocsExamined: 1,
    executionStages: {
      stage: 'FETCH',
      nReturned: 1,
      executionTimeMillisEstimate: 0,
      works: 2,
      advanced: 1,
      needTime: 0,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      docsExamined: 1,
      alreadyHasObj: 0,
      inputStage: {
        stage: 'IXSCAN',
        nReturned: 1,
        executionTimeMillisEstimate: 0,
        works: 2,
        advanced: 1,
        needTime: 0,
        needYield: 0,
        saveState: 0,
        restoreState: 0,
        isEOF: 1,
        keyPattern: { creationDate: 1 },
        indexName: 'creationDate_1',
        isMultiKey: false,
        multiKeyPaths: { creationDate: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: {
          creationDate: [
            '[new Date(1696896000000), new Date(9223372036854775807)]'
          ]
        },
        keysExamined: 1,
        seeks: 1,
        dupsTested: 0,
        dupsDropped: 0
      }
    }
  },
  command: {
    find: 'tasks',
    filter: { creationDate: { '$gte': ISODate("2023-10-10T00:00:00.000Z") } },
    '$db': 'ToDoListDB'
  },
  serverInfo: {
    host: 'AlineDarc',
    port: 27017,
    version: '6.0.8',
    gitVersion: '3d84c0dd4e5d99be0d69003652313e7eaf4cdd74'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600
  },
  ok: 1
}
