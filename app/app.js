'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'frontpage',
  'login',
  'registrations',
  'dashboard',
  'alarms',
  'client',
  'machine_reg',
  'Maintanances',
  'ngPercentDisplay',
  'machines',
  'report',
  'export',
  'role',
  'jobpage',
  'job',
  'install_details',
  'moment-picker',
  'shift',
  'breaktime',
  'operator',
  'operation',
  'comp',
  'faq_question',
  'machine_allocation',
  'operator_master',
  'operator_allocation_master',
  'rolesetting',
  'user',
  'alldetails',
  'alert',
  'item',
  'statuschart',
  'outviewdetails',
  'itemdetails',
  'payment',
  'paymenttype',
  'tenantpayment_type',
  'tenantmachine',
  'register_tenant',
  'notification',
  'adminuser',
  'device',
  'setting',
  'tenant',
  'pascalprecht.translate',     
  'device_registration',
  'changepassword',
  //'highcharts-ng',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider','$translateProvider', function ($locationProvider, $routeProvider,$translateProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({
      redirectTo: '/login'
    });

    var en_translations = {
      "login":"Login",
      "username":"User Name",
      "password":"Password",
      "signup":"Signup",
      "forgotpassword":"Forgot Password",
      "haveaccount":"Do not have an account",
      "signintocontinue":"Signin to continue with Yantra24x7",
      "dashboard":"Dashboard",
      "alarm":"Alarm",
      "alert":"Alert",
      "alarmreport":"Alarm Reports",
      "log":"Log",
      "report":"Report",
      "notificationsetting":"Notification Setting",
      "maintenance":"Maintenance",
      "master":"Master",
      "operatorentry":"Operator Entry",
      "machine":"Machine",
      "machines":"Machines",
      "shift":"Shift",
      "client":"Client",
      "job":"Job",
      "user":"User",
      "operator":"Operator",
      "operatorallocation":"Operator Allocation",
      "feature":"Feature",
      "home":"Home",
      "export":"Export",
      "overallmachinesstatus":"Overall Machines Status",
      "running":"Running",
      "idle":"Idle",
      "stop":"Stop",
      "nodata":"No data",
      "today":"Today",
      "shifttime":"Shift Time",
      "starttime":"Start Time",
      "lastupdate":"Last Update",
      "utilization":"UTILIZATION",
      "partsproduced":"Parts Produced",
      "cycletime":"Cycle Time",
      "runtime":"Run Time",
      "downtime":"Down time",
      "stoptime":"Stop Time",
      "nos":"nos",
      "notavaliable":"Not Available",
      "currentshiftdetails":"Current Shifts Details",
      "operatorname":"Operator Name",
      "operatorid":"Operator ID",
      "machineid":"Machine ID",
      "machinename":"Machine Name",
      "description":"Description",
      "search":"Search",
      "page":"Page",
      "overallalarm" : "Overall Alarm",
      "alarmtype":"Alarm Type",
      "date":"Date",
      "time":"Time",
      "duration":"Duration",
      "overallalarmhistory":"Overall Alarm History",
      "alarmstatus":"Alarm Status",
      "axisnumber":"Axis Number",
      "page":"Page",
      "export":"Export",
      "search":"Search",
      "overallalertreport":"Overall Alert Report",
      "message":"Message",
      "of":"Of",
      "alarmreport":"Alarm Report",
      "selectmachine":"Select Machine",
      "selecttype" : "Select Type",
      "fromdate":"From Date",
      "todate":"To Date",
      "all":"All",
      "viewreport":"View Report",
      "selectoperator":"Select Operator",
      "operator":"Operator",
      "machinename":"Machine Name",
      "shifttime":"Shift Time",
      "shift":"Shift",
      "operatorname":"Operator Name",
      "alarmtime":"Alarm Time",
      "alarmmessage":"Alarm Message",
      "selectshift":"Select Shift",
      "alarmnumber":"Alarm Number",
      "report":"Report",
      "split":"Split",
      "jobdescription":"Job Description",
      "programnumber":"Program Number",
      "partsproduced":"Parts Produced",
      "loadingandunloadingtime":"Loading And Unloading Time",
      "ldletime":"Idle Time",
      "totaldowntime":"Total Down Time",
      "actualrunning":"Actusl Running",
      "actualworkinghours":"Actual Working Hours",
      "notificationsettings":"Notification Settings",
      "timeinervel":"Time Intervel",
      "reason":"Reason",
      "enable/disablenotification":"Enable/Disable Notification",
      "select":"Select",
      "machineregistration":"Machine Registration",
      "controllermodelnumber":"Controller Model Number",
      "machinetype":"Machine Type",
      "machineserialnumber":"Machine Serial Number",
      "unit":"Unit",
      "unit1":"Unit1",
      "unit2":"Unit2",
      "unit3":"Unit3",
      "unit4":"Unit4",
      "unit5":"Unit5",
      "selectunit":"Select Unit",
      "save":"Save",
      "cancel":"Cancel",
      "close":"Close",
      "model":"Model",
      "serialnumber":"Serial Number",
      "controller":"Controller",
      "ip":"Ip",
      "internetstatus":"Internet Status",
      "ethernetstatus":"Ethernet Status",
      "status":"Status",
      "shiftregistration":"Shift Registration",
      "daystarttime":"Day start time",
      "numberofshift":"Number Of Shift",
      "shifttransactionregistration":"Shift Transaction Registration",
      "workingtime":"Working Time",
      "shiftstarttime":"Shift Start Time",
      "Shiftendtime":"Shift End Time",
      "action":"Action",
      "shiftnumber":"Shift Number",
      "endtime":"End Time",
      "number":"Number",
      "registrationcompleted":"Registration Completed",
      "clientregistration":"Client Registration",
      "clientname":"Client Name",
      "emailid":"Email Id",
      "mobilenumber":"mobile Number",
      "required":"Required",
      "name":"Name",
      "operatorregistration":"Operator Registration",
      "operatorname":"Operator Name",
      "others":"Others",
      "operatorallocation":"Operator Allocation",
      "created":"Created",
      "from-todate":"From-To Date",
      "userregistration":"User Registration",
      "role":"Role",
      "firstname":"First Name",
      "lastname":"Last Name",
      "newuserregistration":"New User Registration",
      "selectrole":"Select Role",
      "userrole":"User Role",
      "remarks":"Remarks",
      "edituserregistration":"Edit User Registration",
      "notvalidemailid":"Not Valid Email Id",
      "lastupdatedtime":"Last Update Time",
      "downtimedetails":"Down Time Details",
      "possibleload&unloadtime":"Possible Load & Unload Time",
      "total":"Total",
      "jobid":"Job Id",
      "partscount":"Parts Count",
      "rejects":"Rejects",
      "rework":"Rework",
      "inspection":"Inspection",
      "remainingparts":"Remaining Parts",
      "partsdelivered":"Parts Delivered",
      "stopping":"Stopping",
      "remaining":"Remaining",
      "graphicalrepresentation":"Graphical Representation",
      "selectmachinename":"Select Machine Name",
      "selectdate":"Select Date",
      "parts":"Parts",
      "jobregistration":"Job Registration",
      "partname":"Part Name",
      "partnumber":"Part Number",
      "orderquantity":"Order Quantity",
      "jobstartdate":"Job Start Date",
      "jobenddate":"Job End Date",
      "quantity":"Quantity",
      "startdate":"Start Date",
      "enddate":"End Date",
      "note:pleaseregisteroperationsundertheactionstabforeachjob":
      "Note: Please register operations under the actions tab for each job",
      "companyname":"Company Name",
      "addressline1":"Address Line1",
      "addressline2":"Address Line2",
      "city":"City",
      "State":"State",
      "country":"Country",
      "pincode":"Pincode",
      "agreethetermsandpolicy":"Agree the terms and policy",
      "alreadyhaveanaccount":"Already have an account",
      "register":"Register",
      "registertocontinuewith":"Register to continue with Yantra24x7",
      "aboutcompany":"About Company",
      "copyright":"Copyright",
      "machineip":"Machine ip",
      "allrightsreserved":"All Rights Reserved",
      "privacypolicy":"Privacy Policy",
      "terms&conditions":"Terms & Conditions",
      "edituserprofile":"Edit User Profile",
      "recentalarms":"Recent Alarms",
      "details":"Details",
      "deviceip":"Device ip",
      "partscountdetails":"Parts Count Details", 
      "datacollection":"DATA COLLECTION",
      "question1":"What Mode of data retrieval from CNC Machines",
      "answer1":"Data retrieval from Ethernet and Rs232 ( Serial Port ) mode",
      "question2":"How many Hardware Device required for Retrieval of data from the CNC Machine",
      "answer2":"One, Hardware device can connect upto 10 CNC Machines for Ethernet Mode",
      "question3":"Is Internet access required on the computers where the Data Entry screens are used",
      "answer3":"Yes! Internet access is required for the installation of the application",
      "question4":"Are the CNC machines connected directly to the Internet",
      "answer4":"No! The Hardware device along with switch, access to the machines, the machines never need direct access to the Internet",
      "question5":"What if I have older machines – Serial Port",
      "answer5":"No problem. Yantra 24x7 offers a low cost hardware device that’s easy to connect to each machines to collect data",
      "question6":"Is there a way to enter downtime reasons",
      "answer6":" Yes! Yantra 24x7 includes an easy to use data entry screen on PC's and tablets for entering user defined downtime reasons",
      "licensing":"LICENSING",
      "question7":"Can I move the licenses from one piece of CNC Machine to another",
      "answer7":"Yes! You are free to move the licenses from machine to machine based on IP cofiguration",
      "question8":"Can I move licenses from one plant to another",
      "answer8":"Yes!  As long as the plants are within the same account then the licenses can be moved to any piece of equipment",
      "question9":"Can licensing be increased or decreased easily",
      "reporting":"REPORTING",
      "question10":"How many people can run reports at a time",
      "question11":"Can I access the reports from outside of my facility",
      "answer11":" Yes! Reports can be run from anywhere, as long as you have Internet access",
      "question12":"Can the status of the CNC Machine be viewed from a phone",
      "answer12":"Yes! Mobile apps for phones and tablets are available for both Apple iOS and Google Android",
      "question13":"Can the status of the CNC Machine be viewed from a PC", 
      "answer13":"Yes! of course the data can be monitored from PC too",
      "question14":"What are all the Reports can I view",
      "answer14":"You can view shiftwise, Operator wise , Hour wise, Program Number wise reports",
      "question15":"Can I view Machine Utilization datewise",
      "answer15":"Yes!  Datewise and Monthwise Machine Utilization can be viewed",
      "question16":"Can I Monitor Cycle Time and Parts Count",
      "answer16":"Yes! You can Monitor Cycle Time and Parts Count along with machine status",
      "securityandprivacy":"SECURITY AND PRIVACY",
      "question17":"Is my data secure",
      "answer17":"Yes! All data is transmitted to Cloud and secured",
      "question18":"Will you sell or give away any of my personnel information",
      "answer18":"No! Never, not under any circumstance",
      "mydata":"MY DATA",
      "question19":"Can I get a copy of the data",
      "support":"SUPPORT",
      "question20":"Do you charge for remote application support",
      "answer20":"No! Application support by email, telephone and the web support are all included for existing connected equipment. On-site rates do apply for any on-site time if that is requested or required",
      "question21":"If I need help such as troubleshooting networking issues",
      "doyouwanttodelete":"DO you want to delete",
      "theusernameorpasswordisincorrect":"the username or password is incorrect",
      "pleaseentercorrectemailorphonenumber":"Please enter Correct Email or phone Number",
      "checkyouremailandresetyourpassword":"Check Your Email and Reset Your Password",
      "pleaseselectoperator":"Please Select Operator",
      "pleaseselectmachine":"Please Select Machine",
      "breaktimedetails":"Break Time Details",
      "breakstarttime":"Break Start Time",
      "breakendtime":"Break End Time",
      "breaktimeregistration":"Break Time Registration",
      "areyousurewanttologout":"Are You Sure Want to Logout?",
      "thankyouforregistering":"Thank you for registering with Yantra24X7",
      "required":"Required",
      "notvaliedemailid":"Not valid email",
      "onlynumbersallowedmaximum10numbers":"Only Numbers Allowed, Maximum 10 Numbers",
      "send":"Send",


      "registrationcompleted":"Registration completed",
      "registrationfailed":"Registration Failed",
      "updatedsuccessfully":"Updated Successfully",
      "updationfailed":"Updation Failed",
      "deletedsuccessfully":"delete successfully",
      "deletefailed":"delete failed",







      

    }
    
    var ta_translations = {
     "login":"உள் நுழை",
     "username":"பயனர் பெயர்",
     "password":"கடவுச்சொல்",
     "signup":"இணைந்ததற்கு",
     "forgotpassword":"கடவுச்சொல்லை மறந்துவிட்டீர்களா",
     "haveaccount":"கணக்கு வைத்திருக்கவில்லையா",
     "signintocontinue":"Yantra24x7 உடன் தொடர்ந்து உள்நுழைவதற்கு",
      "dashboard":"அறை",
      "alarms":"அலாரங்கள்",
      "alerts":"எச்சரிக்கைகள்",
      "alarmreport":"எச்சரிக்கை அறிக்கை",
      "log":"பதிவு",
      "report":"அறிக்கை",
      "notificationsetting":"அறிவிப்பு அமைத்தல்",
      "maintenance":"பராமரிப்பு",
      "master":"முதுநிலை",
      "operatorentry":"நுழைவு",
      "machine":"இயந்திரம்",
      "machines":"இயந்திரங்கள்",
      "shift":"மாற்றுதல்",
      "client":"வாடிக்கையாளர்",
      "job":"வேலை",
      "user":"பயனர்",
      "operator":"இயக்குபவர்",
      "operatorallocation":"இயக்குபவர்கள் ஒதுக்கீடு",
      "feature":"Feature",
      "home":"வீடு",
      "export":"ஏற்றுமதி",
      "overallmachinesstatus":"ஒட்டுமொத்த இயந்திரங்கள் நிலை",
      "running":"இயங்கும்",
      "idle":"செயலற்ற",
      "stop":"நிறுத்தம்",
      "nodata":"தகவல் இல்லை",
      "today":"இன்று",
      "shifttime":"வேலை நேரம்",
      "starttime":"ஆரம்பிக்கும் நேரம்",
      "lastupdate":"கடைசியாக புதுப்பிக்கப்பட்டது",
      "utilization":"பயன்பாடு",
      "partsproduced":"உற்பத்தி செய்யப்பட்டது",
      "cycletime":"சுழற்சி நேரம்",
      "runtime":"இயக்கம்",
      "downtime":"செயல்படாத நேரம்",
      "stoptime":"நேரம் நிறுத்தவும்",
      "nos":"nos",
      "notavaliable":"கிடைக்கவில்லை",
      "currentshiftdetails":"தற்போதைய வேலை விவரங்கள",
      "operatorname":"இயக்குபவர் பெயர்",
      "operatorid":"இயக்குபவர் ஐடி",
      "machineid":"இயந்திரத்தின் ஐடி",
      "machineip":"இயந்திரத்தின் ஐபி",
      "deviceip":"சாதனம் ஐபி",
      "machinename":"இயந்திரம் பெயர்",
      "description":"விளக்கம்",
      "search":"தேடல்",
      "page":"பக்கம்",
      "overallalarm":"ஒட்டுமொத்த எச்சரிக்கை",
      "alarmtype":"எச்சரிக்கை வகை",
      "date":"தேதி",
      "time":"நேரம்",
      "duration":"காலம்",
      "overallalarmhistory":"ஒட்டுமொத்த எச்சரிக்கை வரலாறு",
      "alarmstatus":"எச்சரிக்கை நிலை",
      "axisnumber":"அச்சு எண்",
      "page":"பக்கம்",
      "export":"ஏற்றுமதி",
      "search":"தேடல்",
      "overallalertreport":"ஒட்டுமொத்த எச்சரிக்கை அறிக்கை",
      "message":"செய்தி",
      "of":"இன்",
      "alarmreport":"எச்சரிக்கை அறிக்கை",
      "selectmachine":"இயந்திரத்தைத் தேர்ந்தெடுக்கவும்",
      "selecttype":"வகை தேர்ந்தெடு",
       "fromdate":"முதல் தேதி",
       "todate":"கடைசி தேதி",
       "all":"அனைத்து",
       "viewreport":"அறிக்கை",
       "selectoperator":"இயக்குபவர் தேர்ந்தெடு",
       "operator":"இயக்குபவர்",
       "machinename":"இயந்திரத்தின் பெயர்",
       "shifttime":"வேலை நேரம்",
       "shift":"வேலை",
       "operatorname":"இயக்குபவர் பெயர்",
       "alarmtime":"எச்சரிக்கை நேரம்",
       "alarmmessage":"எச்சரிக்கை செய்தி",
       "selectshift":"வேலை தேர்ந்தெடுக்கவும்",
       "alarmnumber":"எச்சரிக்கை எண்",
       "report":"அறிக்கை",
       "split":"பிளவு",
       "jobdescription":"வேலை விவரம்",
       "programnumber":"நிரல் எண்",
        "partsproduced":"பாகங்கள் உற்பத்தி",
        "loadingandunloadingtime":"நேரம் ஏற்றுதல் மற்றும் இறக்கும்",
        "idletime":"செயலற்ற நேரம்",
        "totaldowntime":"மொத்த செயலற்ற நேரம்",
        "actualrunning":"உண்மையான இயங்கும்",
        "actualworkinghours":"உண்மையான வேலை நேரம்",
        "notificationsettings":"அறிவிப்பு அமைப்புகள்",
        "timeintervel":"நேர இடைவேளை",
        "reason":"காரணம்",
        "enable/disablenotification":"இயக்கு/முடக்கு அறிவிப்பு",
        "select":"தேர்வு",
        "machineregistration":"இயந்திர பதிவு",
        "controllermodelnumber":"கட்டுப்படுத்தி மாதிரி எண்",
        "machinetype":"இயந்திர வகை",
        "machineserialnumber":"இயந்திர வரிசை எண்",
        "unit":"அலகு",
        "unit1":"அலகு1",
         "unit2":"அலகு2",
         "unit3":"அலகு3",
         "unit4":"அலகு4",
         "unit5":"அலகு5",
         "selectunit":"அலகு தேர்ந்தெடுக்கவும்",
         "save":"சேமி",
         "cancel":"ரத்து",
         "close":"மூடு",
         "model":"மாதிரி",
         "serialnumber":"வரிசை எண்",
         "controller":"கட்டுப்படுத்தி",
         "ip":"ஐபி",
         "internetstatus":"இணைய நிலை",
        "ethernetstatus":"ஈத்தர்நெட் நிலை",
        "status":"நிலைமை",
        "shiftregistration":"வேலை பதிவு",
        "daystarttime":"நாள் தொடக்க நேரம்",
        "numberofshift":"வேலை எண்ணிக்கை",
        "shifttransactionregistration":"பரிவர்த்தனைகளின் வேலை பதிவு",
        "workingtime":"வேலை நேரம்",
        "shiftstarttime":"தொடக்க வேலை நேரம்",
        "shiftendtime":"வேலை நேரம் முடிந்தது",
        "action":"செயல் ",
        "shiftnumber":"வேலை எண்",
        "endtime":"முடிவு நேரம்",
        "number":"எண்",
        "registrationcompleted":"பதிவு முடிந்தது",
        "clientregistration":"நுகர்வி பதிவு",
        "clientname":"நுகர்வி பெயர்",
        "emailid":"மின்னஞ்சல் முகவரி",
        "mobilenumber":"தொலைபேசி எண்",
        "required":"தேவையான",
        "name":"பெயர்",
        "operatorregistration":"இயக்குபவர் பதிவு",
      "operatorname":"இயக்குபவர் பெயர்",
      "others":"மற்றவர்கள்",
      "created":"உருவாக்கப்பட்டது",
      "from-todate":"முதல்-கடைசி தேதி",
      "userregistration":"உபயோகிப்போர் பதிவு",
      "role":"பங்கு",
      "firstname":"முதல் பெயர்",
      "lastname":"கடைசி பெயர்",
      "newuserregistration":"புதிய உபயோகிப்போர் பதிவு",
      "selectrole":"தேர்வு பங்கு",
      "userrole":"பயனர் பங்கு",
      "remarks":"கருத்துக்கள்",
      "edituserregistration":"பயனர் பதிவுகளைத் திருத்தவும்",
      "notvalidemailid":"செல்லுபடியாகாத மின்னஞ்சல் முகவரி இல்லை",
      "lastupdatedtime":"கடைசியாக புதுப்பிக்கப்பட்ட நேரம்",
      "downtimedetails":"செயலற்ற நேரம்",
      "possibleload&unloadtime":"சாத்தியமான சுமை & ஏற்ற நேரம்",
      "total":"மொத்தம்",
      "jobid":"வேலை ஐடி",
      "partscount":"பகுதிகள் எண்ணிக்கை",
      "rejects":"நிராகரிக்கப்பட்டது",
      "rework":"மறுவேலை",
      "inspection":"ஆய்வு",
      "remainingparts":"மீதமுள்ள பாகங்கள்",
      "partsdelivered":"பாகங்கள் வழங்கப்பட்டன",
      "stopping":"நிறுத்தும்",
      "remaining":"மீதமுள்ள",
      "graphicalrepresentation":"வரைகலை பிரதிநிதித்துவம்",
      "selectmachinename":"இயந்திரத்தின் பெயரைத் தேர்ந்தெடுக்கவும்",
      "selectdate":"தேதி தேர்வு",
      "parts":"பாகங்கள்",
      "jobregistration":"வேலை பதிவு",
      "partname":"பகுதி பெயர்",
      "partnumber":"பகுதி எண்",
      "orderquantity":"ஆர்டர் அளவு",
      "jobstartdate":"வேலை தொடக்க தேதி",
      "jobenddate":"வேலை முடிவு தேதி",
      "quantity":"அளவு",
      "startdate":"தொடக்க தேதி",
      "enddate":"கடைசி தேதி",
      "note:pleaseregisteroperationsundertheactionstabforeachjob":
      "குறிப்பு: தயவுசெய்து ஒவ்வொரு வேலைக்கும் நடவடிக்கைகளின் கீழ் பதிவுசெய்து கொள்ளுங்கள்",
      "companyname":"நிறுவனத்தின் பெயர்",
      "addressline1":"முகவரி 1",
      "addressline2":"முகவரி 2",
      "city":"நகரம்",
      "state":"மாநிலங்களில்",
      "country":"நாடு",
      "pincode":"அஞ்சல் குறியீடு",
      "agreethetermsandpolicy":"விதிமுறைகள் மற்றும் கொள்கையை ஏற்கவும்",
      "alreadyhaveanaccount":"ஏற்கனவே ஒரு கணக்கு உள்ளதா",
      "register":"பதிவு",
      "registertocontinuewith":"Yantra 24x7 தொடர பதிவு செய்யவும்",
      "aboutcompany":"நிறுவனம் பற்றி",
      "copyright":"பதிப்புரிமை",
      "allrightsreserved":"அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை",
      "privacypolicy":"தனியுரிமை கொள்கை",
      "terms&conditions":"விதிமுறைகள் மற்றும் நிபந்தனைகள்",
      "edituserprofile":"பயனர் சுயவிவரம் திருத்த",
      'recentalarms':"சமீபத்திய எச்சரிக்கை",
      "details":"விவரங்கள்",
      "partscountdetails":"பகுதிகள் எண்ணிக்கை விவரங்கள்",
      "datacollection":"தரவு சேகரிப்பு",
      "question1":"சிஎன்சி இயந்திரங்கள் இருந்து தரவு மீட்பு என்ன முறை",
      "answer1":"ஈத்தர்நெட் மற்றும் RS232 ( சீரியல் போர்ட் ) முறையில் தரவு மீட்பு",
      "question2":"சிஎன்சி மெஷினரிடமிருந்து தரவு மீட்டெடுப்பதற்கு எத்தனை வன்பொருள் சாதனம் தேவைப்படுகிறது",
      "answer2":"ஒன்று, வன்பொருள் சாதனம் ஈத்தர்நெட் பயன்முறையில் 10 சிஎன்சி இயந்திரங்கள் வரை இணைக்க முடியும்",
      "question3":"தரவு நுழைவு திரைகளை பயன்படுத்தும் கணினிகளில் இணைய அணுகல் தேவையா",
      "answer3":"ஆம்! பயன்பாடு நிறுவலுக்கு இணைய அணுகல் தேவைப்படுகிறது",
      "question4":"சிஎன்சி இயந்திரங்கள் நேரடியாக இணையத்துடன் இணைக்கப்பட்டுள்ளனவா",
      "answer4":"இல்லை! வன்பொருள் சாதனம் சுவிட்சுடன், கணினிகளுக்கான அணுகல், இயந்திரம் நேரடியாக இணையத்தில் அணுகல் தேவையில்லை.",
      "question5":"நான் பழைய இயந்திரங்கள் இருந்தால் - சீரியல் போர்ட்",
      "answer5":"எந்த பிரச்சினையும் இல்லை. Yantra 24x7 தரவு சேகரிக்க ஒவ்வொரு கணினிகளிலும் இணைக்க எளிதான ஒரு குறைந்த செலவு வன்பொருள் சாதனம் வழங்குகிறது",
      "question6":"வேலையில்லா காரணங்களுக்காக நுழைய ஒரு வழி இருக்கிறதா",
      "answer6":"ஆம்! Yantra 24x7 என்பது, பிசி  மற்றும் டேப்லெட்டுகளில் உள்ள தரவு நுழைவுத் திரையைப் பயன்படுத்துவது, பயனர் வரையறுக்கப்பட்ட வேலையில்லாத காரணங்களுக்காக நுழைவதை எளிதாக்குகிறது",
      "licensing":"உரிமம்",
      "question7":"ஒரு சிஎன்சி மெஷினின் ஒரு துண்டு இருந்து மற்றொரு உரிமம் செல்ல முடியும்",
      "answer7":"ஆம்! ஐபி அமைப்பை அடிப்படையாக இயந்திரத்திலிருந்து இயந்திரம் அனுமதிக்கும் உரிமங்களை நீங்கள் நகர்த்தலாம்",
      "question8":"நான் ஒரு ஆலையிலிருந்து இன்னொருவருக்கு உரிமம் வழங்கலாமா",
      "answer8":"ஆம்! ஆலை அதே கணக்குக்குள் இருக்கும் வரை உரிமங்களை எந்தவொரு கருவிகளுக்கும் நகர்த்த முடியும்",
      "question9":"உரிமம் அதிகரிக்கலாம் அல்லது எளிதாக குறைக்க முடியுமா",
      "reporting":"அறிக்கை",
      "question10":"எத்தனை பேர் ஒரு நேரத்தில் அறிக்கைகளை இயக்க முடியும்",
      "question11":"என் வசதிக்கு வெளியில் இருந்து அறிக்கைகளை அணுக முடியுமா",
      "answer11":"ஆம்! உங்களுக்கு இணைய அணுகல் இருக்கும் வரை, எங்கிருந்தும் அறிக்கைகள் எடுக்கலாம்",
      "question12":"சிஎன்சி இயந்திரத்தின் நிலையை தொலைபேசியிலிருந்து பார்க்க முடியுமா",
      "answer12":"ஆம்! தொலைபேசிகள் மற்றும் டேப்லெட்களுக்கான மொபைல் பயன்பாடுகள் Apple iOS மற்றும் Google Android இரண்டிற்கும் கிடைக்கின்றன",
      "question13":"சிஎன்சி இயந்திரத்தின் நிலையை பிசி  இருந்து  பார்க்க முடியுமா",
      "answer13":"ஆம்! நிச்சயமாக பிசி இருந்து தரவு கண்காணிக்க முடியும்",
      "question14":"எல்லா அறிக்கையையும் நான்  பார்க்க முடியுமா",
      "answer14":"நீங்கள் மாற்றீடாக, இயக்குபவர் வாரியாக, மணிநேர வாரியாக, திட்ட எண் வாரியாக எடுக்கலாம்",
      "question15":"நான் தேதிவாரியாக பயன்பாடுகளை இயந்திரத்தின் அறிக்கையை பார்க்க முடியுமா",
      "answer15":"ஆம்! தேதி மற்றும் மாதாந்திர இயந்திரத்தின் பயன்பாடுகளை பார்க்க முடியும்",
      "question16":"நான் சுழற்சி நேரம் மற்றும் பகுதிகள் எண்ணிக்கையை கணக்கிட முடியுமா",
      "answer16":"ஆம்! நீங்கள் சுழற்சி  நேரம் மற்றும் பாகங்களை கணக்கிட, இயந்திரத்தின் நிலையையும் பார்க்க முடியும்",
      "securityandprivacy":"பாதுகாப்பு மற்றும் தனியுரிமை",
      "question17":"எனது தரவு பாதுகாப்பானதா",
      "answer17":"ஆம்! அனைத்து தரவுகலும் கிளவுடில் பாதுகாக்கப்படுகிறது",
      "question18":"என் பணியாளர்களின் தகவலை நீங்கள் விற்க அல்லது கொடுக்கலாமா",
      "answer18":"இல்லை! இல்லை, எந்த சூழ்நிலையிலும் இல்லை",
      "mydata":"என் தரவு",
      "question19":"தரவுகளின் நகலை நான் பெறலாமா",
      "support":"ஆதரவு",
      "questoion20":"ரிமோட் பயன்பாட்டு ஆதரவுக்காக கட்டணம் விதிக்கிறீர்களா",
      "answer20":"",
      "question21":"பிழைத்திருத்தம் மற்றும் நெட்வொர்க்கிங் பிரச்சினைகள் போன்ற உதவி தேவைப்பட்டால்",
      "doyouwanttodelete":"நீக்க வேண்டுமா",
      "theusernameorpasswordisincorrect":"பயனர் பெயர் அல்லது கடவுச்சொல் தவறானது",
      "pleaseentercorrectemailorphonenumber":"சரியான மின்னஞ்சல் அல்லது தொலைபேசி எண்ணை உள்ளிடவும்",
      "checkyouremailandresetyourpassword":"உங்கள் மின்னஞ்சலை சரிபார்த்து உங்கள் கடவுச்சொல்லை மீட்டமைக்கவும்",
      "pleaseselectoperator":"தயவுசெய்து ஆபரேட்டரை தேர்ந்தெடுக்கவும்",
      "pleaseselectmachine":"தயவுசெய்து இயந்திரத்தைத் தேர்ந்தெடுக்கவும்",
      "breaktimedetails":"இடைவேளை விவரங்கள்",
      "breakstarttime":"இடைவேளை தொடக்க நேரம்",
      "breakendtime":"இடைவேளை முடிவு நேரம்",
      "breaktimeregistration":"இடைவேளை நேரம் பதிவு",
      "areyousurewanttologout":"நீங்கள் வெளியேற வேண்டுமா?",
      "thankyouforregistering":"Yantra24X7 உடன் பதிவுசெய்ததற்கு நன்றி",
      "required":"தேவையான",
      "notvalidemailid":"சரியான மின்னஞ்சல் இல்லை",
      "onlynumbersallowedmaximum10numbers":"எண்கள் மட்டுமே அனுமதிக்கப்பட்டன, அதிகபட்சம் 10 எண்கள்",
      "send":"அனுப்பு",


      "registrationcompleted":"பதிவு முடிந்தது",
      "registrationfailed":"பதிவு தோல்வியடைந்தது",
      "updatedsuccessfully":"வெற்றிகரமாக புதுப்பிக்கப்பட்டது",
      "updationfailed":"புதுப்பித்தல் தோல்வியடைந்தது",
      "deletesuccessfully":"வெற்றிகரமாக நீக்கப்பட்டது",
      "deletefailed":"நீக்குவது தோல்வியடைந்தது",


      


      

    }


