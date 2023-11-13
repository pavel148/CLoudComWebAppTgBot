package korobkin.CLOUDCOM.service.impl;

import korobkin.CLOUDCOM.model.testing.Question;
import korobkin.CLOUDCOM.model.testing.Quiz;
import korobkin.CLOUDCOM.repo.QuestionRepository;
import korobkin.CLOUDCOM.repo.QuizeRepository;
import korobkin.CLOUDCOM.service.QuestionService;
import korobkin.CLOUDCOM.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashSet;
import java.util.Set;

public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionRepository questionRepository;


    @Override
    public Question addQuestion(Question question) {
        return this.questionRepository.save(question);
    }

    @Override
    public Question updateQuestion(Question question) {
        return this.questionRepository.save(question);
    }

    @Override
    public Set<Question> getQuestion() {
        return new HashSet<>(this.questionRepository.findAll());
    }

    @Override
    public Question getQuestion(Long questionId) {
        return this.questionRepository.findById(questionId).get();
    }

    @Override
    public Set<Question> getQuestionsOfQuiz(Quiz quiz) {
        return this.questionRepository.findByQuiz(quiz);
    }
}
