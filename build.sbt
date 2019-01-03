name := """play-fweb-saga"""
organization := "com.deepacrushers"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.12.7"

libraryDependencies += guice
libraryDependencies += evolutions
libraryDependencies += "mysql" % "mysql-connector-java" % "8.0.13"
libraryDependencies += javaJdbc
libraryDependencies += "net.jodah" % "failsafe" % "1.1.1"
libraryDependencies += "io.dropwizard.metrics" % "metrics-core" % "4.0.0"
libraryDependencies += "com.google.inject" % "guice" % "4.2.2"
