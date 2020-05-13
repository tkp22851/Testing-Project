package PO;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;

import java.util.concurrent.TimeUnit;

public class BasePage
{
    public static WebDriver driver;

    public static void chrome_Driver()
    {
        System.setProperty(ChromeDriverService.CHROME_DRIVER_SILENT_OUTPUT_PROPERTY,"true");
        // pre condition for all the test cases :  open chrome browser
        System.setProperty("webdriver.chrome.driver", "src\\test\\Resources\\Browser\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(3000, TimeUnit.NANOSECONDS);
        driver.manage().window().fullscreen();
        driver.get("https://aml-analytics.com/");//pre condition for all the test cases : Type URL demo.nopcommerce.com

    }

}