package korobkin.CLOUDCOM.repo;

import korobkin.CLOUDCOM.model.testing.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizeRepository extends JpaRepository<Quiz, Long> {
}
