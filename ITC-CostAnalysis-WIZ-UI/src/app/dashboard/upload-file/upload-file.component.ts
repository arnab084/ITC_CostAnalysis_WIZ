import { Component, OnInit } from '@angular/core';
import {UploadControllerService} from "../../../../typescript-angular-client";
import {Observable} from "rxjs";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  file:File = null;
  returnResponse:Observable<any> = new Observable<any>();

  constructor(private uploadService: UploadControllerService) { }

  ngOnInit(): void {
  }

  selectFile(event){
    this.file = (event.target as HTMLInputElement).files[0];
  }
  uploadFile(){
    if(this.file != null){
      this.uploadService.mapReapExcelDatatoDBUsingPOST(this.file).subscribe(
        mainData => console.log("mainData", mainData),
        error => console.log("error", error),
        () => console.log("Finished")
      )};
  }

}
