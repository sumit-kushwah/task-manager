import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Optional } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { FirestoreService } from 'src/services/firestore.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {
  redirect = ['/home'];

  quote: string = 'Quote loading...';
  hindiTranslation: string = '';
  constructor(
    @Optional() private auth: Auth,
    private router: Router,
    private httpClient: HttpClient,
    private changeDetectorRef: ChangeDetectorRef,
    private fireStoreService: FirestoreService,
  ) {
  }

  ngOnInit(): void {
    this.httpClient.get('https://api.quotable.io/random').pipe(
      map((response: any) => {
        this.quote = response.content;
        this.detectChanges();
        return this.quote;
      }),
      // switchMap((quote: string) => {
      //   return this.httpClient.post('https://openai80.p.rapidapi.com/chat/completions',
      //     {
      //       model: 'gpt-3.5-turbo',
      //       messages: [
      //         {
      //           role: 'user',
      //           content: `Translate below text in hindi-> ${quote}`
      //         }
      //       ]
      //     },
      //     {
      //       headers: {
      //         'content-type': 'application/json',
      //         'X-RapidAPI-Key': '687dbfe6b7msh0e5814a43c930b7p11d7cdjsn493dc356cfb6',
      //         'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
      //       },
      //     })
      // }),
    ).subscribe((res: any) => {
      // console.log(res);
      // // this.quote = response.content;
      // this.hindiTranslation = res.choices[0].message.content;
      // this.detectChanges()
    });
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(this.auth, provider);
    if (userCredential.user) {
      // await this.fireStoreService.setUserMetaDetail(
      //   userCredential.user.uid,
      //   'personal'
      // )
      this.router.navigate(this.redirect);
    }
  }

  // validate email using regex and comment each line


  private detectChanges() {
    this.changeDetectorRef.detectChanges();
  }
}
