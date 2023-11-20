package korobkin.CLOUDCOM.service;

import korobkin.CLOUDCOM.model.testing.Question;
import korobkin.CLOUDCOM.model.testing.Quiz;

import java.util.Set;

public interface QuestionService {

    public Question addQuestion (Question question);

    public Question updateQuestion(Question question);

    public Set<Question> getQuestion();


    public Question getQuestion(Long questionId);

    public Set<Question> getQuestionsOfQuiz(Quiz quiz);

    public void deleteQuestion(Long quesId);

    public Question get(Long questionsId);
}
