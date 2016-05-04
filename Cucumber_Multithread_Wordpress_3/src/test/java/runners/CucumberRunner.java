package runners;

import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@Test
@CucumberOptions(
		monochrome = true,
		features = {"src/test/resources/test.feature"},
		glue = {"glue"},
		format = {"pretty",
				 "html:target/cucumber-report"}
		)
public class CucumberRunner extends AbstractTestNGCucumberTests{		
	
}
