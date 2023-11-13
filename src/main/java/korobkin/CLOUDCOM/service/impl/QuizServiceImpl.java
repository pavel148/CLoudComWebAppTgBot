package korobkin.CLOUDCOM.service.impl;

import korobkin.CLOUDCOM.model.testing.Quiz;
import korobkin.CLOUDCOM.repo.QuizeRepository;
import korobkin.CLOUDCOM.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashSet;
import java.util.Set;

public class QuizServiceImpl implements QuizService {

    @Autowired
    private QuizeRepository quizeRepository;


    @Override
    public Quiz addQuiz(Quiz quiz) {
        return this.quizeRepository.save(quiz);
    }

    @Override
    public Quiz updateQuiz(Quiz quiz) {
        return this.quizeRepository.save(quiz);
    }

    @Override
    public Set<Quiz> getQuizzes() {
        return new HashSet<>(this.quizeRepository.findAll());
    }

    @Override
    public Quiz getQuiz(Long quizId) {
        return this.quizeRepository.findById(quizId).get();
    }

    @Override
    public void deleteQuiz(Long quizId) {
            Quiz quiz=new Quiz();
            quiz.setqId(quizId);
            this.quizeRepository.delete(quiz);
    }
}
