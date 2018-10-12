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
---

# Using EasyDisplay to monitor your AWS CloudWatch resources

Let us say you have a AWS Account and some resouces running there, 
and let us say you wish to keep an eye on those resources using EasyDisplay on your iPad.
We shall do that using the following steps

We shall do that using the following steps:


creating a new user for easydisplay: on AWS
  create the necessary AWS policies
  create a user for easydisplay to login with
create a guage on AWS CloudWatch
  

let us start and login to [AWS console account](https://console.aws.amazon.com/console/home)


Policy Name: *CloudWatchLogsReadOnlyAccess*

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": [
                "logs:Describe*",
                "logs:Get*",
                "logs:List*",
                "logs:TestMetricFilter",
                "logs:FilterLogEvents"
            ],
            "Effect": "Allow",
            "Resource": "*"
        }
    ]
}
```


Policy Name: *CloudWatchReadOnlyAccess*
 
 ```
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
 
 

 IAMUserChangePassword
 
 ```
 {
     "Version": "2012-10-17",
     "Statement": [
         {
             "Effect": "Allow",
             "Action": [
                 "iam:ChangePassword"
             ],
             "Resource": [
                 "arn:aws:iam::*:user/${aws:username}"
             ]
         },
         {
             "Effect": "Allow",
             "Action": [
                 "iam:GetAccountPasswordPolicy"
             ],
             "Resource": "*"
         }
     ]
 }
 ```


```js

easy display aws cloudwatch




https://292094595640.signin.aws.amazon.com/console/cloudwatch?region=eu-west-1#dashboards:name=Display




var element = document.getElementById('username');

element.value = "dashboard";
var ev = new Event('input', { bubbles: true});
ev.simulated = true;
element.value = "dashboard";
element.defaultValue = "dashboard";
element.dispatchEvent(ev);

var element2 = document.getElementById('password');
var ev2 = new Event('input', { bubbles: true});
ev2.simulated = true;
element2.value = "password";
element2.defaultValue = "password";
element2.dispatchEvent(ev2);

document.getElementById('signin_button').click();



var hideSidebarButton = document.getElementById("gwt-debug-toggleButton");
var ev3 = new Event('mousedown', { bubbles: true});
hideSidebarButton.dispatchEvent(ev3);


//   refresh
 document.getElementsByClassName("refresh")[0].dispatchEvent(new Event("click", {bubbles: true})) 


// open menu
var ev4 = new Event('click', { bubbles: true});
document.getElementsByClassName("cwdb-refresh-controls")[0].getElementsByClassName("cwui-dropdown-toggle")[0].dispatchEvent( ev4 );

// second option 
var ev5 = new Event('click', { bubbles: false});
ev5.simulated = true;
document.getElementsByClassName("cwui-dropdown-menu")[0].getElementsByTagName("li")[4].dispatchEvent( ev5 );


```



