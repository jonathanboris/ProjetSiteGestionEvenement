package eu.tsi.jee.GestionEvenement.Models.Repertories;

import eu.tsi.jee.GestionEvenement.Models.Dao.Participant;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ParticipantRepo extends CrudRepository<Participant, Long>{
}
