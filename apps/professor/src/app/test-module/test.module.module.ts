import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestModuleComponent } from './test.component';
import { TestCompComponent } from '../test-comp/test-comp.component';

@NgModule({
  declarations: [TestModuleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TestModuleComponent,
      },
      {
        path: 'test',
        component: TestCompComponent,
      },
    ]),
  ],
})
export class TestModule {}
