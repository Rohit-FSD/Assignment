import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationListComponent } from 'src/app/components/notification-list/notification-list.component';



@NgModule({
  declarations: [NotificationListComponent],
  exports:[NotificationListComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
