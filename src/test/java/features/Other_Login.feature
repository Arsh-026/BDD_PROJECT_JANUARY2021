@OtherLogin @Regression
Feature: Validate Techfios Login functionality using scenario outline

Background:
	Given User is on the techfios login page
	
@OtherScenario1
Scenario Outline: User should be able to login with the valid credentials 
	When User enters "<username>" and "<password>"     
	And User clicks signin button
	Then User will land on dashboard page 
	Examples:
	|username           |password  |
	|demo@techfios.com  |abc123    |
	
	
	
@OtherScenario2 @Smoke
Scenario Outline: User should be able to login with the valid credentials 
	When User enters "<username>" and "<password>"     
	And User clicks signin button
	Then User will land on dashboard page 
	Examples:
	|username           |password  |
	|demo2@techfios.com |abc123    |
	