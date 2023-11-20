package korobkin.CLOUDCOM.controller;


import korobkin.CLOUDCOM.model.testing.Category;
import korobkin.CLOUDCOM.model.testing.Quiz;
import korobkin.CLOUDCOM.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/quiz")
public class QuizController {

    @Autowired
    private QuizService quizService;

    @PostMapping("/")
    public ResponseEntity<Quiz> add(@RequestBody Quiz quiz){
        return  ResponseEntity.ok(this.quizService.addQuiz(quiz));
    }

    //обновление теста(теста - опросника)
    @PutMapping("/")
    public ResponseEntity<Quiz> update(@RequestBody Quiz quiz){
        return ResponseEntity.ok((this.quizService.updateQuiz(quiz)));
    }

    @GetMapping("/")
    public ResponseEntity<?> quizzes(){
        return  ResponseEntity.ok(this.quizService.getQuizzes());
    }

    //получить текущий тест
    @GetMapping("/{qid}")
    public Quiz quiz(@PathVariable("qid") Long qid){
        return this.quizService.getQuiz(qid);
    }

    //удаление теста

    @DeleteMapping("/{qid}")
    public void delete(@PathVariable("qid") Long qid){
        this.quizService.deleteQuiz(qid);
    }

    @GetMapping("/category/{cid}")
    public List<Quiz> getQuizzesOfCategory(@PathVariable("cid") Long cid){
        Category category = new Category();
        category.setCid(cid);
        return this.quizService.getQuizzesOfCategory(category);


    }


    //получить активные тесты
    @GetMapping("/active")
    public List<Quiz> getActiveQuizzes(){
        return  this.quizService.getActiveQuizzes();
    }

    //получить активные тесты по категориям
    @GetMapping("/category/active/{cid}")
    public List<Quiz> getActiveQuizzes(@PathVariable("cid") Long cid){
        Category category = new Category();
        category.setCid(cid);
        return  this.quizService.getActiveQuizzesOfCategory(category);
    }


}
