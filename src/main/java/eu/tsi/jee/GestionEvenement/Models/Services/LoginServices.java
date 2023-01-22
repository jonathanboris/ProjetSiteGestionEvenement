package eu.tsi.jee.GestionEvenement.Models.Services;

import eu.tsi.jee.GestionEvenement.Models.Dao.Login;
import eu.tsi.jee.GestionEvenement.Models.Repertories.LoginRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServices {

    @Autowired
    private LoginRepo repository;

    public boolean create(Login login){
        try{
            repository.save(login);
            return true;
        }catch (Exception err){
            return false;
        }
    }

    public boolean findLoginExist(Login login){
            return repository.equals(login);
    }
}
