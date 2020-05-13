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

    @Given("^user is on the home page$")
    public void userIsOnTheHomePage() {
    }

    @When("^User click On ([^\"]*)$")
    public void userClickOnLink(String link) {
        homepage.openPages(link);

    }
    @Then("^should be able to see ([^\"]*)$")
    public void userShouldBeAbleToSeeTitle(String page) {
        homepage.verifyOpenPagesByTitle(page);
    }

    @When("^User Click on Services page")
    public void userClickOnServicesPage()
    {
        services.clickOnServicesPage();

    }

    @And("^User navigate to ([^\"]*)$")
    public void userNavigateToPagelink(String  pagelink) {
        services.openSubPagesInServicesPage(pagelink);
    }

    @Then("^should able to see ([^\"]*)$")
    public void shouldAbleToSeeServicesSubPage(String  servicesPage)
    {
        services.verifySubPagesInServicesPage(servicesPage);

    }



}





