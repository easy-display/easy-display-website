---
slug: "easydisplay-and-aws-cloudwatch"
date: "2018-10-05T06:15:59.165Z"
title: "Using EasyDisplay to keep an eye on your AWS Cloudwatch dashboard guages."
excerpt: "Let us say you have a AWS Account and you have some resouces running there, 
          and let us say you wish to keep an eye on those resources using EasyDisplay on your iPad. 
          We shall do that using the following ..."
tags: [ "easy-display", "aws" , "cloudwatch" ]
layout: blog
author: "Mohammed O. Tillawy"
author_image: "https://secure.gravatar.com/avatar/f70cf5d832c72d8f308471ae656b57dc"
cover_image: "./foundation-emails-guide@1x.jpg"
---

# Using EasyDisplay to monitor your AWS CloudWatch resources


Let us say you have a AWS Account and some resouces running there, 
and let us say you wish to keep an eye on those resources using EasyDisplay on your iPad.

We shall do that using the following steps:

  * create the necessary AWS IAM policies
  * creating a new user for easydisplay on AWS
  * get the federated link for login
  * create a guage on AWS CloudWatch
  * arrange the dashboard
  
---



###### let us start and login to [AWS console account](https://console.aws.amazon.com/console/home):
 ![asdf](aws-login.png)

---

###### go to IAM:

![asdf](aws-iam.png)

---

###### Create the necessary policy for read only access to CloudWatch:
 
![asdf](iam-dashboard.png)

![asdf](aws-iam-policy.png)

![asdf](aws-iam-create-policy-step-2.png)

![asdf](aws-create-policy-success.png)

Policy Name: *CloudWatchReadOnlyAccess*

Policy JSON:

```JSON
{
   "Version": "2012-10-17",
   "Statement": [
       {
           "Action": [
               "autoscaling:Describe*",
               "cloudwatch:Describe*",
               "cloudwatch:Get*",
               "cloudwatch:List*",
               "logs:Get*",
               "logs:List*",
               "logs:Describe*",
               "logs:TestMetricFilter",
               "logs:FilterLogEvents",
               "sns:Get*",
               "sns:List*"
           ],
           "Effect": "Allow",
           "Resource": "*"
       }
   ]
}
 ```
---

###### Time to create the IAM user

![asdf](aws-iam-create-user-0.png)


###### Create a new user called: easydisplay, and set the password to: passowrd

![asdf](aws-iam-create-user-1.png)
 
---

###### Attach the policy: CloudWatchReadOnlyAccess to the new user

![asdf](attach-policy-to-user.png)

###### Get the IAM users sign-in link:

![asdf](aws-iam-sign-in-link.png)


for example: this was my sign-in link is:

```
https://344790573488.signin.aws.amazon.com/console
```

---

###### we need to create the CloudWatch Dashboard

![asdf](aws-cloudwatch.png)

---

###### Create the dashboard, and name it EasyDisplay:

![asdf](aws-cloudwatch-create-dashboard.png)

---

###### Let us create the CloudWatch Widget in the new dashboard

* Create Widget
* Widget type: Number
* Metric: S3 metric, Storage Metrics of a bucket
* AllStorage Types, Number Of Object
* Statistic Sum
* Period: 30 Days


![asdf](create-widget-1.png)

![asdf](create-widget-2.png)

![asdf](create-widget-3.png)

![asdf](create-widget-4.png)

###### now edit the widget

![asdf](edit-widget-1.png)

###### set the Statistic to: Sum


![asdf](edit-widget-2.png)

###### set the Period to: 30 Days

![asdf](edit-widget-3.png)


---

###### Now it is time to use *EasyDisplay*
###### if you have't installed and paired yet, please check [this post](/using-easy-display).

---

###### launch easydisplay, and for the url, use the sign-in link we got previously, and add *#dashboards:name=EasyDisplay* to it

for example my final url is:
```
https://344790573488.signin.aws.amazon.com/console/cloudwatch?region=eu-west-1#dashboards:name=EasyDisplay
```

![asdf](easy-display-enter-url.png)

---

###### now run the following javascript: 

```js

/* YOU NEED TO CHANGE THE FOLLOWING - BEGIN*/
var userName = "easydisplay";
var userPassword = "password";
/* YOU NEED TO CHANGE THE FOLLOWING - END*/



var element = document.getElementById('username');

element.value = userName;
var ev = new Event('input', { bubbles: true});
ev.simulated = true;
element.value = userName;
element.defaultValue = userName;
element.dispatchEvent(ev);

var element2 = document.getElementById('password');
var ev2 = new Event('input', { bubbles: true});
ev2.simulated = true;
element2.value = userPassword;
element2.defaultValue = userPassword;
element2.dispatchEvent(ev2);

document.getElementById('signin_button').click();



var hideSidebarButton = document.getElementById("gwt-debug-toggleButton");
var ev3 = new Event('mousedown', { bubbles: true});
hideSidebarButton.dispatchEvent(ev3);


//   refresh
 document.getElementsByClassName("refresh")[0].dispatchEvent(
   new Event("click", {bubbles: true})
 ); 


// open menu
var ev4 = new Event('click', { bubbles: true});
document.getElementsByClassName("cwdb-refresh-controls")[0].getElementsByClassName("cwui-dropdown-toggle")[0].dispatchEvent( ev4 );



document.getElementsByClassName("cwui-dropdown-menu")[0].children[0].children[0].children[0].checked = true
var ev5 = new Event('click', { bubbles: true,cancelable: false});
ev5.simulated = true;
document.getElementsByClassName("cwui-dropdown-menu")[0].children[0].children[0].children[0].dispatchEvent(ev5);

//dismiss menu
var ev6 = new Event('click', { bubbles: true});
document.getElementsByClassName("cwdb-refresh-controls")[0].getElementsByClassName("cwui-dropdown-toggle")[0].dispatchEvent( ev6 );


```



