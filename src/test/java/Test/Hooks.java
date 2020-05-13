package Test;
import PO.AllBrowser;
import PO.BasePage;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;

import java.io.File;
import java.util.concurrent.TimeUnit;


public class Hooks extends BasePage
{
    AllBrowser allbrowser = new AllBrowser();

    @Before
    public void openBrowser()

    {
        allbrowser.selectBrowser();
        driver.manage().timeouts().implicitlyWait(3000, TimeUnit.NANOSECONDS);
        driver.manage().window().fullscreen();
        driver.get("https://aml-analytics.com/");//pre condition for all the test cases : Type URL demo.nopcommerce.com

    }




    @After
    public void screenShot(Scenario scenario) throws   Exception
    {
        if (scenario.isFailed())
        {
            try{
            final File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
            FileUtils.copyFile(screenshot, new File("src\\test\\Resources\\Screenshot\\" + System.currentTimeMillis() + ".jpg"));
        } catch (WebDriverException somePlatformDontSupportScreenshot)
            {
                System.err.println(somePlatformDontSupportScreenshot.getMessage());
            }
        }  driver.quit();
    }


}


