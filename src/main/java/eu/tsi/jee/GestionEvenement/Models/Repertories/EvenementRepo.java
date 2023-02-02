package eu.tsi.jee.GestionEvenement.Models.Repertories;

import eu.tsi.jee.GestionEvenement.Models.Dao.Evenement;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EvenementRepo extends CrudRepository<Evenement, Long> {
}
