package eu.tsi.jee.GestionEvenement.Controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import eu.tsi.jee.GestionEvenement.Models.Dao.Evenement;
import eu.tsi.jee.GestionEvenement.Models.Dao.Participant;
import eu.tsi.jee.GestionEvenement.Models.Services.EvenementServices;
import org.apache.tomcat.util.json.JSONParser;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestParam;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", allowedHeaders = "*", maxAge = 3600)
@Controller
public class EvenementController {

    @Autowired
    EvenementServices evenementServices;



    @GetMapping("/evenement")
    public String goEvenenement( Model model){
        return "evenement";
    }
    @PostMapping("/evenement/create")

    @ResponseBody
    public ResponseEntity addEvenementt(@RequestParam(name = "titre",required = false) String titre,
                                             @RequestParam(name = "date",required = false) String date,
                                             @RequestParam(name = "duree",required = false) double duree,
                                             @RequestParam(name = "max_part",required = false) int max_part,
                                             @RequestParam(name = "desc",required = false) String description,
                                             @RequestParam(name = "org",required = false) String organisation,
                                             @RequestParam(name = "type_event",required = false) String type_event,
                                             Model model){

        Evenement evenement = new Evenement(titre,date,duree,max_part,description,organisation,type_event);
        try{
            evenementServices.create(evenement);

            return new ResponseEntity("{\"status\" : \"OK\"}", HttpStatus.OK);

        }catch (Exception err){
            return new ResponseEntity("{\"status\" :"+err+"}", HttpStatus.EXPECTATION_FAILED);
        }

    }

    @PostMapping("/evenement/update")
    @ResponseBody
    public ResponseEntity updateEvenement(@RequestParam(name = "titre",required = false) String titre,
                                @RequestParam(name = "date",required = false) String date,
                                @RequestParam(name = "duree",required = false) double duree,
                                @RequestParam(name = "max_part",required = false) int max_part,
                                @RequestParam(name = "desc",required = false) String description,
                                @RequestParam(name = "org",required = false) String organisation,
                                @RequestParam(name = "type_event",required = false) String type_event,
                                @RequestParam(name = "currentId",required = false) int currentId,
            Model model){
        Evenement newEvenement = new Evenement(titre,date,duree,max_part,description,organisation,type_event);
        try{
            evenementServices.update(newEvenement,currentId);

            return new ResponseEntity("{\"status\" : \"OK\"}", HttpStatus.OK);

        }catch (Exception err){
            return new ResponseEntity("{\"status\" :"+err+"}", HttpStatus.EXPECTATION_FAILED);
        }

    }

    @PostMapping("/evenement/delete")
    @ResponseBody
    public ResponseEntity deleteEvenement(@RequestParam(name = "id",required = false) long id,
            Model model){
        try{
            evenementServices.delete(id);
            return new ResponseEntity("{\"status\" : \"OK\"}", HttpStatus.OK);

        }catch (Exception err){
            return new ResponseEntity("{\"status\" :"+err+"}", HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping("/evenement/liste")
    @ResponseBody
    public ResponseEntity getEvenements(Model model){
        try{
            List<Evenement> evenementList = evenementServices.getAll();
            model.addAttribute("evenements",evenementList);
            ObjectMapper objectMapper=new ObjectMapper();
            List<HashMap> dataAsMap = objectMapper.readValue(evenementList.toString(), List.class);
            return new ResponseEntity(dataAsMap, HttpStatus.OK);

        }catch (Exception err){
            return new ResponseEntity("{\"status\" :"+err+"}", HttpStatus.EXPECTATION_FAILED);
        }
    }
    @GetMapping("/evenement/getId")
    @ResponseBody
    public ResponseEntity getevenement(
            @RequestParam(name = "id",required = false) long id,
            Model model){
        try{
            Evenement evenement = evenementServices.getById(id);
            ObjectMapper objectMapper=new ObjectMapper();
            List<HashMap> dataAsMap = objectMapper.readValue("["+evenement.toString()+"]", List.class);
            return new ResponseEntity(dataAsMap, HttpStatus.OK);

        }catch (Exception err){
            return new ResponseEntity("{\"status\" :"+err+"}", HttpStatus.EXPECTATION_FAILED);
        }
    }


}
