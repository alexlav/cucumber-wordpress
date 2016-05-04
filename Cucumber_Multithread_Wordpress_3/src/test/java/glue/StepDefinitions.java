package glue;

import com.swql.myapp.Framework.ParentScenario;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import utils.NameGenerator;
import validations.DatabaseValidation;

import org.testng.log4testng.*;

import java.sql.SQLException;

public class StepDefinitions extends ParentScenario{
	static Logger log = Logger.getLogger(StepDefinitions.class);
	NameGenerator user = new NameGenerator();
	String usernameNew = user.getUsername();
	String firstnameNew = user.getName();
	String lastnameNew = user.getName();
	String websiteNew = user.getWebsite();		
	String emailNew = user.getEmail(firstnameNew, lastnameNew, websiteNew);
	String passwordNew = user.getName();
	String displayname = firstnameNew + " "+ lastnameNew;
	DatabaseValidation dbValidation = new DatabaseValidation();
	
	@Before
	public void beforeSceneario(){
		log.info("Before condition is start Browser");		
		startBrowser();
	}
	
	@Given ("^I am on the Wordpress Loginpage")
	public void I_am_on_thé_Wordpress_loginpage(){		
		log.info("Given I am on the Wordpress Loginpage");
		navigateTo();
	}
	
	@And("^I should see Loginpage title")
	public void I_should_see_loginpage_titile(){
		log.info("And I should see Loginpage title");
		loginPage.isTitleDisplayed();
	}
	
	@And("^I authenticate as user (.+)$")
	public void I_authenticate_as_user(String username){		
		log.info("And I authenticate as user: " + username );		
		loginPage.setUsername(username);		
	}
	
	@And("^I authenticate with password (.+)$")
	public void I_authenticate_with_password(String password){		
		log.info("And I authenticate with password: "+ password);
		loginPage.setUserpass(password);		
	}
	
	@And("^I sign up")
	public void I_sign_up(){	
		log.info("And I sign up");
		loginPage.clickLogin();
	}	
	
	@And("^I should see Homepage title")
	public void I_should_see_homepage_titile(){
		log.info("And I should see homepage title");
		homePage.isTitleDisplayed();
	}
	
	@And("^I can add user")
	public void I_can_add_user(){
		log.info("And I cann add user");
		homePage.AddUser();
	}
	
	@And("^I should see add new userpage")
	public void I_should_see_addnewuserpage(){
		log.info("And I should see add new userpage");
		addNewUserPage.isTitleDisplayed();
	}
	
	@When("^I create new user")
	public void I_can_create_new_user(){
		log.info("When I create new user: " + usernameNew);
		addNewUserPage.setUserName(usernameNew);
		addNewUserPage.setEmail(emailNew);
		addNewUserPage.setFirstName(firstnameNew);
		addNewUserPage.setLastNamel(lastnameNew);
		addNewUserPage.setWebsite(websiteNew);
		addNewUserPage.selectRoleContributor();			
		addNewUserPage.clickAddNewUser();
	}
	
	@And("^I verify and validate created  user")
	public void I_verify_and_validate_created_user() throws SQLException{
		log.info("And I verify / validate created user");
		allUsersPage.clickAllUsers();		
		allUsersPage.verificationlnkUsername(usernameNew);		
		dbValidation.mySQLGetUser(usernameNew, websiteNew, displayname);
	}
	
	@And("^I can select created user")
	public void I_can_select_created_user(){
		log.info("And I can select created user");
		allUsersPage.clickCheckBoxUser(usernameNew);
	}
	
	@Then("^I delete created user")
	public void I_delete_created_user(){
		log.info("Then I delete created user: "+usernameNew);		
		allUsersPage.selectDeleteUser();
		allUsersPage.clickApply();
		deleteUsersPage.clickConfirmDeletion();
	}
	
	@And("^I validate deleted user")
	public void I_validate_deleted_user() throws SQLException{
		log.info("And I validate deleted user");
		dbValidation.mySQlGetUserNull(usernameNew);	
	}	
	
	@After
	public void afterScenario(){
		log.info("Close Browser");
		closeBrowser();
	}
		
}
