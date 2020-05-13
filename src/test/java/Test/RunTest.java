package Test;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features=".",tags = "@smoke",format = {"pretty","html:target/cucumber-reports"})

public class RunTest  {

}



