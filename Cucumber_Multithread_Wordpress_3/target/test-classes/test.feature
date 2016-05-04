#Author: alex
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios 
#<> (placeholder)
#""
## (Comments)

#Sample Feature Definition Template

Feature: 
	As a user with admin credentials
	I want to be able to create new users and validate in database	

Scenario Outline: login in application
Given I am on the Wordpress Loginpage
And I should see Loginpage title
And I authenticate as user <username>
And I authenticate with password <password>
And I sign up
And I should see Homepage title
And I can add user
And I should see add new userpage
When I create new user
And I verify and validate created  user
And I can select created user
Then I delete created user
And I validate deleted user

Examples:
    | username     | password     |
    | administrator| administrator|
    | user1        | password1    |
