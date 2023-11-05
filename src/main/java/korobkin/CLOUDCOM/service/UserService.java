package korobkin.CLOUDCOM.service;

import korobkin.CLOUDCOM.model.User;
import korobkin.CLOUDCOM.model.UserRole;

import java.util.Set;

public interface UserService {

    //создаем пользователя

    public User createUser(User user, Set<UserRole> userRoles) throws Exception;
    //получить пользователя по его имени
    public User getUser(String username);

    //удалить пользователя по ключу - id
    public void deleteUser(Long userId);
}
