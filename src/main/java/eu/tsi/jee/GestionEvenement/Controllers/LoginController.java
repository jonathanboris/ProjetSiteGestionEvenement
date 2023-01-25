package eu.tsi.jee.GestionEvenement.Controllers;

import eu.tsi.jee.GestionEvenement.Models.Dao.Login;
import eu.tsi.jee.GestionEvenement.Models.Services.LoginServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.CollectionUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;


@Controller
public class LoginController {
    @Autowired
    LoginServices loginServices;

    @PostMapping("login/create")
    @ResponseBody
    public ResponseEntity createLogin(@RequestParam(name = "nom",required = false) String nom,
                                      @RequestParam(name = "prenom",required = false) String prenom,
                                      @RequestParam(name = "privilege",required = false) String privilege,
                                      @RequestParam(name = "login",required = false) String login,
                                      @RequestParam(name = "password",required = false) String password,
                                      Model model){
        String last_conn = "";
        String create_date = new SimpleDateFormat("dd-MM-yyyy").format(new Date());
        Login login1 = new Login(nom,prenom,privilege,login,password,create_date,last_conn);
        try{
            loginServices.create(login1);

            return new ResponseEntity("{\"status\" : \"OK\"}", HttpStatus.OK);

        }catch (Exception err){
            return new ResponseEntity("{\"status\" :"+err+"}", HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping("login/validation")
    @ResponseBody
    public ResponseEntity validateLogin(@RequestParam(name = "login",required = false) String login,
                                        @RequestParam(name = "password",required = false) String password,
            Model model){

        try{
            List<Login> logins = loginServices.getAll().stream()
                    .filter(log -> log.getLogin().equals(login) && log.getPassword().equals(password))
                    .collect(Collectors.toList());

            System.out.println(logins+","+login+","+password);
                return new ResponseEntity(logins, HttpStatus.OK);

        }catch (Exception err){
            return new ResponseEntity("{\"status\" :"+err+"}", HttpStatus.EXPECTATION_FAILED);
        }
    }
}
