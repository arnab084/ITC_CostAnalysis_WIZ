package com.wiz.travel;

import com.wiz.travel.entity.KeyValueResponse;
import com.wiz.travel.entity.TravelHistoryEntity;
import com.wiz.travel.entity.TravelHistoryRepository;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;


@Service
public class TravelService {
	
	@Autowired
	TravelHistoryRepository travelHistoryRepository;
	

	public String addTravelReport (List<TravelHistoryEntity> travelEntity) {
		travelHistoryRepository.saveAll(travelEntity);
	    return "Saved";
	}

	public List<KeyValueResponse> getExpensePerEmployee(int employeeCount) {
		return travelHistoryRepository.getExpensePerEmployee().subList(0,employeeCount);
	}

	public List<KeyValueResponse> getExpensePerEmployeeByTime(Date startDate, Date endDate) {
		List<KeyValueResponse> response = travelHistoryRepository.getExpensePerEmployeeByTime(startDate, endDate);
		if(response!=null && response.size()>10){
			return response.subList(0,10);
		} else {
			return response;
		}
	}

	public List<KeyValueResponse> getExpenseByBranch() {
		return travelHistoryRepository.getExpenseByBranch();
	}

	public List<KeyValueResponse> getExpenseByBusinessArea() {
		return travelHistoryRepository.getExpenseByBusinessArea();
	}

	public List<KeyValueResponse> getExpenseByDesignation() {
		return travelHistoryRepository.getExpenseByDesignation().subList(0,20);
	}

	public List<KeyValueResponse> getExpenseByCostCenter() {
		return travelHistoryRepository.getExpenseByCostCenter().subList(0,10);
	}

	public List<KeyValueResponse> getExpenseByEmployeeGrade() {
		return travelHistoryRepository.getExpenseByEmployeeGrade();
	}

	public void createTravelEntity(int caseType, TravelHistoryEntity travelHistoryEntity, XSSFCell cell) throws ParseException {

		switch(caseType) {
			case 0:
				travelHistoryEntity.setEmployeeCode(cell.toString());
				break;
			case 1:
				travelHistoryEntity.setEmployeeName(cell.toString());
				break;
			case 2:
				travelHistoryEntity.setGrade(cell.toString());
				break;
			case 3:
				travelHistoryEntity.setDesignation(cell.toString());
				break;
			case 4:
				travelHistoryEntity.setBranch(cell.toString());
				break;
			case 5:
				travelHistoryEntity.setBusinessArea(cell.toString());
				break;
			case 6:
				travelHistoryEntity.setDocRefNo(cell.toString());
				break;
			case 7:
				travelHistoryEntity.setDocDate(convertToDate(cell));
				break;
			case 8:
				travelHistoryEntity.setStatus(cell.toString());
				break;
			case 9:
				travelHistoryEntity.setApprovers(cell.toString());
				break;
			case 10:
				travelHistoryEntity.setApprovalDate(convertToDate(cell));
				break;
			case 11:
				travelHistoryEntity.setHrApprovedBy(cell.toString());
				break;
			case 12:
				travelHistoryEntity.setHrApprovalDate(convertToDate(cell));
				break;
			case 13:
				travelHistoryEntity.setFinApprovers(cell.toString());
				break;
			case 14:
				travelHistoryEntity.setFinApprovalDate(convertToDate(cell));
				break;
			case 15:
				travelHistoryEntity.setCostCenter(cell.toString());
				break;
			case 16:
				travelHistoryEntity.setTravelFromDate(convertToDate(cell));
				break;
			case 17:
				travelHistoryEntity.setTravelToDate(convertToDate(cell));
				break;
			case 18:
				travelHistoryEntity.setNoOfDays(convertToInteger(cell));
				break;
			case 19:
				travelHistoryEntity.setTravellingPeriod(cell.toString());
				break;
			case 20:
				travelHistoryEntity.setPlace(cell.toString());
				break;
			case 21:
				travelHistoryEntity.setTravelType(cell.toString());
				break;
			case 22:
				travelHistoryEntity.setPaymentMode(cell.toString());
				break;
			case 23:
				travelHistoryEntity.setAccountCode(cell.toString());
				break;
			case 24:
				travelHistoryEntity.setExpenseType(cell.toString());
				break;
			case 25:
				travelHistoryEntity.setRoomRent(convertToInteger(cell));
				break;
			case 26:
				travelHistoryEntity.setFoodLaundry(convertToInteger(cell));
				break;
			case 27:
				travelHistoryEntity.setIncidental(convertToInteger(cell));
				break;
			case 28:
				travelHistoryEntity.setOther(convertToInteger(cell));
				break;
			case 29:
				travelHistoryEntity.setTrainTicket(convertToInteger(cell));
				break;
			case 30:
				travelHistoryEntity.setBusFare(convertToInteger(cell));
				break;
			case 31:
				travelHistoryEntity.setLocalConveyance(convertToInteger(cell));
				break;
			case 32:
				travelHistoryEntity.setAirTicket(convertToInteger(cell));
				break;
			case 33:
				travelHistoryEntity.setFixedTE(convertToInteger(cell));
				break;
			case 34:
				travelHistoryEntity.setRestaurant(convertToInteger(cell));
				break;
			case 35:
				travelHistoryEntity.setMobile(convertToInteger(cell));
				break;
			case 36:
				travelHistoryEntity.setOtherBusinessExp(convertToInteger(cell));
				break;
			case 37:
				travelHistoryEntity.setMiscellaneous(convertToInteger(cell));
				break;
			case 38:
				travelHistoryEntity.setTotal(convertToInteger(cell));
				break;
			case 39:
				travelHistoryEntity.setWithinLimit(cell.toString());
				break;
			case 40:
				travelHistoryEntity.setReason(cell.toString());
				break;
			case 41:
				travelHistoryEntity.setWoucherNos(cell.toString());
				break;
			case 42:
				travelHistoryEntity.setBillNo(cell.toString());
				break;
			case 43:
				travelHistoryEntity.setVoucherDt(convertToDate(cell));
				break;
		}
	}

	public Date convertToDate(XSSFCell cell){
		SimpleDateFormat sdf1 = new SimpleDateFormat("dd-MMM-yyyy");
		SimpleDateFormat sdf2 = new SimpleDateFormat("yyyy-MM-dd");
		try{
			java.util.Date st1 = sdf1.parse(cell.toString());
			String st2 = sdf2.format(st1);
			return Date.valueOf(st2);
		} catch(Exception e){

		}
		return null;
	}

	public Integer convertToInteger(XSSFCell cell){
		try {
			return (int)cell.getNumericCellValue();
		} catch(Exception e){

		}
		return 0;
	}
}
