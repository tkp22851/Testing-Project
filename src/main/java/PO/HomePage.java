package PO;
import org.openqa.selenium.By;


public class HomePage extends Utils {

    By _openteampage = By.cssSelector("[title=\"Team\"]");
    By _openservicespage = By.linkText("SERVICES");
    By _opencontactpage = By.linkText("CONTACT");
    By _openloginpage = By.linkText("LOGIN");


    public void openTeamPage() { click_Element(By.linkText("_openteampage")); }

    public void openServicesPage(){ mouseHover(_openservicespage); }

    public void openContactPage() {
        click_Element(_opencontactpage);
    }

    public void openLoginPage() {
        click_Element(_openloginpage);
    }

    public void openPages(String link)
    {
        waitForElementToBeDisplay(By.linkText(link),2000);
        click_Element(By.linkText(link));
    }

    public void verifyOpenPagesByTitle(String title)
    {
        String actualTitle = driver.getTitle();
        String removespecialchara = actualTitle.replace('|',' ');
        System.out.println(actualTitle);
        assert_element(removespecialchara,title,"Test case fail");
    }
}



