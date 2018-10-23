import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { DoingListComponent } from './doing-list/doing-list';
import { CompleteComponent } from './complete/complete';
@NgModule({
	declarations: [DoingListComponent,
    CompleteComponent],
	imports: [IonicModule],
	exports: [DoingListComponent,
    CompleteComponent]
})
export class ComponentsModule {}
