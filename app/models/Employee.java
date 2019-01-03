/**
 * Copyright (C) Deepa Sysisoft Pvt Ltd (2015-2016). All Rights Reserved. This code may not be
 * copied or used without permission.
 */
package models;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.io.Serializable;
import java.time.ZonedDateTime;

public class Employee implements Serializable {
  private static final long serialVersionUID = -1L;

  private long id = -1;

  private String firstName;

  private String lastName;

  private String email;

  private String phoneNumber;

  private ZonedDateTime hireDate;

  private Long salary;

  private Long commissionPct;

  @JsonProperty("_id")
  public long getId() {
    return this.id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getFirstName() {
    return this.firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return this.lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getEmail() {
    return this.email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPhoneNumber() {
    return this.phoneNumber;
  }

  public void setPhoneNumber(String phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  public ZonedDateTime getHireDate() {
    return this.hireDate;
  }

  public void setHireDate(ZonedDateTime hireDate) {
    this.hireDate = hireDate;
  }

  public Long getSalary() {
    return this.salary;
  }

  public void setSalary(Long salary) {
    this.salary = salary;
  }

  public Long getCommissionPct() {
    return this.commissionPct;
  }

  public void setCommissionPct(Long commissionPct) {
    this.commissionPct = commissionPct;
  }
}
