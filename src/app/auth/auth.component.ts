import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Optional } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';

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
  ) {
  }

  ngOnInit(): void {
    this.httpClient.get('https://api.quotable.io/random').pipe(
      map((response: any) => {
        this.quote = response.content;
        this.detectChanges();
        return this.quote;
      }),
      switchMap((quote: string) => {
        return this.httpClient.post('https://openai80.p.rapidapi.com/chat/completions',
          {
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'user',
                content: `Translate below text in hindi-> ${quote}`
              }
            ]
          },
          {
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': '687dbfe6b7msh0e5814a43c930b7p11d7cdjsn493dc356cfb6',
              'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
            },
          })
      }),
    ).subscribe((res: any) => {
      console.log(res);
      // this.quote = response.content;
      this.hindiTranslation = res.choices[0].message.content;
      this.detectChanges()
    });
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(this.auth, provider);
    await this.router.navigate(this.redirect);
  }

  private detectChanges() {
    this.changeDetectorRef.detectChanges();
  }
}
