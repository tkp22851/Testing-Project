package PO;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;


public class Utils extends BasePage
{


    public static void click_Element(By by)
    {
        //    To click element
        driver.findElement(by).click();
    }

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

    public static void waitAndClick(By by, int time)
    {
        // Will wait until element is clickable then click
        WebDriverWait wait = new WebDriverWait(driver, time);
        wait.until(ExpectedConditions.visibilityOfElementLocated(by));
        driver.findElement(by).click();
    }

    public static void selectByIndex(By element, int numb)
    {
        // to select from drop list by index
        new Select(driver.findElement(element)).selectByIndex(numb);
    }

    public static void waitForElementToBeDisplay(By by, int time)
    {
        // to wait for element to be display
        WebDriverWait wait = new WebDriverWait(driver, time);
        wait.until(ExpectedConditions.visibilityOf(driver.findElement(by)));
    }

    public static void mouseHover(By by)
    {
        // Mouse hover
        WebElement myelement = driver.findElement(by);
        Actions action = new Actions(driver);
        action.moveToElement(myelement).click();
        action.build().perform();
    }

    public  void threadSleep(int time)
    {
        //  to sleep web driver for given time
        try
        {
            Thread.sleep(time);
        } catch (InterruptedException e)
        {
            e.printStackTrace();
        }
    }

    public static void uploadFile(By by , String a)
    {
        //  To upload file
        WebElement uploadElement = driver.findElement((by));
        // enter the file path onto the file-selection input field
        uploadElement.sendKeys(a);
    }

    public static void clear_Send_Text(By by, String a)
    {
        // This method Will clear text first and then send text
        WebElement ab=driver.findElement(by);
        ab.clear();
        ab.sendKeys(a);
    }

    public void scrollDown()
    {
        // This  will scroll down the page by  1000 pixel vertical
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,1000)");
    }



}



