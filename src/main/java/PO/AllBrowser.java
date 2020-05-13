package PO;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.firefox.FirefoxDriver;

public class AllBrowser extends BasePage {

    LoadProp loadprop = new LoadProp();
    String browser = loadprop.getproperty("Browser");
    //  To Run Different Browser Change Variables in Config.property File
    //creating method for multi browser
    public void selectBrowser()
    {
        if(browser.equalsIgnoreCase("Chrome"))
        {
            System.setProperty(ChromeDriverService.CHROME_DRIVER_SILENT_OUTPUT_PROPERTY,"true");
            System.setProperty("webdriver.chrome.driver","src\\test\\Resources\\Browser\\chromedriver.exe");
            driver = new ChromeDriver();
        } else if (browser.equalsIgnoreCase("Firefox"))
            {
                System.setProperty("webdriver.gecko.driver","src\\test\\Resources\\Browser\\geckodriver.exe");
                driver = new FirefoxDriver();
            }   else{ System.out.print("Wrong Browser"); }

    }


}


