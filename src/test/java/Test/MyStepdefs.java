package Test;
import PO.HomePage;
import PO.Services;
import PO.Utils;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class MyStepdefs extends Utils {

    private HomePage homepage  = new HomePage();
    private Services services  = new Services();


//      To Verify All pages in Home Page
    @Given("^User is on the Home Page$")
    public void UserIsOnTheHomePage() { System.out.println(driver.getTitle()); }

    @When("^User click on ([^\"]*)$")
    public void UserClickOnLink(String link)
    {
        homepage.openPages(link);
    }

    @Then("^User is able to View ([^\"]*)$")
    public void userIsAbleToViewTitle(String page)
    {
        homepage.verifyOpenPagesByTitle(page);
    }

//      To Verify SUb Pages In Services Page

    @When("^User Hover on Services page")
    public void userHoverOnServicesPage() { services.hoverOnServicesPage(); }

    @And("^User navigate to ([^\"]*)$")
    public void userNavigateToPagelink(String  pagelink) {
        services.openSubPagesInServicesPage(pagelink);
    }

    @Then("^should able to see ([^\"]*)$")
    public void shouldAbleToSeeServicesSubPage(String  servicesPage)
    {
        services.verifySubPagesInServicesPage(servicesPage);
    }

//     To Verify Address in All Pages

    @When("^User Navigate to Bottom of the ([^\"]*)$")
    public void userNavigateToBottomOfThePages(String  pages)
    {
        homepage.openPages(pages);
        scrollDown();
    }

    @Then("^User Should able to View Address on pages$")
    public void userShouldAbleToViewAddressOnPages()
    {
        homepage.verifyContactInformationInAllPages();
    }

    @And("^User Scroll Down to Bottom Of the Page$")
    public void userScrollDownToBottomOfThePage() {
        scrollDown();
    }



}





