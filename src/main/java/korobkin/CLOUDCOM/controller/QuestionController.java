package korobkin.CLOUDCOM.controller;

import korobkin.CLOUDCOM.model.testing.Question;
import korobkin.CLOUDCOM.model.testing.Quiz;
import korobkin.CLOUDCOM.service.QuestionService;
import korobkin.CLOUDCOM.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/question")
public class QuestionController {


    @Autowired
    private QuestionService service;

    @Autowired
    private QuizService quizService;

    @PostMapping("/")
    public ResponseEntity<Question> add(@RequestBody Question question){
        return ResponseEntity.ok(this.service.addQuestion(question));
    }

    //Обновление вопроса

    @PutMapping("/")
    public ResponseEntity<Question>update(@RequestBody Question question) {
        return ResponseEntity.ok(this.service.updateQuestion(question));
    }


    //получение всех вопросов
    @GetMapping("/quiz/{qid}")
    public ResponseEntity<?> getQuestionsOfQuiz(@PathVariable("qid") Long qid) {
//             Quiz quiz = new Quiz();
//             quiz.setqId(qid);
//             Set<Question> questionsOfQuiz= this.service.getQuestionsOfQuiz(quiz);
//             return  ResponseEntity.ok(questionsOfQuiz);


        Quiz quiz= this.quizService.getQuiz(qid);
        Set<Question> questions= quiz.getQuestions();

        List<Question> list = new ArrayList<>(questions);
        if(list.size()>Integer.parseInt(quiz.getNumberOfQuestions())){
            list=list.subList(0,Integer.parseInt(quiz.getNumberOfQuestions()+1));
        }
            list.forEach((q)->{
                q.setAnswer("");
            });


        Collections.shuffle(list);
        return  ResponseEntity.ok(list);
    }

    //получить единственный вопрос
    @GetMapping("/{quesId}")
    public Question get(@PathVariable("quesId") Long quesId){
        return  this.service.getQuestion(quesId);
    }

    @DeleteMapping("/{quesId}")
    public void delete(@PathVariable("quesId") Long quesId){
        this.service.deleteQuestion(quesId);
    }


    @GetMapping("/quiz/all/{qid}")
    public ResponseEntity<?> getQuestionsOfQuizAdmin(@PathVariable("qid") Long qid) {
             Quiz quiz = new Quiz();
             quiz.setqId(qid);
             Set<Question> questionsOfQuiz= this.service.getQuestionsOfQuiz(quiz);
             return  ResponseEntity.ok(questionsOfQuiz);



        //return  ResponseEntity.ok(list);
    }


    //Оценка теста
    @PostMapping("/eval-quiz")
    public ResponseEntity<?> evalQuiz(@RequestBody List<Question> questions){
        System.out.println(questions);

        double marksGot=0;
        int correctAnswer=0;
        int  attempted=0;
        for(Question q : questions){
            //отдельные вопросы
         Question question = this.service.get(q.getQuestionId());//внимательно
            if(question.getAnswer().equals(q.getGivenAnswer())){
                //правильные ответы
                correctAnswer++;

                double marksSingle= Double.parseDouble(questions.get(0).getQuiz().getMaxMarks())/questions.size();

                marksGot+=marksSingle;

            }
            if(q.getGivenAnswer()!=null){
                attempted++;
            }



        }
        Map<String, Object> map = Map.of("marksGot",marksGot,"correctAnswer",correctAnswer,"attempted",attempted);
        return ResponseEntity.ok(map);
    }

}
