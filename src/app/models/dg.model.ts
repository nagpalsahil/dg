export class DataGovernance {
    key?: string;
    dataFieldOwner?: string;
    sourceSystemFieldName: string;
    sourceTableName?:string;
    sourceSystemName?:string;
    dataEntryMethodology: string;
    referenceDataCheck?: string;
    transformationRule?: string;
    createdBy: string;
    dateCreated: string;
    modifiedBy?: string;
    dateModified: string;
}
