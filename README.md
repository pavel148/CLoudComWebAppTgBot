# CLOUDCOMWebApp
## Ветка server
### О проекте
Добро пожаловать в репозиторий для проекта от компании  "CLOUDCOM". В этом проекте  используеться Spring Framework и Spring Boot, а также библиотеки spring-boot-starter-data-jdbc и mysql-connector-java. Внутри проекта реализованы контроллеры (controllers), модели (models), репозитории (repo) и сервисы (service), обеспечивая связь с базой данных.

Спасибо за проявленный интерес. 



Скачать для использование:  git clone -b server https://github.com/pavel148/CLoudComWebAppTgBot.git

необходимо скачать СТРОГО 11 Java (или изменить pom.xml на 14 и установить 14 java) ubuntu 22.04 : sudo apt update              sudo apt install openjdk-11-jdk


Собрать с .jar ./mvnw clean install\

или  запустить врежиме разработки ./mvnw spring-boot:run


ИЗМЕНИТЬ в   application.properties  url/username/password/ на пользовательские 
*Если развертываете локально для тестирования необходимо запустить MAMP/

Если вы все правильно сделали то сервер поднят. Переходите к клиенту.
