package eu.tsi.jee.GestionEvenement.Models.Repertories;


import eu.tsi.jee.GestionEvenement.Models.Dao.Login;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepo extends CrudRepository<Login, Long> {
}
