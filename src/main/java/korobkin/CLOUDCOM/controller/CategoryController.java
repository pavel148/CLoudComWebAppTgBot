package korobkin.CLOUDCOM.controller;

import korobkin.CLOUDCOM.model.testing.Category;
import korobkin.CLOUDCOM.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;


    //добавить категории
    @PostMapping("/")
    public ResponseEntity<Category> addCategory(@RequestBody Category category){
       Category category1= this.categoryService.addCategory(category);
       return ResponseEntity.ok(category1);
    }
    //получить категории

    @GetMapping("/{categoryId}")
        public Category getCategory(@PathVariable("categoryId") Long categoryId){
        return this.categoryService.getCategory(categoryId);
    }

    //получить все категории
    @GetMapping("/")
    public ResponseEntity<?> getCategories( ){
        return ResponseEntity.ok(this.categoryService.getCategories());
    }

    //обновление категории
    @PutMapping("/")
    public Category updateCategory(@RequestBody Category category){
        return  this.categoryService.updateCategory(category);
    }
//удаление категории
    @DeleteMapping("/{categoryId}")
    public void deleteCategory(@PathVariable("categoryId") Long categoryId){
        this.categoryService.deleteCategory(categoryId);
    }

}
