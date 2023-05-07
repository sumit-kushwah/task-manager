import { ICollection } from "src/interfaces/collection";


const userMetaDataCollection: ICollection = {
  collectionName: "users-metadata",
  documents: [
    { documentId: 'userId1' }
  ]
}

const userDataCollection: ICollection = {
  collectionName: "users-data",
  documents: [
    { documentId: 'documentId1' }
  ]
}
