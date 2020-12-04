package com.wiz.travel.entity;

import javax.persistence.*;
import java.sql.Date;


@Entity 
@Table(name = "travel_history")
public class TravelHistoryEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;

	String employeeCode;
	String employeeName;
	String grade;
	String designation;
	String branch;
	String businessArea;

	String docRefNo;
	Date docDate;
	String status;
	String approvers;
	Date approvalDate;
	String hrApprovedBy;
	Date hrApprovalDate;
	String finApprovers;
	Date finApprovalDate;
	String costCenter;
	Date travelFromDate;
	Date travelToDate;
	Integer noOfDays;
	String travellingPeriod;
	String place;
	String travelType;
	String paymentMode;
	String accountCode;
	String expenseType;
	Integer roomRent;
	Integer foodLaundry;
	Integer incidental;
	Integer other;
	Integer trainTicket;
	Integer busFare;
	Integer localConveyance;
	Integer airTicket;
	Integer fixedTE;
	Integer restaurant;
	Integer mobile;
	Integer otherBusinessExp;
	Integer miscellaneous;
	Integer total;
	String withinLimit;
	String reason;
	String woucherNos;
	String billNo;
	Date voucherDt;



	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getEmployeeCode() {
		return employeeCode;
	}

	public void setEmployeeCode(String employeeCode) {
		this.employeeCode = employeeCode;
	}

	public String getEmployeeName() {
		return employeeName;
	}

	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getBranch() {
		return branch;
	}

	public void setBranch(String branch) {
		this.branch = branch;
	}

	public String getBusinessArea() {
		return businessArea;
	}

	public void setBusinessArea(String businessArea) {
		this.businessArea = businessArea;
	}

	public String getDocRefNo() {
		return docRefNo;
	}

	public void setDocRefNo(String docRefNo) {
		this.docRefNo = docRefNo;
	}

	public Date getDocDate() {
		return docDate;
	}

	public void setDocDate(Date docDate) {
		this.docDate = docDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getApprovers() {
		return approvers;
	}

	public void setApprovers(String approvers) {
		this.approvers = approvers;
	}

	public Date getApprovalDate() {
		return approvalDate;
	}

	public void setApprovalDate(Date approvalDate) {
		this.approvalDate = approvalDate;
	}

	public String getHrApprovedBy() {
		return hrApprovedBy;
	}

	public void setHrApprovedBy(String hrApprovedBy) {
		this.hrApprovedBy = hrApprovedBy;
	}

	public Date getHrApprovalDate() {
		return hrApprovalDate;
	}

	public void setHrApprovalDate(Date hrApprovalDate) {
		this.hrApprovalDate = hrApprovalDate;
	}

	public String getFinApprovers() {
		return finApprovers;
	}

	public void setFinApprovers(String finApprovers) {
		this.finApprovers = finApprovers;
	}

	public Date getFinApprovalDate() {
		return finApprovalDate;
	}

	public void setFinApprovalDate(Date finApprovalDate) {
		this.finApprovalDate = finApprovalDate;
	}

	public String getCostCenter() {
		return costCenter;
	}

	public void setCostCenter(String costCenter) {
		this.costCenter = costCenter;
	}

	public Date getTravelFromDate() {
		return travelFromDate;
	}

	public void setTravelFromDate(Date travelFromDate) {
		this.travelFromDate = travelFromDate;
	}

	public Date getTravelToDate() {
		return travelToDate;
	}

	public void setTravelToDate(Date travelToDate) {
		this.travelToDate = travelToDate;
	}

	public Integer getNoOfDays() {
		return noOfDays;
	}

	public void setNoOfDays(Integer noOfDays) {
		this.noOfDays = noOfDays;
	}

	public String getTravellingPeriod() {
		return travellingPeriod;
	}

	public void setTravellingPeriod(String travellingPeriod) {
		this.travellingPeriod = travellingPeriod;
	}

	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}

	public String getTravelType() {
		return travelType;
	}

	public void setTravelType(String travelType) {
		this.travelType = travelType;
	}

	public String getPaymentMode() {
		return paymentMode;
	}

	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}

	public String getAccountCode() {
		return accountCode;
	}

	public void setAccountCode(String accountCode) {
		this.accountCode = accountCode;
	}

	public String getExpenseType() {
		return expenseType;
	}

	public void setExpenseType(String expenseType) {
		this.expenseType = expenseType;
	}

	public Integer getRoomRent() {
		return roomRent;
	}

	public void setRoomRent(Integer roomRent) {
		this.roomRent = roomRent;
	}

	public Integer getFoodLaundry() {
		return foodLaundry;
	}

	public void setFoodLaundry(Integer foodLaundry) {
		this.foodLaundry = foodLaundry;
	}

	public Integer getIncidental() {
		return incidental;
	}

	public void setIncidental(Integer incidental) {
		this.incidental = incidental;
	}

	public Integer getOther() {
		return other;
	}

	public void setOther(Integer other) {
		this.other = other;
	}

	public Integer getTrainTicket() {
		return trainTicket;
	}

	public void setTrainTicket(Integer trainTicket) {
		this.trainTicket = trainTicket;
	}

	public Integer getBusFare() {
		return busFare;
	}

	public void setBusFare(Integer busFare) {
		this.busFare = busFare;
	}

	public Integer getLocalConveyance() {
		return localConveyance;
	}

	public void setLocalConveyance(Integer localConveyance) {
		this.localConveyance = localConveyance;
	}

	public Integer getAirTicket() {
		return airTicket;
	}

	public void setAirTicket(Integer airTicket) {
		this.airTicket = airTicket;
	}

	public Integer getFixedTE() {
		return fixedTE;
	}

	public void setFixedTE(Integer fixedTE) {
		this.fixedTE = fixedTE;
	}

	public Integer getRestaurant() {
		return restaurant;
	}

	public void setRestaurant(Integer restaurant) {
		this.restaurant = restaurant;
	}

	public Integer getMobile() {
		return mobile;
	}

	public void setMobile(Integer mobile) {
		this.mobile = mobile;
	}

	public Integer getOtherBusinessExp() {
		return otherBusinessExp;
	}

	public void setOtherBusinessExp(Integer otherBusinessExp) {
		this.otherBusinessExp = otherBusinessExp;
	}

	public Integer getMiscellaneous() {
		return miscellaneous;
	}

	public void setMiscellaneous(Integer miscellaneous) {
		this.miscellaneous = miscellaneous;
	}

	public Integer getTotal() {
		return total;
	}

	public void setTotal(Integer total) {
		this.total = total;
	}

	public String getWithinLimit() {
		return withinLimit;
	}

	public void setWithinLimit(String withinLimit) {
		this.withinLimit = withinLimit;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public String getWoucherNos() {
		return woucherNos;
	}

	public void setWoucherNos(String woucherNos) {
		this.woucherNos = woucherNos;
	}

	public String getBillNo() {
		return billNo;
	}

	public void setBillNo(String billNo) {
		this.billNo = billNo;
	}

	public Date getVoucherDt() {
		return voucherDt;
	}

	public void setVoucherDt(Date voucherDt) {
		this.voucherDt = voucherDt;
	}
}
