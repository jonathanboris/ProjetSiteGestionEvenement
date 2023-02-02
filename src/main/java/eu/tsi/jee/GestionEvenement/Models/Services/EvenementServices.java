package eu.tsi.jee.GestionEvenement.Models.Services;

import eu.tsi.jee.GestionEvenement.Models.Dao.Evenement;
import eu.tsi.jee.GestionEvenement.Models.Dao.Participant;
import eu.tsi.jee.GestionEvenement.Models.Repertories.EvenementRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EvenementServices {
    @Autowired
    private EvenementRepo repository;

    public boolean create(Evenement evenement){
        try{
            repository.save(evenement);
            return true;
        }catch (Exception err){
            return false;
        }
    }

    public boolean update(Evenement newEvenement,int id){
        try{
            Evenement evenement = repository.findById((long)id).get();
            evenement.setTitre(newEvenement.getTitre());
            evenement.setDescription(newEvenement.getDescription());
            evenement.setDate(newEvenement.getDate());
            evenement.setDuree(newEvenement.getDuree());
            evenement.setMaxpart(newEvenement.getMaxpart());
            evenement.setOrganisateur(newEvenement.getOrganisateur());
            evenement.setType_event(newEvenement.getType_event());
            repository.save(evenement);
            return true;
        }catch (Exception err){
            return false;
        }
    }

    public boolean addParticipant(Participant participant,long id){
        try{
            this.getById(id).setParticipant(participant);
            return true;
        }catch (Exception err){
            return false;
        }
    }

    public List<Evenement> getAll(){
        List<Evenement> evenements = (List<Evenement>) repository.findAll();
        return evenements;
    }

    public Evenement getById(long id){
        return repository.findById(id).get();
    }

    public boolean delete(long id){
        try{
            Evenement evenement = repository.findById(id).get();
            repository.delete(evenement);
            return true;
        }catch (Exception err){
            return false;
        }
    }

    public boolean deleteParticipant(long idEv,Participant participant){
        try{
            Evenement evenement = repository.findById(idEv).get();
            evenement.deleteParticipant(participant);
            repository.save(evenement);
            return true;
        }catch (Exception err){
            return false;
        }
    }
}
