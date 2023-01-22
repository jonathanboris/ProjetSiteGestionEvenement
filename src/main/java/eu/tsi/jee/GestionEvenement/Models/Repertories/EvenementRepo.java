package eu.tsi.jee.GestionEvenement.Models.Repertories;

import eu.tsi.jee.GestionEvenement.Models.Dao.Evenement;
import eu.tsi.jee.GestionEvenement.Models.Dao.Participant;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EvenementRepo extends CrudRepository<Evenement, Long> {
}
