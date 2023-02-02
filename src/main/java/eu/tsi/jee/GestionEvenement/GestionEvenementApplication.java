package eu.tsi.jee.GestionEvenement;

import eu.tsi.jee.GestionEvenement.Controllers.LoginController;
import eu.tsi.jee.GestionEvenement.Models.Dao.Login;
import eu.tsi.jee.GestionEvenement.Models.Services.LoginServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class GestionEvenementApplication {

	public static void main(String[] args) {
		SpringApplication.run(GestionEvenementApplication.class, args);
	}

}
