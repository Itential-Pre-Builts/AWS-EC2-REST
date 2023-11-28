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
    - [Example Inputs and Outputs](#example-inputs-and-outputs)
  - [Support](#support)

## Overview

Create Security group with Ingress rules for AWS EC2

Capabilities include:
- The workflow is used to create Security group with Ingress rules for AWS EC2


## Getting Started

### Supported IAP Versions

Itential Workflow Projects are built and tested on particular versions of IAP. In addition, Workflow Projects are often dependent on external systems and as such, these Workflow Projects will have dependencies on these other systems. This version of **Create Security Group with Ingress Rules - AWS** has been tested with:


- IAP **2023.1**



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
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>adapter-aws_ec2</td>
      <td>0.7.2</td>
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
      <td>Create Security Group with Ingress Rules - AWS</td>
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
      <td>securityGroupId</td>
      <td>string</td>
      <td>ID of the created Security group</td>
      <td><pre lang="json">sg-0bd40e2d7195add77</pre></td>
    </tr>
  </tbody>
</table>

  
#### Query Output
    

The following items show how to query successful results from the output:

      
##### Security Group ID

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

    
  


## Support

Please use your Itential Customer Success account if you need support when using this Workflow Project.