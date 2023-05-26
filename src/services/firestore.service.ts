import { Injectable, inject } from "@angular/core";
import { Firestore, setDoc } from "@angular/fire/firestore";
import { collection, getDoc, doc } from "@firebase/firestore";

@Injectable({
  providedIn: "root"
})
export class FirestoreService {

  userData: any;

  constructor() { }

  private firestore: Firestore = inject(Firestore);

  async getUserMetaDetail(userId: string) {
    const docRef = doc(this.firestore, 'users-metadata', userId)
    const docSnap = await getDoc(docRef);
    if (docSnap) {
      return docSnap.data();
    }
    return null;
  }

  async getUserData(userId: string) {
    const docRef = doc(this.firestore, 'users-data', userId);
    const docSnap = await getDoc(docRef);
    if (docSnap) {
      this.userData = docSnap.data();
    }
  }

  async setUserMetaDetail(userId: string, workspace: string) {
    if (await this.getUserMetaDetail(userId) != undefined) {
      const docRef = doc(this.firestore, `user-metadata${userId}`)
      await setDoc(docRef, {
        userId,
        workspace
      })
    }
  }
}
