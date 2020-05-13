package Test;
import PO.BasePage;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;

import java.io.File;




public class Hooks extends BasePage {


    @Before
    public void setUp() {
        chrome_Driver();
    }


    @After
    public void screenshot(Scenario scenario) throws   Exception{
        if (scenario.isFailed()) {
            try{
            final File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
            FileUtils.copyFile(screenshot, new File("src\\test\\Resources\\Screenshot\\" + System.currentTimeMillis() + ".jpg"));
        } catch (WebDriverException somePlatformDontSupportScreenshot)
            {
                System.err.println(somePlatformDontSupportScreenshot.getMessage());
            }
        }driver.quit();
    }

    }


