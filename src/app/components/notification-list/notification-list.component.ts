import { Component, OnInit } from '@angular/core';
import { ActionList } from 'src/app/shared/shared/models/action-list';
import { ACTIONLISTS } from 'src/app/shared/shared/models/action-lists';
import { Actions } from 'src/app/shared/shared/models/actions';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {

  actionLists:ActionList[];
  view:boolean=false;
  description?:string;
  control:string;
  fileModeOn:boolean=false;
  label:any;
  submit:string;
  attachmentsDetails:any;

  constructor() { }

  ngOnInit(): void {
    this.actionLists=ACTIONLISTS;    
  }

  viewMode(element:ActionList){
    if(element.actions){
      for(let i=0;i<element.actions.length;i++){
        this.control=(element.actions[i].control);
      }
      this.label=element.actions;
    }
    this.attachmentsDetails=element.attachments;
  }

}
