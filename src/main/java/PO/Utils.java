package PO;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;


public class Utils extends BasePage {

   //    To click element
    public static void click_Element(By by) { driver.findElement(by).click(); }

    //    Verify actual with expected Results and if its not match will get message
    public static void assert_element(Object actual, Object expected, String message)
    {
        //for Verify Actual vs Expected
        Assert.assertEquals(actual, expected, message);
    }

    public static String get_text_Element(By by)
    {
        // to get text
        String text = driver.findElement(by).getText();
        return text;
    }

    public static void selectByValue(By by, String text)
    {
        new Select(driver.findElement(by)).selectByValue(text);
    }

    // Will wait until element is clickable then click
    public static void waitAndClick(By by, int time) {
        WebDriverWait wait = new WebDriverWait(driver, time);
        wait.until(ExpectedConditions.visibilityOfElementLocated(by));
        driver.findElement(by).click();
    }

    // to select from drop list by index
    public static void selectByIndex(By element, int numb) {
        new Select(driver.findElement(element)).selectByIndex(numb);
    }

    // to wait for element to be display
    public static void waitForElementToBeDisplay(By by, int time)
    {
        WebDriverWait wait = new WebDriverWait(driver, time);
        wait.until(ExpectedConditions.visibilityOf(driver.findElement(by)));
    }

    // Mouse hover
    public static void mouseHover(By by)
    {
        WebElement myelement = driver.findElement(by);
        Actions action = new Actions(driver);
        action.moveToElement(myelement).click();
        action.build().perform();
    }

    //  to sleep web driver for given time
    public  void threadSleep(int time)
    {
        try
        {
            Thread.sleep(time);
        } catch (InterruptedException e)
        {
            e.printStackTrace();
        }
    }

    //  To upload file
    public static void uploadFile(By by , String a)
    {
        WebElement uploadElement = driver.findElement((by));
        // enter the file path onto the file-selection input field
        uploadElement.sendKeys(a);
    }

    // This method Will clear text first and then send text
    public static void clear_Send_Text(By by, String a)
    {
        WebElement ab=driver.findElement(by);
        ab.clear();
        ab.sendKeys(a);
    }

    public void scrollDown()
    {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        // This  will scroll down the page by  1000 pixel vertical
        js.executeScript("window.scrollBy(0,1000)");
    }



}



