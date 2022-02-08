import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: 'AppComponent',
          pathMatch: 'full',
        },
        {
          path: 'student',
          loadChildren: () =>
            import('student/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'professor',
          loadChildren: () =>
            import('professor/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'test',
          loadChildren: () =>
            import('professor/TestModule').then((m) => m.TestModule),
        }
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
