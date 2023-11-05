package korobkin.CLOUDCOM;

import korobkin.CLOUDCOM.model.Role;
import korobkin.CLOUDCOM.model.User;
import korobkin.CLOUDCOM.model.UserRole;
import korobkin.CLOUDCOM.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class CloudcomApplication  implements CommandLineRunner {

	@Autowired
	private UserService userService;

	public static void main(String[] args) {


		SpringApplication.run(CloudcomApplication.class, args);

	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Код работает");
//		 User user = new User();
//		user.setFirstName("Pavel");
//		user.setFirstName("Korobkin");
//		user.setUsername("pavel_148");
//		user.setPassword("qwerty");
//		user.setEmail("kpd.20@uni-dubna.ru");
//		user.setProfile("default.png");
//
//		Role role1 = new Role();
//		role1.setRoleId(44L);
//		role1.setRoleName("ADMIN");
//
//		Set<UserRole> userRolesSet = new HashSet<>();
//		UserRole userRole= new UserRole();
//
//		userRole.setRole(role1);
//
//		userRole.setUser(user);
//
//		userRolesSet.add(userRole);
//
//		User user1= this.userService.createUser(user, userRolesSet);
//		System.out.println(user1.getUsername());



	}
}
