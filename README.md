# play-java-react-semantic
A non-trivial app using play framework, java, JDBC, react, redux, redux-form, redux-saga, semantic ui  that does CRUD with one-to-one, one-to-many, many-to-many relationships between entities.

  This app uses ideas from Sacha Barber at https://www.codeproject.com/Articles/1190608/Madcap-Idea-Part-Bringing-Play-Back-End-Into-The-F , but differs from it, in the sense there is only one server (play) for both API requests and frontend.  Sacha Barber's idea uses webpack dev server for the frontend, with a proxy to the play backend server for handling API requests.
  
## Suicrux
https://github.com/Metnew/suicrux
This app uses redux-saga instead of "awral".

## Semantic UI
https://github.com/Semantic-Org/Semantic-UI-React

## MySQL
This app uses MySQL 8.0, but any 5.x+ version will work
https://www.mysql.com/

Right now there is a problem running the "evolutions" script, so create the db schema, and then run
conf/evolutions/mysql/create-tables.sql using the newly created schema. Also modify conf/application.conf
to use the correct schema, and db user as explained later in this README.

## Installation
git clone https://github.com/heraldantony/play-java-react-semantic

cd play-java-react-semantic

## To run the app
sbt "run 9900"

We use port 9900, since Eclipse uses port 9000 which is the default port for Play Framework. If you are not running Eclipse, and if no other app uses port 9000, then you can just do
sbt run


### Config changes
The following values have to be changed in conf/application.conf

 db {
    
  default.driver=com.mysql.cj.jdbc.Driver
    default.url="jdbc:mysql://localhost/emp"
    default.username=emp
    default.password="emp123"
    default.jndiName=DefaultDS
    default.logSql=true
}
 

## Integration/e2e testing with Cypress

TODO database seeding

Start cypress, and run the tests from the dashboard
npm run cypress:open
