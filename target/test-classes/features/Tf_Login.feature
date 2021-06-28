@Login @Regression
Feature: validate Techfios login functionality 

Background: 
	Given User is on the techfios login page  

@Scenario1 @Smoke	
Scenario: User should be able to login with the valid credentials 
	When User enters username as "demo@techfios.com"    
	When User enters password as "abc123" 
	And User clicks signin button
	Then User will land on dashboard page

@Scenario2	
Scenario: User should be able to login with the valid credentials 
	When User enters username as "demo2@techfios.com"   
	When User enters password as "abc123" 
	And User clicks signin button
	Then User will land on dashboard page
	
@Scenario3	
Scenario: User should be able to login with the valid credentials 
	When User enters username as "demo@techfios.com"   
	When User enters password as "abc1234" 
	And User clicks signin button
	Then User will land on dashboard page
	
@Scenario4 @Smoke	
Scenario: User should be able to login with the valid credentials 
	When User enters username as "demo2@techfios.com"   
	When User enters password as "abc1234" 
	And User clicks signin button
	Then User will land on dashboard page
	