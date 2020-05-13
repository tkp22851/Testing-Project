package PO;
import org.openqa.selenium.By;


public class HomePage extends Utils {

    By _openteampage = By.cssSelector("[title=\"Team\"]");
    By _servicespage  = By.cssSelector("[title=\"Services\"]");
    By _opencontactpage = By.linkText("CONTACT");
    By _openloginpage = By.linkText("LOGIN");
    By _addresstext   = By.xpath("(//div[@class=\"contact-box\"])[1]/address");

    public void openTeamPage() { click_Element(By.linkText("_openteampage")); }

    public void hoverOnServicesPage(){ mouseHover(_servicespage); }

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

    public void verifyContactInformationInAllPages()
    {
//         To verify Address
        String address =get_text_Element(_addresstext);
        String expectedaddresss = "Thruxton Down House, Thruxton Down, Andover, Hampshire, UK. SP11 8PR";
        assert_element(address,expectedaddresss,"Address is not Matching ");

    }


}






