# GUIDE D'INSTALLATION

## Resume
> Ce code source est celui d'une application de gestion d'evenement developper en java spring-boot MVC, ce document est un guide d'installation utile au deployement de la solution.
les commandes ci-dessous sont dediees au systeme d'exploitation Linux, mais les environnements requisent reste identiques pour tout autres systemes.

> ### Prerequis
>> #### Java 17 :
>> - $ sudo apt install openjdk-11-jdk
>> - $ java -version
>> #### Maven :
>> - $ wget https://mirrors.estointernet.in/apache/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz
>> - $ tar -xvf apache-maven-3.6.3-bin.tar.gz
>> - $ mv apache-maven-3.6.3 /opt/
>> - M2_HOME='/opt/apache-maven-3.6.3'
PATH="$M2_HOME/bin:$PATH"
export PATH
>> - $ mvn -version
>> #### PostgreSQL  :
>> - sudo apt-get install postgresql



### Systeme d'exploitation:
> Recommandation
>   - Processor: intel® Core™ i5-3210M CPU @ 2.50GHz × 4
>   - Random access memory (RAM): 8,0 GiB
>   - Hard disk capacity: 60,0 GiB



### Installation et execution
>  - Copier le code source du projet
>  - Configurer les parametres de connexion a votre SGBD PostgreSQL dans /src/main/resources/application.properties
> - Executer cette commande dans la racine de projet: $ sudo mvn spring-boot:run
> - Aller sur le lien http://127.0.0.1:8080
>- login: test && password: test

### Contact:
> Mail: ouedraogojonathanboris@gmail.com