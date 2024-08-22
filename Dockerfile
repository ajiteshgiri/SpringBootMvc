FROM openjdk:8-jdk-alpine
EXPOSE 8080
ADD target/SpringBootMvc.war SpringBootMvc.war 
ENTRYPOINT ["java","-jar","/SpringBootMvc.war"]