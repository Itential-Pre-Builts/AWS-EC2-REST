# Provision VPC with Networking - AWS

## Table of Contents

- [Provision VPC with Networking - AWS](#provision-vpc-with-networking---aws)
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

Create and Configure VPC in AWS

Capabilities include:
- The workflow is used to create and configure VPC in AWS


## Getting Started

### Supported IAP Versions

Itential Workflow Projects are built and tested on particular versions of IAP. In addition, Workflow Projects are often dependent on external systems and as such, these Workflow Projects will have dependencies on these other systems. This version of **Provision VPC with Networking - AWS** has been tested with:


- IAP **2023.1**



### External Dependencies

This version of **Provision VPC with Networking - AWS** has been tested with:

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

This version of **Provision VPC with Networking - AWS** has been tested with:

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
      <td>^0.7.2</td>
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
      <td>Provision VPC with Networking - AWS </td>
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
      <td>vpcSubnet</td>
      <td>string</td>
      <td>yes</td>
      <td>The IPv4 network range for the VPC, in CIDR notation</td>
      <td><pre lang="json">10.20.30.1/28</pre></td>
    </tr>    <tr>
      <td>vpcName</td>
      <td>string</td>
      <td>yes</td>
      <td>Name of your VPC</td>
      <td><pre lang="json">Test VPC1234</pre></td>
    </tr>    <tr>
      <td>securityGroupName</td>
      <td>string</td>
      <td>yes</td>
      <td>Name of the Security group</td>
      <td><pre lang="json">TESTING 1</pre></td>
    </tr>    <tr>
      <td>securityGroupDesc</td>
      <td>string</td>
      <td>yes</td>
      <td>Description of the Security group</td>
      <td><pre lang="json">Security Group for TESTING</pre></td>
    </tr>    <tr>
      <td>ingressRules</td>
      <td>array</td>
      <td>yes</td>
      <td>List of rules</td>
      <td><pre lang="json">[
  {
    "sourceSubnetCidrMask": 32,
    "sourceIp": "199.27.253.134",
    "protocol": "TCP",
    "port": 80
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
      <td>vpcId</td>
      <td>string</td>
      <td>ID of the created VPC</td>
      <td><pre lang="json">vpc-0b678b7a21e66ded8</pre></td>
    </tr>    <tr>
      <td>subnetId</td>
      <td>string</td>
      <td>ID of the created subnet</td>
      <td><pre lang="json">subnet-097a82181b977273f</pre></td>
    </tr>    <tr>
      <td>internetGatewayId</td>
      <td>string</td>
      <td>ID of the created Internet gateway</td>
      <td><pre lang="json">igw-070593dabfda1adf0</pre></td>
    </tr>    <tr>
      <td>securityGroupId</td>
      <td>string</td>
      <td>ID of the created Security group</td>
      <td><pre lang="json">sg-0cdc4162d4cd16dfe</pre></td>
    </tr>
  </tbody>
</table>

  
#### Query Output
    

The following items show how to query successful results from the output:

      
##### Create VPC Result

`vpcId`

      
##### Create Subnet Result

`subnetId`

      
##### Create Internet Gateway Result

`internetGatewayId`

      
##### Create Security Group Result

`securityGroupId`

      
    
    
  



### Example Inputs and Outputs

  
#### Example 1

    
Input:
<pre>{
  "vpcSubnet": "10.20.30.1/28",
  "vpcName": "Test VPC1234",
  "adapterId": "EC2",
  "securityGroupName": "TESTING 1",
  "securityGroupDesc": "Security Group for TESTING",
  "ingressRules": [
    {
      "sourceSubnetCidrMask": 32, 
      "sourceIp": "199.27.253.134", 
      "protocol": "TCP", 
      "port": 80
    }
  ] 
} </pre>

    
    
Output:
<pre>{
  "vpcId": "vpc-0b678b7a21e66ded8",
  "subnetId": "subnet-097a82181b977273f",
  "internetGatewayId": "igw-070593dabfda1adf0",
  "securityGroupId": "sg-0cdc4162d4cd16dfe"
} </pre>

    
  


## Support

Please use your Itential Customer Success account if you need support when using this Workflow Project.