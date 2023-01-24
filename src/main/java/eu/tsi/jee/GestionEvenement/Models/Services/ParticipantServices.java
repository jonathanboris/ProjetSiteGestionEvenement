package eu.tsi.jee.GestionEvenement.Models.Services;

import eu.tsi.jee.GestionEvenement.Models.Dao.Evenement;
import eu.tsi.jee.GestionEvenement.Models.Dao.Participant;
import eu.tsi.jee.GestionEvenement.Models.Repertories.ParticipantRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParticipantServices {
    @Autowired
    private ParticipantRepo repository;

    public boolean create(Participant participant){
        try{
            repository.save(participant);
            return true;
        }catch (Exception err){
            return false;
        }
    }

    public boolean update(Participant newParticipant,long id){
        try{
            Participant participant = repository.findById(id).get();
            participant.setNom(newParticipant.getNom());
            participant.setPrenom(newParticipant.getPrenom());
            participant.setDate_naiss(newParticipant.getDate_naiss());
            participant.setEntreprise(newParticipant.getEntreprise());
            participant.setEvenement(newParticipant.getEvenement());
            participant.setMail(newParticipant.getMail());
            participant.setObservation(newParticipant.getObservation());
            repository.save(participant);
            return true;
        }catch (Exception err){
            return false;
        }
    }

    public List<Participant> getAll(){
        List<Participant> participants = (List<Participant>) repository.findAll();
        return participants;
    }

    public Participant getById(long id){
        return repository.findById(id).get();
    }

    public boolean delete(long id){
        try{
            Participant participant = repository.findById(id).get();
            repository.delete(participant);
            return true;
        }catch (Exception err){
            return false;
        }
    }
}
