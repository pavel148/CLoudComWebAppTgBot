package korobkin.CLOUDCOM.service;

import korobkin.CLOUDCOM.model.testing.Category;
import org.springframework.http.ResponseEntity;

import java.util.Set;

public interface CategoryService {

    public Category addCategory(Category category);
    public Category updateCategory(Category category);
    public Set<Category> getCategories();
    public Category getCategory(Long categoryId);

    public void deleteCategory(Long categoryId);


}
