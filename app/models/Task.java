/**
 * Copyright (C) Deepa Sysisoft Pvt Ltd (2015-2016). All Rights Reserved. This code may not be
 * copied or used without permission.
 */
package models;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.io.Serializable;

public class Task implements Serializable {
  private static final long serialVersionUID = -1L;

  private long id = -1;

  private String title;

  private String description;

  @JsonProperty("_id")
  public long getId() {
    return this.id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getTitle() {
    return this.title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return this.description;
  }

  public void setDescription(String description) {
    this.description = description;
  }
}
