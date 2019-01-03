/**
 * Copyright (C) Deepa Sysisoft Pvt Ltd (2015-2016). All Rights Reserved. This code may not be
 * copied or used without permission.
 */
package models;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.io.Serializable;

public class Location implements Serializable {
  private static final long serialVersionUID = -1L;

  private long id = -1;

  private String streetAddress;

  private String postalCode;

  private String city;

  private String stateProvince;

  @JsonProperty("_id")
  public long getId() {
    return this.id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getStreetAddress() {
    return this.streetAddress;
  }

  public void setStreetAddress(String streetAddress) {
    this.streetAddress = streetAddress;
  }

  public String getPostalCode() {
    return this.postalCode;
  }

  public void setPostalCode(String postalCode) {
    this.postalCode = postalCode;
  }

  public String getCity() {
    return this.city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public String getStateProvince() {
    return this.stateProvince;
  }

  public void setStateProvince(String stateProvince) {
    this.stateProvince = stateProvince;
  }
}
