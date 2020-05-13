package PO;
import org.openqa.selenium.By;

public class Services  extends  Utils
{
    By _servicespage  = By.cssSelector("[title=\"Services\"]");


    public void clickOnServicesPage(){ mouseHover(_servicespage); }
    public void openSubPagesInServicesPage(String pagename)
    {
        String  css = "[title=" + '"' +  pagename + '"' + "]";
        System.out.println(css);
        waitForElementToBeDisplay(By.cssSelector(css),10);
        click_Element(By.cssSelector(css));
    }

    public void verifySubPagesInServicesPage(String title)
    {
        // get title from all the pages
        String actualTitle = driver.getTitle();
        // Replace Special Character As in Scenario outline can't add character
        String removespecialcharacter = actualTitle.replace('|',' ');
        // Verify title with actual and expected
        assert_element(removespecialcharacter,title,"Test case fail");
    }

}
