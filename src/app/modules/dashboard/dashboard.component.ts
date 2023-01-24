import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { DataGovernance } from 'src/app/models/dg.model';
import { Policy } from 'src/app/models/policy.model';
import { Product } from 'src/app/models/product';
import { PolicyService } from 'src/app/service/policyService';
import { SearchBoxComponent } from './search-box/search-box.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  filteredPolicies: DataGovernance;
  ref: DynamicDialogRef;
  columns: any[];
  hasData=false;

  constructor(public messageService: MessageService, public dialogService: DialogService) {}

  ngOnInit() {
    this.columns=[
      {field: 'dataFieldOwner', header: 'Data Field Owner'},
      {field: 'sourceSystemFieldName', header: 'Source System Field Name'},
      {field: 'sourceTableName', header: 'Source Table Name'},
      {field: 'sourceSystemName', header: 'Source System Name' },
      {field: 'dataEntryMethodology', header: 'Data Entry Methodology' },
      {field: 'referenceDataCheck', header: 'Reference Data Check (Y/N)' },
      {field: 'transformationRule', header: 'Transformation Rules' },
      {field: 'createdBy', header: 'Created By' },
      {field: 'dateCreated', header: 'Date Created' },
      {field: 'modifiedBy', header: 'Modified By' },
      {field: 'dateModified', header: 'Date Modified' }
    ];
    if(!this.filteredPolicies){
      this.search();
    }
  }

  search(){
    this.ref = this.dialogService.open(SearchBoxComponent, {
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000
  });

  this.ref.onClose.subscribe((data:DataGovernance) =>{
      this.filteredPolicies=data;
  });
  }
}
