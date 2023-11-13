package korobkin.CLOUDCOM.service.impl;

import korobkin.CLOUDCOM.helper.UserFoundException;
import korobkin.CLOUDCOM.model.User;
import korobkin.CLOUDCOM.model.UserRole;
import korobkin.CLOUDCOM.repo.RoleRepository;
import korobkin.CLOUDCOM.repo.UserRepository;
import korobkin.CLOUDCOM.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserServiceImpl implements UserService {


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;
//Создаем пользователя
    @Override
    public User createUser(User user, Set<UserRole> userRoles) throws Exception {
        User local = this.userRepository.findByUsername(user.getUsername());
        if(local!=null){
            System.out.println("Пользователь уже зарегистрирован!!");
            throw new UserFoundException("Такой пользователь уже существует");
        }else {
            //создание пользователя
            for(UserRole ur: userRoles){
                roleRepository.save(ur.getRole());
            }

            user.getUserRoles().addAll(userRoles);
           local= this.userRepository.save(user);

        }
        return local;
    }

    //Получить пользователя по его имени - username
    @Override
    public User getUser(String username) {
        return this.userRepository.findByUsername(username);
    }

    @Override
    public void deleteUser(Long userId) {
        this.userRepository.deleteById(userId);
    }
}
