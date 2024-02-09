# Add Ingress Rule to Security Group - AWS

## Table of Contents

- [Add Ingress Rule to Security Group - AWS](#add-ingress-rule-to-security-group---aws)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Getting Started](#getting-started)
    - [Supported IAP Versions](#supported-iap-versions)
    - [External Dependencies](#external-dependencies)
    - [Adapters](#adapters)
    - [How to Install](#how-to-install)
    - [Testing](#testing)
  - [Using this Workflow Project](#using-this-workflow-project)
    - [Entry Point IAP Component](#entry-point-iap-component)
    - [Inputs](#inputs)
    - [Outputs](#outputs)
    - [API Links](#api-links)
    - [Example Inputs and Outputs](#example-inputs-and-outputs)
  - [Support](#support)

## Overview

A modular workflow that automates adding an ingress rule to a security group.

Capabilities include:
- The workflow is used to add Ingress Rule to Security group in AWS


## Getting Started

### Supported IAP Versions

Itential Workflow Projects are built and tested on particular versions of IAP. In addition, Workflow Projects are often dependent on external systems and as such, these Workflow Projects will have dependencies on these other systems. This version of **Add Ingress Rule to Security Group - AWS** has been tested with:


- IAP **2023.1**



### External Dependencies

This version of **Add Ingress Rule to Security Group - AWS** has been tested with:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>OS Version</th>
      <th>API Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>AWS</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>




### Adapters

This version of **Add Ingress Rule to Security Group - AWS** has been tested with:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Version</th>
      <th>Configuration Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://gitlab.com/itentialopensource/adapters/cloud/adapter-aws_ec2">adapter-aws_ec2</a></td>
      <td>^0.7.2</td>
      <td>In order to run the workflows in this Pre-Built Automation, the adapter property <code>xmlArrayKeys</code> must be added to the AWS EC2 adapter configuration with value as seen below:

```json
"xmlArrayKeys": [
  "item"
]
```

This will ensure all response objects will set the data type of any instance of property <code>item</code> to an array, even if a single element is assigned to the property.</td>
    </tr>
  </tbody>
</table>



### How to Install

To install the Workflow Project:

- Verify you are running a supported version of the Itential Automation Platform (IAP) as listed above in the [Supported IAP Versions](#supported-iap-versions) section in order to install the Workflow Project.
- Import the Workflow Project in [Admin Essentials](https://docs.itential.com/docs/importing-a-prebuilt-4).

### Testing

While Itential tests this Workflow Project and its capabilities, it is often the case the customer environments offer their own unique circumstances. Therefore, it is our recommendation that you deploy this Workflow Project into a development/testing environment in which you can test the Workflow Project.

## Using this Workflow Project


### Entry Point IAP Component

The primary IAP component to run this Workflow Project is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Add Ingress Rule to Security Group - AWS</td>
      <td>Workflow</td>
    </tr>
  </tbody>
</table>

### Inputs

The following table lists the inputs to the Workflow Project:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>sourceCidrIp</td>
      <td>string</td>
      <td>yes</td>
      <td>The IPv4 address range, in CIDR format</td>
      <td><pre lang="json">19.27.253.13/32</pre></td>
    </tr>    <tr>
      <td>fromPort</td>
      <td>number</td>
      <td>yes</td>
      <td>The start of port range for the TCP and UDP protocols, or an ICMP type number</td>
      <td><pre lang="json">80</pre></td>
    </tr>    <tr>
      <td>toPort</td>
      <td>number</td>
      <td>yes</td>
      <td>The end of port range for the TCP and UDP protocols, or an ICMP code number</td>
      <td><pre lang="json">80</pre></td>
    </tr>    <tr>
      <td>groupId</td>
      <td>string</td>
      <td>yes</td>
      <td>The ID of the security group</td>
      <td><pre lang="json">sg-08f249db62d26d8a6</pre></td>
    </tr>    <tr>
      <td>ipProtocol</td>
      <td>string</td>
      <td>yes</td>
      <td>The IP protocol name ( tcp , udp , icmp ) or number</td>
      <td><pre lang="json">TCP</pre></td>
    </tr>    <tr>
      <td>adapterId</td>
      <td>string</td>
      <td>yes</td>
      <td>AWS EC2 adapter to use</td>
      <td><pre lang="json">EC2</pre></td>
    </tr>
  </tbody>
</table>



### Outputs

The following table lists the outputs of the Workflow Project:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>updatedSecurityGroup</td>
      <td>object</td>
      <td>The result of Create rule request</td>
      <td><pre lang="json">{
  "icode": "AD.200",
  "response": {
    "AuthorizeSecurityGroupIngressResponse": {
      "_attr": {
        "xmlns": "http://ec2.amazonaws.com/doc/2016-11-15/"
      },
      "requestId": "2cf4e379-aac3-4fbe-b75d-543127204d91",
      "return": "true",
      "securityGroupRuleSet": {
        "item": [
          {
            "groupOwnerId": "314014972859",
            "groupId": "sg-08f249db62d26d8a6",
            "securityGroupRuleId": "sgr-08f9a989136861e6c",
            "isEgress": "false",
            "ipProtocol": "tcp",
            "fromPort": "80",
            "toPort": "80",
            "cidrIpv4": "19.27.253.13/32"
          }
        ]
      }
    }
  }
}</pre></td>
    </tr>
  </tbody>
</table>

  
#### Query Output
    

The following items show how to query successful results from the output:

      
##### Security Group Rule ID

`updatedSecurityGroup.response.AuthorizeSecurityGroupIngressResponse.securityGroupRuleSet.item[0].securityGroupRuleId`

      
    
    
  


### API Links



- [Authorize Security Group Ingress - AWS EC2](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AuthorizeSecurityGroupIngress.html)
 


### Example Inputs and Outputs

  
#### Example 1

    
Input:
<pre>{
  "sourceCidrIp": "19.27.253.13/32", 
  "fromPort": 80, 
  "groupId": "sg-08f249db62d26d8a6", 
  "ipProtocol": "TCP", 
  "toPort": 80, 
  "adapterId": "EC2" 
} </pre>

    
    
Output:
<pre>{
  "updatedSecurityGroup": {
    "icode": "AD.200",
    "response": {
      "AuthorizeSecurityGroupIngressResponse": {
        "_attr": { 
          "xmlns": "http://ec2.amazonaws.com/doc/2016-11-15/" 
        },
        "requestId": "2cf4e379-aac3-4fbe-b75d-543127204d91",
        "return": "true",
        "securityGroupRuleSet": {
          "item": [
            {
              "groupOwnerId": "314014972859",
              "groupId": "sg-08f249db62d26d8a6",
              "securityGroupRuleId": "sgr-08f9a989136861e6c",
              "isEgress": "false",
              "ipProtocol": "tcp",
              "fromPort": "80",
              "toPort": "80",
              "cidrIpv4": "19.27.253.13/32"
            }
          ]
        }
      }
    }
  }
} </pre>

    
  


## Support

Please use your Itential Customer Success account if you need support when using this Workflow Project.