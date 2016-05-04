package com.swql.myapp.Framework;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.ITestContext;

import com.swql.myapp.pageobjects.AddNewUserPage;
import com.swql.myapp.pageobjects.AllUsersPage;
import com.swql.myapp.pageobjects.DeleteUsersPage;
import com.swql.myapp.pageobjects.HomePage;
import com.swql.myapp.pageobjects.LoginPage;

public class ParentScenario {
	private WebDriver driver;
	protected LoginPage loginPage;
	protected HomePage homePage;
	protected AddNewUserPage addNewUserPage;
	protected AllUsersPage allUsersPage;
	protected DeleteUsersPage deleteUsersPage;

	protected void startBrowser() {
		driver = new FirefoxDriver();

		// set the implicit time out to find elements
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		homePage = PageFactory.initElements(driver, HomePage.class);
		addNewUserPage = PageFactory.initElements(driver, AddNewUserPage.class);
		allUsersPage = PageFactory.initElements(driver, AllUsersPage.class);
		deleteUsersPage = PageFactory.initElements(driver, DeleteUsersPage.class);		
	}

	protected void navigateTo() {		
		driver.get("http://localhost/wordpress/wp-login.php");	
		
	}

	protected void closeBrowser() {
		driver.quit();
	}

}
