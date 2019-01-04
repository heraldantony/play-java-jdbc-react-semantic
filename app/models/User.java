/**
 * Copyright (C) Deepa Sysisoft Pvt Ltd (2015-2016). All Rights Reserved. This code may not be
 * copied or used without permission.
 */
package models;

import java.io.Serializable;
import java.util.List;

public class User implements Serializable {
  private static final long serialVersionUID = -973582979574613588L;

  private long id = -1;

  private String username;

  private String name;

  private String email;

  private String password;

  private String alias;

  private boolean enabled;

  private String token;

  private List<String> authorities;

  public long getId() {
    return this.id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getUsername() {
    return this.username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return this.email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return this.password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getAlias() {
    return this.alias;
  }

  public void setAlias(String alias) {
    this.alias = alias;
  }

  public boolean getEnabled() {
    return this.enabled;
  }

  public void setEnabled(boolean enabled) {
    this.enabled = enabled;
  }

  public String getToken() {
    return token;
  }

  public void setToken(String token) {
    this.token = token;
  }

  public List<String> getAuthorities() {
    return authorities;
  }

  public void setAuthorities(List<String> authorities) {
    this.authorities = authorities;
  }
}
