export * from './basicErrorController.service';
import { BasicErrorControllerService } from './basicErrorController.service';
export * from './travelController.service';
import { TravelControllerService } from './travelController.service';
export * from './uploadController.service';
import { UploadControllerService } from './uploadController.service';
export const APIS = [BasicErrorControllerService, TravelControllerService, UploadControllerService];
