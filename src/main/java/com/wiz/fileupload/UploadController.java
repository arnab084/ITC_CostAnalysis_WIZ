package com.wiz.fileupload;

import com.wiz.travel.entity.TravelHistoryEntity;
import com.wiz.travel.TravelService;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

@RestController
public class UploadController {

	@Autowired
	TravelService travelService;

	@PostMapping("/import")
	public String mapReapExcelDatatoDB(@RequestParam("file") MultipartFile reapExcelDataFile) throws IOException {

		XSSFWorkbook workbook = new XSSFWorkbook(reapExcelDataFile.getInputStream());
		XSSFSheet worksheet = workbook.getSheetAt(0);
		List<TravelHistoryEntity> travelHistoryEntityList = new ArrayList<>();
		for(int i=1;i<worksheet.getPhysicalNumberOfRows() ;i++) {
			XSSFRow row = worksheet.getRow(i);
			TravelHistoryEntity travelHistoryEntity = null;
			try {
				travelHistoryEntity = new TravelHistoryEntity();
				for(int k=0;k<44;k++){
					travelService.createTravelEntity(k,travelHistoryEntity,row.getCell(k));
				}
			} catch (ParseException e) {
				e.printStackTrace();
			}

			travelHistoryEntityList.add(travelHistoryEntity);
		}
		travelService.addTravelReport(travelHistoryEntityList);
		return "Data Uploaded Successfully";
	}

}
