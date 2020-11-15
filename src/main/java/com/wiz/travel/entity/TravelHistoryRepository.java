package com.wiz.travel.entity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface TravelHistoryRepository extends JpaRepository<TravelHistoryEntity , Integer> {

    @Query("select  employeeName as key, sum(total) as value from TravelHistoryEntity group by employeeName order by value desc")
    List<KeyValueResponse> getExpensePerEmployee();

    @Query("select  branch as key, sum(total) as value from TravelHistoryEntity group by branch order by value desc")
    List<KeyValueResponse> getExpenseByBranch();


}
