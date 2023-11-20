package korobkin.CLOUDCOM.repo;

import korobkin.CLOUDCOM.model.testing.Category;
import korobkin.CLOUDCOM.model.testing.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuizRepository extends JpaRepository<Quiz, Long> {
    public List<Quiz> findByCategory(Category category);

    public List<Quiz>  findByActive(Boolean b);

    public List<Quiz> findByCategoryAndActive(Category c,Boolean b );
}
