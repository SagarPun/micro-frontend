import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { ListUiComponent } from '../list-ui/list-ui.component';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
      {
        path: 'list',
        component: ListUiComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
