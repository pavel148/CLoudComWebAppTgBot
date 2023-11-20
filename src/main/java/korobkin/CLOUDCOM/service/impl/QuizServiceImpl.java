package korobkin.CLOUDCOM.service.impl;

import korobkin.CLOUDCOM.model.testing.Category;
import korobkin.CLOUDCOM.model.testing.Quiz;
import korobkin.CLOUDCOM.repo.QuizRepository;
import korobkin.CLOUDCOM.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
@Service
public class QuizServiceImpl implements QuizService {

    @Autowired
    private QuizRepository quizeRepository;


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

            this.quizeRepository.deleteById(quizId);
    }

    @Override
    public List<Quiz> getQuizzesOfCategory(Category category) {
        return this.quizeRepository.findByCategory(category);
    }


    //Получить активные категории тестов
    @Override
    public List<Quiz> getActiveQuizzes() {
        return this.quizeRepository.findByActive(true);
    }

    @Override
    public List<Quiz> getActiveQuizzesOfCategory(Category c) {
        return this.quizeRepository.findByCategoryAndActive(c,true);
    }






}
