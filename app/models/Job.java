/**
 * Copyright (C) Deepa Sysisoft Pvt Ltd (2015-2016). All Rights Reserved. This code may not be
 * copied or used without permission.
 */
package models;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.io.Serializable;

public class Job implements Serializable {
  private static final long serialVersionUID = -1L;

  private long id = -1;

  private String jobTitle;

  private Long minSalary;

  private Long maxSalary;

  @JsonProperty("_id")
  public long getId() {
    return this.id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getJobTitle() {
    return this.jobTitle;
  }

  public void setJobTitle(String jobTitle) {
    this.jobTitle = jobTitle;
  }

  public Long getMinSalary() {
    return this.minSalary;
  }

  public void setMinSalary(Long minSalary) {
    this.minSalary = minSalary;
  }

  public Long getMaxSalary() {
    return this.maxSalary;
  }

  public void setMaxSalary(Long maxSalary) {
    this.maxSalary = maxSalary;
  }
}
