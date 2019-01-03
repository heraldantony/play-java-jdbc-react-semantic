/**
 * Copyright (C) Deepa Sysisoft Pvt Ltd (2015-2016). All Rights Reserved. This code may not be
 * copied or used without permission.
 */
package models;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.io.Serializable;

public class Country implements Serializable {
  private static final long serialVersionUID = -1L;

  private long id = -1;

  private String countryName;

  @JsonProperty("_id")
  public long getId() {
    return this.id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getCountryName() {
    return this.countryName;
  }

  public void setCountryName(String countryName) {
    this.countryName = countryName;
  }
}