var hi_translations = {
  "login":"लॉग इन करें",
  "username":"उपयोगकर्ता नाम",
     "password":"पारण शब्द",
     "signup":"साइन अप करें",
     "forgotpassword":"पासवर्ड भूल गए",
     "haveaccount":"खाता है",
     "signintocontinue":"Yantra24x7 जारी रखने के लिए साइनइन",
      "dashboard":"डैशबोर्ड",
      "alarms":"एलार्म",
      "alerts":"अलर्ट",
      "alarmreport":"अलार्म रिपोर्ट",
      "log":"लॉग इन करें",
      "report":"रिपोर्ट",
      "notificationsetting":"अधिसूचना सेटिंग",
      "maintenance":"रखरखाव",
      "master":"स्वामी",
      "operatorentry":"ऑपरेटर प्रविष्टि",
      "machine":"मशीन",
      "machines":"मशीनों",
      "shift":"खिसक जाना",
      "client":"ग्राहक",
      "job":"काम",
      "user":"उपयोगकर्ता",
      "operator":"ऑपरेटर",
      "operatorallocation":"ऑपरेटर आवंटन",
      "feature":"सुविधा",
      "home":"होम",
      "export":"निर्यात",
      "overallmachinesstatus":"समग्र मशीन की स्थिति",
      "running":"दौड़ना",
      "idle":"बेकार",
      "stop":"रुकें",
      "nodata":"कोई आकड़ा उपलब्ध नहीं है",
      "today":"आज",
      "shifttime":"पाली का समय",
      "starttime":"समय शुरू",
      "lastupdate":"आखिरी अपडेट",
      "utilization":"उपयोग",
      "partsproduced":"भागों का उत्पादन किया",
      "cycletime":"समय चक्र",
      "runtime":"क्रम",
      "downtime":"स्र्कना",
      "stoptime":"रुकने का समय",
      "nos":"nos",
      "notavaliable":"उपलब्ध नहीं है",
      "currentshiftdetails":"वर्तमान शिफ्ट विवरण",
      "operatorname":"ऑपरेटर का नाम",
      "operatorid":"ऑपरेटर आईडी",
      "machineid":"मशीन आईडी",
      "machinename":"मशीन का नाम",
      "description":"विवरण",
      "search":"खोज",
      "page":"पृष्ठ",
      "overallalarm":"समग्र अलार्म",
      "alarmtype":"अलार्म प्रकार",
      "date":"तारीख",
      "time":"पहर",
      "duration":"अवधि",
      "overallalarmhistory":"समग्र अलार्म इतिहास",
      "alarmstatus":"अलार्म स्थिति",
      "axisnumber":"धुरी संख्या",
      "export":"निर्यात",
      "overallalertreport":"समग्र चेतावनी रिपोर्ट",
      "message":"संदेश",
      "of":"का",
      "alarmreport":"अलार्म रिपोर्ट",
      "selectmachine":"मशीन का चयन करें",
      "selecttype":"प्रकार चुनें",
       "fromdate":"तारीख से",
       "todate":"तारीख तक",
       "all":"सब",
       "viewreport":"रिपोर्ट देखें",
       "selectoperator":"ऑपरेटर का चयन करें",
       "operator":"ऑपरेटर",
       "machinename":"मशीन का नाम",
       "shifttime":"पाली का समय",
       "shift":"खिसक जाना",
       "operatorname":"ऑपरेटर का नाम",
       "alarmtime":"अलार्म समय",
       "alarmmessage":"अलार्म संदेश",
       "selectshift":"शिफ्ट का चयन करें",
       "alarmnumber":"अलार्म नंबर",
       "report":"रिपोर्ट",
       "split":"विभाजित करें",
       "jobdescription":"नौकरी का विवरण",
       "programnumber":"कार्यक्रम संख्या",
        "partsproduced":"भागों का उत्पादन किया",
        "loadingandunloadingtime":"लोडिंग और अनलोडिंग समय",
        "idletime":"खाली समय",
        "totaldowntime":"कुल डाउन टाइम",
        "actualrunning":"वास्तविक चल रहा है",
        "actualworkinghours":"वास्तविक कामकाजी घंटों",
        "notificationsettings":"अधिसूचना सेटिंग",
        "timeintervel":"समय अंतराल",
        "reason":"कारण",
        "deviceip":"युक्ति आईपी",
        "enable/disablenotification":"अधिसूचना सक्षम / अक्षम करें",
        "select":"चुनते हैं",
        "machineregistration":"मशीन पंजीकरण",
        "controllermodelnumber":"नियंत्रक मॉडल संख्या",
        "machinetype":"मशीन की तरह",
        "machineserialnumber":"मशीन धारावाहिक संख्या",
        "unit":"इकाई",
        "unit1":"इकाई1",
         "unit2":"इकाई2",
         "unit3":"इकाई3",
         "unit4":"इकाई4",
         "unit5":"इकाई5",
         "selectunit":"इकाई का चयन करें",
         "save":"बचाना",
         "cancel":"रद्द करना",
         "close":"बंद करे",
         "model":"आदर्श",
         "serialnumber":"क्रमांक",
         "controller":"नियंत्रक",
         "ip":"आईपी",
         "internetstatus":"इंटरनेट की स्थिति",
        "ethernetstatus":"ईथरनेट की स्थिति",
        "status":"स्थिति",
        "shiftregistration":"स्थानांतरण शिफ्ट",
        "daystarttime":"दिन शुरू करने का समय",
        "numberofshift":"शिफ्ट की संख्या",
        "shifttransactionregistration":"स्थानांतरण लेनदेन पंजीकरण",
        "workingtime":"काम का समय",
        "shiftstarttime":"शिफ्ट शुरू करने का समय",
        "shiftendtime":"शिफ्ट अंत समय",
        "action":"कार्य",
        "shiftnumber":"शिफ्ट संख्या",
        "endtime":"अंतिम समय",
        "number":"संख्या",
        "registrationcompleted":"पंजीकरण पूरा हो गया",
        "clientregistration":"ग्राहक पंजीकरण",
        "clientname":"ग्राहक का नाम",
        "emailid":"ईमेल आईडी",
        "mobilenumber":"मोबाइल नंबर",
        "required":"अपेक्षित",
        "name":"नाम",
        "operatorregistration":"ऑपरेटर पंजीकरण",
      "operatorname":"ऑपरेटर का नाम",
      "others":"अन्य लोग",
      "created":"बनाया था",
      "from-todate":"आज से",
      "userregistration":"उपयोगकर्ता का पंजीकरण",
      "role":"भूमिका",
      "firstname":"पहला नाम",
      "lastname":"अंतिम नाम",
      "newuserregistration":"नया उपयोगकर्ता पंजीकरण",
      "selectrole":"भूमिका का चयन करें",
      "userrole":"उपयोगकर्ता भूमिका",
      "remarks":"टिप्पणियों",
      "edituserregistration":"उपयोगकर्ता पंजीकरण संपादित करें",
      "notvalidemailid":"मान्य ईमेल आईडी नहीं",
      "lastupdatedtime":"अंतिम अद्यतन समय",
      "downtimedetails":"नीचे समय विवरण",
      "possibleload&unloadtime":"संभव लोड और अनलोडटाइम",
      "total":"कुल",
      "jobid":"नौकरी आईडी",
      "partscount":"भागों गिनती है",
      "rejects":"को खारिज कर दिया",
      "rework":"फिर से काम",
      "inspection":"निरीक्षण",
      "remainingparts":"शेष भागों",
      "partsdelivered":"भागों वितरित",
      "stopping":"रोक",
      "remaining":"शेष",
      "graphicalrepresentation":"सचित्र प्रदर्शन",
      "selectmachinename":"मशीन का नाम चुनें",
      "selectdate":"तारीख़ चुनें",
      "parts":"भागों",
      "jobregistration":"नौकरी पंजीकरण",
      "partname":"भाग का नाम",
      "partnumber":"भाग संख्या",
      "orderquantity":"आदेश की मात्रा",
      "jobstartdate":"नौकरी की शुरुआत की तारीख",
      "jobenddate":"नौकरी की समाप्ति तिथि",
      "quantity":"मात्रा",
      "machineip":"मशीन आईपी",
      "startdate":"आरंभ करने की तिथि",
      "enddate":"अंतिम तिथि",
      "note:pleaseregisteroperationsundertheactionstabforeachjob":
      "नोट: कृपया प्रत्येक नौकरी के लिए क्रिया टैब के तहत संचालन पंजीकृत करें",
      "companyname":"कंपनी का नाम",
      "addressline1":"पता पंक्ति1",
      "addressline2":"पता पंक्ति2",
      "aboutcompany":"कम्पनी के बारे में",
      "city":"शहर",
      "country":"देश",
      "state":"राज्य",
      "pincode":"पिन कोड",
      "agreethetermsandpolicy":"नियम और नीति से सहमत हैं",
      "alreadyhaveanaccount":"क्या आपके पास पहले से एक खाता मौजूद है",
      "register":"रजिस्टर",
      "registertocontinuewith":"जारी रखने के लिए रजिस्टर करें Yantra24x7",
      "copyright":"कॉपीराइट",
      "allrightsreserved":"सर्वाधिकार सुरक्षित",
      "privacypolicy":"गोपनीयता नीति",
      "terms&conditions":"नियम एवं शर्तें",
      "edituserprofile":"उपयोगकर्ता प्रोफ़ाइल संपादित करें",
      "recentalarms":"हालिया अलार्म",
      "details":"विवरण",
      "partscountdetails":"भागों गिनती है विवरण",
      "doyouwanttodelete":"क्या आप हटाना चाहते हैं",
      "theusernameorpasswordisincorrect":"यूजरनेम या पासवर्ड गलत है",
      "pleaseentercorrectemailorphonenumber":"कृपया सही ईमेल या फोननंबर दर्ज करें",
      "checkyouremailandresetyourpassword":"अपना ईमेल जांचें और अपना पासवर्ड रीसेट करें",
      "pleaseselectoperator":"कृपया ऑपरेटर का चयन करें",
      "pleaseselectmachine":"कृपया मशीन का चयन करें",
      "breaktimedetails":"ब्रेक टाइम विवरण",
      "breakstarttime":"ब्रेक स्टार्ट टाइम",
      "breakendtime":"अंत समय तोड़ो",
      "breaktimeregistration":"ब्रेक टाइम पंजीकरण",
      "areyousurewanttologout":"क्या आप निश्चित रूप से लॉगआउट करना चाहते हैं?",
      "thankyouforregistering":"Yantra24X7 के साथ पंजीकरण के लिए धन्यवाद",
      "required":"अपेक्षित",
      "notvalidemailid":"वैध ईमेल नहीं है",
      "onlynumbersallowedmaximum10numbers":"केवल संख्या अनुमत, अधिकतम 10 संख्याएं",
      "send":"भेजना",


      "registrationcompleted":"पंजीकरण पूरा हो गया",
      "registrationfailed":"पंजीकरण विफल",
      "updatedsuccessfully":"अद्यतन सफलतापूर्ण हो गया",
      "updationfailed":"अद्यतन विफल",
      "deletesuccessfully":"सफलतापूर्वक हटाएं",
      "deletefailed":"हटाएं विफल",




}

   
    
    $translateProvider.translations('en',en_translations);
    
    $translateProvider.translations('ta',ta_translations);

    $translateProvider.translations('hi',hi_translations);
    
    $translateProvider.preferredLanguage('ta');
  }])


  // run function for session handing

  .run(function ($rootScope, $location,$http) {
  //  var authcode=sessionStorage.getItem("authkey");
  //  if(authcode !=null){
  //   $http.defaults.headers.common['Authorization'] = authcode;    
  //  }else{
  //   $location.path('/login')
  //  }
    $rootScope.$on("$locationChangeStart", function (event, next, current) {
      // handle route changes  
      $rootScope.currentPath = $location.path();
      $rootScope.sidepath=$location.path().replace("/","")

      //console.log($rootScope.currentPath)
      if (localStorage.getItem("tenant_id") == null && $rootScope.currentPath != '/registration' && $rootScope.currentPath != '/alldetails' && $rootScope.currentPath != '/companydetails' && $rootScope.currentPath != '/frontpage' && $rootScope.currentPath != '/adminuser' && $rootScope.currentPath != '/device' && $rootScope.currentPath != '/setting' && $rootScope.currentPath != '/register_tenant' && $rootScope.currentPath != '/tenant' && $rootScope.currentPath != '/paymenttype' && $rootScope.currentPath != '/tenantmachine' && $rootScope.currentPath != '/tenantpayment_type' && $rootScope.currentPath != '/install_details'
        && $rootScope.currentPath != '/device_registration'  && $rootScope.currentPath != '/payment' && $rootScope.currentPath != '/outviewdetails' 
        && $rootScope.currentPath != '/item' && $rootScope.currentPath != '/itemdetails' && $rootScope.currentPath != '/statuschart' && $rootScope.currentPath != '/faq_question' && $rootScope.currentPath != '/changepassword') {
        $location.path('/login')
        return;
      }

      if ($rootScope.currentPath == '/machine_registration' || $rootScope.currentPath== '/shift_registration'  || $rootScope.currentPath == '/client' || $rootScope.currentPath == '/job_registration' || $rootScope.currentPath== '/usermanagement' || $rootScope.currentPath== '/operator_masters' || $rootScope.currentPath == '/operator_allocation_masters') {
      
        $rootScope.masterShow = true;
       
      }else{
        $rootScope.masterShow = false;
      }

    });
  })


 
   // common controller
  .controller('appctrl', ['$scope', '$http', '$location', '$rootScope', '$window', '$templateCache','$translate',
    function ($scope, $http, $location, $rootScope, $window, $templateCache,$translate) {

 $rootScope.masterShow = false;

      $scope.currentPath = $location.path();

     //  $rootScope.api_url='http://dp.yantra24x7.com/';
    //  $rootScope.api_url_report='http://dp.yantra24x7.com/';

    $rootScope.api_url = "http://192.168.1.48:3007/";

   //  $rootScope.api_url = "http://192.168.1.71:3040/";
     $rootScope.api_url_report = "http://192.168.1.48:3007/";



     $rootScope.changeLanguage = function(lang){
        
      $translate.use(lang); 
     }



      //alarm slide function
      $rootScope.alarmClick = function () {
        $scope.myLoader = true;
        $http({
            method: 'GET',
            url: $rootScope.api_url + 'api/v1/machines/dashboard_status_1?tenant_id=' + $scope.tenant_id + '&type=Alarm'
          })
          .then(function (response) {
            $scope.AlarmDash = response.data;
            $scope.myLoader = false;
          })

      }

      $scope.const = function () {
       
        $scope.CurrentDate = new Date();
        $scope.tenant_id = localStorage.getItem("tenant_id");
        $scope.username = localStorage.getItem("username");
        $scope.roleforpage = localStorage.getItem("role_id");
        $scope.useridforedit = localStorage.getItem("userid");
        $rootScope.usertype_id=localStorage.getItem("usertype_id");
       
           if( $scope.useridforedit != null){ 
        $http({
            method: 'GET',
            url: $rootScope.api_url + 'api/v1/users/' + $scope.useridforedit
          })
          .then(function (response) {
            $rootScope.userbyid = response.data;
            $rootScope.tenant_nme = response.data.tenant;
             $rootScope.tents = $rootScope.tenant_nme.tenant_name;
          })
        }

   
      }

      if (localStorage.getItem("username") != null) {
      $scope.const(); 
      }
      //logout function
      $scope.signout = function () {
        $templateCache.removeAll();
        localStorage.clear();
        $window.location = "/#!/login"
      }

      //side bar path redirect
      $scope.pageverification1 = function (url) {
        $scope.urls = url.substring(3);

        $location.path($scope.urls);
      }

      $scope.pageverification = function (url) {
        $scope.urls = url.substring(3);
        $location.path($scope.urls);
      }



        //dashboard user edit
      $scope.useredit = function () {

        $scope.profile_edit = angular.copy($rootScope.userbyid);
      }
      $scope.profile_edit = {
        id: null,
        first_name: "",
        last_name: "",
        email_id: "",
        password: "",
        phone_number: "",
        remarks: "",
        usertype_id: 1,
        approval_id: 1,
        role_id: null,
        tenant_id: $scope.tenant_id
      };
      $scope.usrid = $scope.useridforedit;
      $scope.usereditForm = function () {


        var profile_edit = {
          first_name: $scope.profile_edit.first_name,
          last_name: $scope.profile_edit.last_name,
          email_id: $scope.profile_edit.email_id,
          password: $scope.profile_edit.password,
          phone_number: $scope.profile_edit.phone_number,
          remarks: $scope.profile_edit.remarks,
          usertype_id: $scope.profile_edit.usertype_id,
          approval_id: $scope.profile_edit.approval_id,
          role_id: $scope.profile_edit.role_id,
          tenant_id: $scope.tenant_id
        };


        $http
          ({
            method: 'put',
            url: $rootScope.api_url + 'api/v1/users/' + $scope.profile_edit.id,
            data: profile_edit
          })

          .success(function (data) {

            if (data) {
              localStorage.setItem("username", data.first_name);
              $scope.username = data.first_name;
              // $state.go('/company_registration');
              alert($translate.instant('updatedsuccessfully'));
              $window.location.reload();
            } else {
              alert($translate.instant('updationfailed'));
            }

          });

      }

      


    }])

    

  .directive('ngConfirmClick', [
    function () {
      return {
        link: function (scope, element, attr) {
          var msg = attr.ngConfirmClick; // || "Are you sure?";
          var clickAction = attr.confirmedClick;
          element.bind('click', function (event) {
            if (window.confirm(msg)) {
              scope.$eval(clickAction)
            }
          });
        }
      };
    }
  ]);