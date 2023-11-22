# Stage 1: Build the Maven project
FROM maven:latest AS stage1
WORKDIR /app
COPY pom.xml /app/
COPY src /app/src/
RUN mvn clean package -DskipTests

# Stage 2: Create the final image with the JAR file
FROM openjdk:11 as final
WORKDIR /app
COPY --from=stage1 /app/target/*.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
