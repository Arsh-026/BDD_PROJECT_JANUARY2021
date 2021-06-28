package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="classpath:features",
		glue="steps",
		tags="@Scenario1",				//TWO WAYS TO RUN TWO SCENARIOS, EITHER USE COMAS AND SEPARATE THEM @SECENARIO 1,4
		monochrome=true,				// OR YOU CAN USE SMOKE. 
		dryRun=false,
		plugin= {
			"pretty",
			"html:target/cucumber",
			"json:target/cucumber.json"
				
		}
		
		)
public class LoginRunner {

}
