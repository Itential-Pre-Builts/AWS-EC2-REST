# Create Security Group with Ingress Rules - AWS

## Table of Contents

- [Create Security Group with Ingress Rules - AWS](#create-security-group-with-ingress-rules---aws)
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
    - [Query Output](#query-output)
    - [Example Inputs and Outputs](#example-inputs-and-outputs)
    - [API Links](#api-links)
  - [Support](#support)

## Overview

A modular workflow that automates creating a security group with ingress rules in AWS.

Capabilities include:
- Create a security group in AWS EC2
- Add ingress rule to created security group





## Getting Started

### Supported IAP Versions

Itential Workflow Projects are built and tested on particular versions of IAP. In addition, Workflow Projects are often dependent on external systems and as such, these Workflow Projects will have dependencies on these other systems. This version of **Create Security Group with Ingress Rules - AWS** has been tested with:


- IAP **2023.2**



### External Dependencies

This version of **Create Security Group with Ingress Rules - AWS** has been tested with:

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

This version of **Create Security Group with Ingress Rules - AWS** has been tested with:

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

The primary IAP component to run **Create Security Group with Ingress Rules - AWS** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Create Security Group with Ingress Rules - AWS</td>
      <td>Workflow</td>
    </tr>
  </tbody>
</table>

### Inputs

The following table lists the inputs for **Create Security Group with Ingress Rules - AWS**:

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
      <td>securityGroupDescription</td>
      <td>string</td>
      <td>yes</td>
      <td>A description for the security group</td>
      <td><pre lang="json">Web Servers</pre></td>
    </tr>    <tr>
      <td>securityGroupName</td>
      <td>string</td>
      <td>yes</td>
      <td>The name of the security group</td>
      <td><pre lang="json">WebServerSG</pre></td>
    </tr>    <tr>
      <td>vpcId</td>
      <td>string</td>
      <td>yes</td>
      <td>ID of the VPC</td>
      <td><pre lang="json">vpc-0324c35cf9d083a40</pre></td>
    </tr>    <tr>
      <td>ruleList</td>
      <td>array</td>
      <td>yes</td>
      <td>List of Ingress rules</td>
      <td><pre lang="json">[
  {
    "protocol": "TCP",
    "port": 80,
    "sourceIp": "199.27.253.134",
    "sourceSubnetCidrMask": 32
  },
  {
    "protocol": "TCP",
    "port": 80,
    "sourceIp": "19.27.253.134",
    "sourceSubnetCidrMask": 32
  }
]</pre></td>
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

The following table lists the outputs for **Create Security Group with Ingress Rules - AWS**:

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
      <td>securityGroupId</td>
      <td>string</td>
      <td>ID of the created Security group</td>
      <td><pre lang="json">sg-0bd40e2d7195add77</pre></td>
    </tr>
  </tbody>
</table>



### Query Output


  

The following items show how to query successful results from the output of **Create Security Group with Ingress Rules - AWS**:

    
#### Security Group ID

`securityGroupId`

    
  
  




### Example Inputs and Outputs

  
#### Example 1

    
Input:
<pre>{
  "securityGroupDescription": "TestING",
  "securityGroupName": "FOR TESTING",
  "vpcId": "vpc-004c7963c31a8d156",
  "adapterId": "EC2",
  "ruleList": [
    { 
      "protocol": "TCP", 
      "port": 80, 
      "sourceIp": "199.27.253.134", 
      "sourceSubnetCidrMask": 32 
    },
    { 
      "protocol": "TCP", 
      "port": 80, 
      "sourceIp": "19.27.253.134", 
      "sourceSubnetCidrMask": 32 
    }
  ]
} </pre>

    
    
Output:
<pre>{
  "securityGroupId": "sg-0bd40e2d7195add77"
} </pre>

    
  


### API Links


<table>
  <thead>
    <tr>
      <th>API Name</th>
      <th>API Documentation Link</th>
      <th>API Link Visibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Create Security Group - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSecurityGroup.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSecurityGroup.html</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Authorize Security Group Ingress - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AuthorizeSecurityGroupIngress.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AuthorizeSecurityGroupIngress.html</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>


## Support

Please use your Itential Customer Success account if you need support when using **Create Security Group with Ingress Rules - AWS**.