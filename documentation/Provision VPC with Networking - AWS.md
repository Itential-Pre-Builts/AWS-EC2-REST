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
    - [Query Output](#query-output)
    - [Example Inputs and Outputs](#example-inputs-and-outputs)
    - [API Links](#api-links)
  - [Support](#support)

## Overview

A modular workflow that automates creating and configuring a VPC with networking in AWS.

Capabilities include:
- The workflow is used to create and configure VPC in AWS





## Getting Started

### Supported IAP Versions

Itential Workflow Projects are built and tested on particular versions of IAP. In addition, Workflow Projects are often dependent on external systems and as such, these Workflow Projects will have dependencies on these other systems. This version of **Provision VPC with Networking - AWS** has been tested with:


- IAP **2023.2**



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

The primary IAP component to run **Provision VPC with Networking - AWS** is listed below:

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

The following table lists the inputs for **Provision VPC with Networking - AWS**:

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

The following table lists the outputs for **Provision VPC with Networking - AWS**:

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



### Query Output


  

The following items show how to query successful results from the output of **Provision VPC with Networking - AWS**:

    
#### Created VPC ID

`vpcId`

    
#### Created Subnet ID

`subnetId`

    
#### Created Internet Gateway ID

`internetGatewayId`

    
#### Created Security Group ID

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
      <td>Create VPC - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpc.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpc.html</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Create Tags - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Create Subnet - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSubnet.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSubnet.html</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Create Internet Gateway - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateInternetGateway.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateInternetGateway.html</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Attach Internet Gateway - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachInternetGateway.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachInternetGateway.html</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Create Route - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateRoute.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateRoute.html</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Configure Route Tables - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Describe Route Tables - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeRouteTables.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeRouteTables.html</a></td>
      <td>Public</td>
    </tr>    <tr>
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

Please use your Itential Customer Success account if you need support when using **Provision VPC with Networking - AWS**.