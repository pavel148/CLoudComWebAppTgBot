package korobkin.CLOUDCOM.helper;

public class UserFoundException extends  Exception{

    public  UserFoundException(){
        super("User with this Username is alreay thert in DB!! try with another one" );
    }
    public UserFoundException(String msg){
        super(msg);
    }

}
