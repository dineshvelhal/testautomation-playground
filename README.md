### [Playground URL](https://testautomation-playground.herokuapp.com) | [GitHub Pages](https://dineshvelhal.github.io/testautomation-playground/) | [Docker](https://hub.docker.com/r/dineshvelhal/playground)

# Introduction
Test Automation code is a living entity. It undergoes changes all the time. You add new features to the automation framework. You fix the issues from time to time. Sometimes there is a need to increase test execution speed so you make some configuration changes. If nothing else changes, sometimes applications under test start behaving peculiarly (E.g. you need to change max. timeout values as the application is particularly slow in a specific test environment). The automation tools in use may behave in different ways after a version upgrade. So many things change.

All this is still fine when you write test automation code either for your own use or for the use of small testing teams. You can quickly fix the issues and can bring automation back on track again. The things aren’t so easy and straightforward when the End User base is large, varied and have varied expectations from your automation framework. It becomes imperative that you test your automation framework features thoroughly and ensure it works as expected when you release a new version.

It’s obvious that test automation is a development activity and as such, deserve the best practices that are typically associated with the development projects. One important aspect about test automation framework is — is it tested before it’s released for use in testing projects? What does it even mean by testing the test automation framework?

# Testing the Test Automation – An example
One prerequisite to test the test automation framework is to have a handy sample Application under Test (AUT) available in your test environment. Having it available, you can write a set of Smoke Tests that test the core functionality of your framework.

Consider an automation framework that automates web applications. A good automation framework needs to support following features (not an extensive list):

- Support for multiple browsers
- Support for interaction with web pages (click, type, carry out transactions)
- Support for dynamic (ajax based) asynchronous page refresh (requiring extra care in how you interact with the page elements)
- Read attributes of the page elements
- Support for multi-window, multi-frame applications
- File download/uploads
- Data intensive elements like tables and grids
- Taking screenshots and capturing errors

To test if your automation frameworks support these or not, you need to have an AUT that has all the above features and also meet following prerequisites:

- AUT is easy to manage (install, run, stop, restart)
- Low on memory/CPU footprint
- No external dependencies (E.g. internet access)
- Easy to reset (reverting back to initial state) for predictable test outcome

To address this requirement, I have put together an AUT which has majority of features needed to effectively test the test automation framework. I have named it Playground. An online version is available at http://testautomation-playground.herokuapp.com/ for preview. Next section introduces the Playground AUT in detail.

# What is Playground?
Playground is a collection of web pages. Every web page has a set of UI elements that the automation framework can interact with. Thus you can use it for following purposes.

It can be used for:

## To test the Automation
Use it as an Application under Test to test the features of your Test Automation Framework.

## To learn the Automation
Use it as a sample application for trying out test automation with tools like Selenium, Cypress & Testcafe.

## To evaluate the Automation
Use it to evaluate third party automation tools and frameworks.

 

# Features
- Test various wait conditions (Ideal for testing the ajax based interactions)
- Test the keyboard events (E.g. Perform special keypresses like Ctrl+A)
- Test the mouse events (E.g. Perform Click, Double-Click, Right-Click etc)
- Test the handling of multiple browser windows & multi-frame pages
- Test the interactions with form elements
- Test the interactions with Non-English web applications
- Test challenging web scenarios

### [Playground URL](https://testautomation-playground.herokuapp.com) | [GitHub Pages](https://dineshvelhal.github.io/testautomation-playground/) | [Docker](https://hub.docker.com/r/dineshvelhal/playground)



