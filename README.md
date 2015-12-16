#Group7a >> Final Project
## Project 29 - Extended Health Care Solutions Inc.

###Description
  Need something that advertises various home care and housing services, that allow appointments to be made we also need a logo. our services cater to the elderly, disabled veterans and developmental disabled individuals.would like to be able to allow online job application need something that can grow to various states, allow employee training

###Getting Started
* For MAC
        1. run ./loadingScript.sh
* In terminal
        1. git clone "repo_link"
        2. cd core-app
        3. npm install
        4. bower update
        5. bower install materialize
        6. grunt

* Terminal should output the following:
    * --
    MEAN.JS - Development Environment
    Environment:			development
    Port:				3000
    Database:				mongodb://meanapp:meanapp@ds027749.mongolab.com:27749/cen3031-fall-test/mean-dev
    App version:			0.4.1
    MEAN.JS version:			0.4.1
    * --
* Goto Browser and type in "localhost: 'port_number'"
	- from the terminal output of grunt tells you the port number in this case it will be 3000. This is subject to change with further development
* To Kill App
   * Goto Terminal and press CTRL + C

* To Navigate
  * go to->> localhost:3000
  * For Admin privileges refer to Slack
  
###Screenshots of App
* Landing Page:
![alt tag](https://github.com/CEN30317a/core-app/blob/master/screenshots/Landing.png)
* Contact Us Page:
![alt tag](https://github.com/CEN30317a/core-app/blob/master/screenshots/ContactUs.png)
* Careers Page:
![alt tag](https://github.com/CEN30317a/core-app/blob/master/screenshots/Careers.png)
* Admin Views:
	* Manage Users
	![alt tag](https://github.com/CEN30317a/core-app/blob/master/screenshots/AdminUsersLanding.png)
	* Manage Referrals
	![alt tag](https://github.com/CEN30317a/core-app/blob/master/screenshots/AdminReferralsLanding.png)
	* Manage Jobs
	![alt tag](https://github.com/CEN30317a/core-app/blob/master/screenshots/AdminJobsLanding.png)
	* View Messages
	![alt tag](https://github.com/CEN30317a/core-app/blob/master/screenshots/AdminMessagesLanding.png)
* Employee Views:
	* View Referrals
	![alt tag](https://github.com/CEN30317a/core-app/blob/master/screenshots/EmployeeReferralLanding.png)
	* Edit Profile
	![alt tag](https://github.com/CEN30317a/core-app/blob/master/screenshots/EmployeeEditProfile.png)

###Database Info
* Updates to the database are handled by the app automatically

* To change development database connections, go to '/core-app/config/env/development.js'
	- Provide link to desired database on Line 7, on the far right
	- Provide appropriate credentials to database on lines 9 and 10
	
* To change production database connections, go to '/core-app/config/env/production.js'
	- Provide link to desired database on Line 11
	- Provide appropriate credentials to database on lines 13 and 14
 
###Resources
* MEAN.JS - Full-Stack JavaScript Using MongoDB, Express, AngularJS, and Node.js - http://meanjs.org
* Materialize Style - http://materializecss.com/

###Deployment Link
 * https://extendedhealthcaresolutions.herokuapp.com/
