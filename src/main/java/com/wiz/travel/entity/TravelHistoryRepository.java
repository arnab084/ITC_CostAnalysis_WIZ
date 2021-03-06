package com.wiz.travel.entity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Date;
import java.util.List;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface TravelHistoryRepository extends JpaRepository<TravelHistoryEntity , Integer> {

    @Query("select  employeeName as key, sum(total) as value from TravelHistoryEntity group by employeeName order by value desc")
    List<KeyValueResponse> getExpensePerEmployee();

    @Query("select  travel.employeeName as key, sum(travel.total) as value from TravelHistoryEntity travel " +
            "where (travel.travelFromDate >= :startDate) " +
            "and (travel.travelToDate <= :endDate) " +
            "group by travel.employeeName order by value desc")
    List<KeyValueResponse> getExpensePerEmployeeByTime(@Param("startDate") Date startDate, @Param("endDate") Date endDate);


    @Query("select  branch as key, sum(total) as value from TravelHistoryEntity group by branch order by value desc")
    List<KeyValueResponse> getExpenseByBranch();

    @Query("select  businessArea as key, sum(total) as value from TravelHistoryEntity group by businessArea order by value desc")
    List<KeyValueResponse> getExpenseByBusinessArea();

    @Query("select  designation as key, sum(total) as value from TravelHistoryEntity group by designation order by value desc")
    List<KeyValueResponse> getExpenseByDesignation();

    @Query("select  costCenter as key, sum(total) as value from TravelHistoryEntity group by costCenter order by value desc")
    List<KeyValueResponse> getExpenseByCostCenter();

    @Query("select  grade as key, sum(total) as value from TravelHistoryEntity group by grade order by value desc")
    List<KeyValueResponse> getExpenseByEmployeeGrade();



}
