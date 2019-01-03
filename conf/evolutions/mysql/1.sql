# --- !Ups
CREATE TABLE `user` (
  `id` INT NOT NULL AUTO_INCREMENT, 
  `username` VARCHAR(45) NOT NULL, 
  `name` VARCHAR(256),
  `email` VARCHAR(256),
  `password` VARCHAR(256) NOT NULL, 
  `enabled` TINYINT(1), 
  `alias` VARCHAR(256) NULL, 
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;


# --- !Downs
DROP 
  TABLE IF EXISTS `user`;

# --- !Ups
CREATE TABLE `user_auth_token` (
  `username` VARCHAR(45) NOT NULL, 
  `token` VARCHAR(256) NOT NULL
) ENGINE = InnoDB;

# --- !Downs
DROP
   TABLE IF EXISTS `user_auth_token`;
   
# --- !Ups
CREATE TABLE `authorities` (
  `username` VARCHAR(45) NOT NULL, 
  `authority` VARCHAR(256) NOT NULL,
    INDEX `auth_username_idx` (`username` ASC)
    ) ENGINE = InnoDB;

# --- !Downs
DROP TABLE IF EXISTS `authorities`;

  # --- !Ups
  CREATE TABLE `region` (
    `id` INT NOT NULL AUTO_INCREMENT
    
     
      ,`regionName` VARCHAR(256)
      
    
  
   ,PRIMARY KEY (`id`)
   
  ,FULLTEXT KEY `region_fulltext` (
           `regionName`
     )
  
   
    ) 
  ENGINE = InnoDB DEFAULT CHARSET=utf8mb4;

  # --- !Downs
  DROP TABLE IF EXISTS `region`;
    # --- !Ups
  CREATE TABLE `country` (
    `id` INT NOT NULL AUTO_INCREMENT
    
     
      ,`countryName` VARCHAR(256)
      
                 ,`region_id` INT NULL
       
               ,INDEX `country_region_idx` (`region_id` ASC)
       
   ,PRIMARY KEY (`id`)
   
  ,FULLTEXT KEY `country_fulltext` (
           `countryName`
     )
  
                ,CONSTRAINT `country_region_region` 
        FOREIGN KEY (`region_id`)
          REFERENCES `region` (`id`)
          ON DELETE NO ACTION
    ON UPDATE NO ACTION
       
    ) 
  ENGINE = InnoDB DEFAULT CHARSET=utf8mb4;

  # --- !Downs
  DROP TABLE IF EXISTS `country`;
    # --- !Ups
  CREATE TABLE `location` (
    `id` INT NOT NULL AUTO_INCREMENT
    
     
      ,`streetAddress` VARCHAR(256)
      
  
     
      ,`postalCode` VARCHAR(45)
      
  
     
      ,`city` VARCHAR(256)
      
  
     
      ,`stateProvince` VARCHAR(45)
      
                 ,`country_id` INT NULL
       
               ,INDEX `location_country_idx` (`country_id` ASC)
       
   ,PRIMARY KEY (`id`)
   
  ,FULLTEXT KEY `location_fulltext` (
           `streetAddress`
          ,  `postalCode`
          ,  `city`
          ,  `stateProvince`
     )
  
                ,CONSTRAINT `location_country_country` 
        FOREIGN KEY (`country_id`)
          REFERENCES `country` (`id`)
          ON DELETE NO ACTION
    ON UPDATE NO ACTION
       
    ) 
  ENGINE = InnoDB DEFAULT CHARSET=utf8mb4;

  # --- !Downs
  DROP TABLE IF EXISTS `location`;
    # --- !Ups
  CREATE TABLE `department` (
    `id` INT NOT NULL AUTO_INCREMENT
    
     
      ,`departmentName` VARCHAR(256)
      
                 ,`location_id` INT NULL
              
               ,INDEX `department_location_idx` (`location_id` ASC)
              
   ,PRIMARY KEY (`id`)
   
  ,FULLTEXT KEY `department_fulltext` (
           `departmentName`
     )
  
                ,CONSTRAINT `department_location_location` 
        FOREIGN KEY (`location_id`)
          REFERENCES `location` (`id`)
          ON DELETE NO ACTION
    ON UPDATE NO ACTION
              
    ) 
  ENGINE = InnoDB DEFAULT CHARSET=utf8mb4;

  # --- !Downs
  DROP TABLE IF EXISTS `department`;
    # --- !Ups
  CREATE TABLE `employee` (
    `id` INT NOT NULL AUTO_INCREMENT
    
     
      ,`firstName` VARCHAR(45)
      
  
     
      ,`lastName` VARCHAR(45)
      
  
     
      ,`email` VARCHAR(256)
      
  
     
      ,`phoneNumber` VARCHAR(45)
      
  
     
    ,`hireDate` DATETIME
      
  
     
    ,`salary` INT
      
  
     
    ,`commissionPct` INT
      
                         
                       
   ,PRIMARY KEY (`id`)
   
  ,FULLTEXT KEY `employee_fulltext` (
           `firstName`
          ,  `lastName`
          ,  `email`
          ,  `phoneNumber`
     )
  
                        
    ) 
  ENGINE = InnoDB DEFAULT CHARSET=utf8mb4;

  # --- !Downs
  DROP TABLE IF EXISTS `employee`;
    # --- !Ups
  CREATE TABLE `job` (
    `id` INT NOT NULL AUTO_INCREMENT
    
     
      ,`jobTitle` VARCHAR(256)
      
  
     
    ,`minSalary` INT
      
  
     
    ,`maxSalary` INT
      
                  
                
   ,PRIMARY KEY (`id`)
   
  ,FULLTEXT KEY `job_fulltext` (
           `jobTitle`
     )
  
                 
    ) 
  ENGINE = InnoDB DEFAULT CHARSET=utf8mb4;

  # --- !Downs
  DROP TABLE IF EXISTS `job`;
    # --- !Ups
  CREATE TABLE `task` (
    `id` INT NOT NULL AUTO_INCREMENT
    
     
      ,`title` VARCHAR(45)
      
  
     
      ,`description` VARCHAR(1024)
      
           
         
   ,PRIMARY KEY (`id`)
   
  ,FULLTEXT KEY `task_fulltext` (
           `title`
          ,  `description`
     )
  
          
    ) 
  ENGINE = InnoDB DEFAULT CHARSET=utf8mb4;

  # --- !Downs
  DROP TABLE IF EXISTS `task`;
  