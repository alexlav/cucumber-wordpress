package com.swql.myapp.pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

public class LoginPage {
	private WebDriver driver;
	//private WebDriverWait wait = new WebDriverWait(driver, 10);
	public LoginPage(WebDriver driver){
		this.driver = driver;			
	}
	
	public void isTitleDisplayed(){
		//Assert title displayed		
		Assert.assertEquals(this.driver.getTitle().trim(), "SeleniumForTesting ‹ Log In");
	}
	
	@FindBy(how = How.ID, using="user_login")
	private WebElement txtUsername;
	public void setUsername(String username){
		txtUsername.clear();
		txtUsername.sendKeys(username);
	}
	
	@FindBy(how = How.ID, using="user_pass")
	private WebElement txtUserpass;
	public void setUserpass(String userpass){
		txtUserpass.clear();
		txtUserpass.sendKeys(userpass);
	}
	
	@FindBy(how=How.CSS, using =".submit #wp-submit")
	private WebElement btnLogIn;
	public void clickLogin(){
		btnLogIn.submit();
	}
}
