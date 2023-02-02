package eu.tsi.jee.GestionEvenement.Controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import eu.tsi.jee.GestionEvenement.Models.Dao.Evenement;
import eu.tsi.jee.GestionEvenement.Models.Dao.Participant;
import eu.tsi.jee.GestionEvenement.Models.Services.EvenementServices;
import eu.tsi.jee.GestionEvenement.Models.Services.ParticipantServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
@CrossOrigin(origins = "*", allowedHeaders = "*", maxAge = 3600)
@Controller
public class ParticipantController {

    @Autowired
    ParticipantServices participantServices;
    @Autowired
    EvenementServices evenementServices;

    @GetMapping("/participant")
    public String goParticipant( Model model){
        return "participant";
    }
    @PostMapping("/participant/create")
    @ResponseBody
    public ResponseEntity addParticipant(@RequestParam(name = "nom",required = false) String nom,
                                     @RequestParam(name = "prenom",required = false) String prenom,
                                     @RequestParam(name = "mail",required = false) String mail,
                                     @RequestParam(name = "date_naiss",required = false) String date_naiss,
                                     @RequestParam(name = "entrep",required = false) String entrep,
                                     @RequestParam(name = "observ",required = false) String observ,
                                     @RequestParam(name = "event_id",required = false) long event_id,
                                     Model model){
        Evenement evenement = evenementServices.getById(event_id);
        Participant participant = new Participant(nom,prenom,mail,date_naiss,entrep,observ,evenement);
        try{

            participantServices.create(participant);

            return new ResponseEntity("{\"status\" : \"OK\"}", HttpStatus.OK);

        }catch (Exception err){
            return new ResponseEntity("{\"status\" :"+err+"}", HttpStatus.EXPECTATION_FAILED);
        }

    }

    @PostMapping("/participant/update")
    @ResponseBody
    public ResponseEntity updateParticipant(@RequestParam(name = "nom",required = false) String nom,
                                            @RequestParam(name = "prenom",required = false) String prenom,
                                            @RequestParam(name = "mail",required = false) String mail,
                                            @RequestParam(name = "date_naiss",required = false) String date_naiss,
                                            @RequestParam(name = "entrep",required = false) String entrep,
                                            @RequestParam(name = "observ",required = false) String observ,
                                            @RequestParam(name = "event_id",required = false) long event_id,
                                          @RequestParam(name = "currentId",required = false) int currentId,
                                          Model model){
        Evenement evenement = evenementServices.getById(event_id);
        Participant newParticipant = new Participant(nom,prenom,mail,date_naiss,entrep,observ,evenement);
        try{
            participantServices.update(newParticipant,currentId);

            return new ResponseEntity("{\"status\" : \"OK\"}", HttpStatus.OK);

        }catch (Exception err){
            return new ResponseEntity("{\"status\" :"+err+"}", HttpStatus.EXPECTATION_FAILED);
        }

    }

    @PostMapping("/participant/delete")
    @ResponseBody
    public ResponseEntity deleteParticipant(
            @RequestParam(name = "idEvent",required = false) long idEvent,
            @RequestParam(name = "id",required = false) long id,
                                          Model model){
        try{
           participantServices.delete(idEvent,id);
            return new ResponseEntity("{\"status\" : \"OK\"}", HttpStatus.OK);

        }catch (Exception err){
            return new ResponseEntity("{\"status\" :"+err+"}", HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping("/participant/liste")
    @ResponseBody
    public ResponseEntity getparticipants(Model model){
        try{
            List<Participant> participantList = participantServices.getAll();
            ObjectMapper objectMapper=new ObjectMapper();
            List<HashMap> dataAsMap = objectMapper.readValue(participantList.toString(), List.class);
            return new ResponseEntity(dataAsMap, HttpStatus.OK);

        }catch (Exception err){
            return new ResponseEntity("{\"status\" :"+err+"}", HttpStatus.EXPECTATION_FAILED);
        }
    }
    @GetMapping("/participant/getId")
    @ResponseBody
    public ResponseEntity getparticipant(
            @RequestParam(name = "id",required = false) long id,
            Model model){
        try{
            Participant participant = participantServices.getById(id);
            ObjectMapper objectMapper=new ObjectMapper();
            List<HashMap> dataAsMap = objectMapper.readValue("["+participant.toString()+"]", List.class);
            return new ResponseEntity(dataAsMap, HttpStatus.OK);

        }catch (Exception err){
            return new ResponseEntity("{\"status\" :"+err+"}", HttpStatus.EXPECTATION_FAILED);
        }
    }
}
