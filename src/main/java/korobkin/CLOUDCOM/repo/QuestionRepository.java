package korobkin.CLOUDCOM.repo;

import korobkin.CLOUDCOM.model.testing.Question;
import korobkin.CLOUDCOM.model.testing.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface QuestionRepository extends JpaRepository <Question, Long> {
    Set<Question> findByQuiz(Quiz quiz);
}
