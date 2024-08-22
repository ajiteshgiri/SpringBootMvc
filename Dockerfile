FROM openjdk:8-jdk-alpine
EXPOSE 8080
ADD target/SpringBootMvc.jar SpringBootMvc.jar 
ENTRYPOINT ["java","-jar","/SpringBootMvc.jar"]