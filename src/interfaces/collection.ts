import { IDocument } from "./document";

/** firestore collection interface */
export interface ICollection {
  collectionName: string;
  documents: IDocument[]
}
