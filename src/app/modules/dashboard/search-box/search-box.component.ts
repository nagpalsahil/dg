import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DataGovernance } from 'src/app/models/dg.model';
import { Policy } from 'src/app/models/policy.model';
import { PolicyService } from 'src/app/service/policyService';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit {
  policies: DataGovernance[];
  loading:boolean = true;
  fieldsArr: any[];
  hasData:boolean=false;
  showError:boolean=false;
  searchValue:string;
  
  constructor(private policyService: PolicyService, public ref: DynamicDialogRef) { }

  ngOnInit(): void {
    this.policyService.getPolicies().then(policies => {
      this.policies = policies;
  });
  }

  searchData(){ 
    filtered: DataGovernance;
    let policyDtls:DataGovernance;
    for (let i = 0; i < this.policies.length; i++) {
      const policy = this.policies[i];
      if (policy.key.toLowerCase().replace(" ", "") == this.searchValue.toLowerCase().replace(" ", "")) {
        this.ref.close(this.policies[i]);
        break;
      }
      this.hasData=true;
    }
    if(this.hasData){
      this.showError=true;
    }
  }
}
