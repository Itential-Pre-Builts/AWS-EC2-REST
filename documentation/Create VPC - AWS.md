# Create VPC - AWS

## Table of Contents

- [Create VPC - AWS](#create-vpc---aws)
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

A modular workflow that automates creating a VPC in AWS.

Capabilities include:
- The workflow is used to create a VPC in AWS





## Getting Started

### Supported IAP Versions

Itential Workflow Projects are built and tested on particular versions of IAP. In addition, Workflow Projects are often dependent on external systems and as such, these Workflow Projects will have dependencies on these other systems. This version of **Create VPC - AWS** has been tested with:


- IAP **2023.2**



### External Dependencies

This version of **Create VPC - AWS** has been tested with:

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

This version of **Create VPC - AWS** has been tested with:

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
- Import the Workflow Project in [Admin Essentials](https://docs.itential.com/docs/importing-pre-built-iap).

### Testing

While Itential tests this Workflow Project and its capabilities, it is often the case the customer environments offer their own unique circumstances. Therefore, it is our recommendation that you deploy this Workflow Project into a development/testing environment in which you can test the Workflow Project.

## Using this Workflow Project


### Entry Point IAP Component

The primary IAP component to run **Create VPC - AWS** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Create VPC - AWS</td>
      <td>Workflow</td>
    </tr>
  </tbody>
</table>

### Inputs

The following table lists the inputs for **Create VPC - AWS**:

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
      <td>cidrBlock</td>
      <td>string</td>
      <td>yes</td>
      <td>The IPv4 network range for the VPC, in CIDR notation</td>
      <td><pre lang="json">10.0.0.0/24</pre></td>
    </tr>    <tr>
      <td>vpcName</td>
      <td>string</td>
      <td>yes</td>
      <td>Name of the VPC</td>
      <td><pre lang="json">TEST VPC</pre></td>
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

The following table lists the outputs for **Create VPC - AWS**:

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
      <td>createdVpc</td>
      <td>object</td>
      <td>The Create VPC request result</td>
      <td><pre lang="json">{
  "icode": "AD.200",
  "response": {
    "CreateVpcResponse": {
      "_attr": {
        "xmlns": "http://ec2.amazonaws.com/doc/2016-11-15/"
      },
      "requestId": "da850668-b4d9-4c57-846a-7b64e487eef9",
      "vpc": {
        "vpcId": "vpc-057e1defa8211ba74",
        "ownerId": "314014972859",
        "state": "pending",
        "cidrBlock": "10.0.0.0/24",
        "cidrBlockAssociationSet": {
          "item": [
            {
              "cidrBlock": "10.0.0.0/24",
              "associationId": "vpc-cidr-assoc-0f0f4d51506a452cd",
              "cidrBlockState": {
                "state": "associated"
              }
            }
          ]
        },
        "ipv6CidrBlockAssociationSet": "",
        "dhcpOptionsId": "dopt-045a5c88c0d702d2b",
        "instanceTenancy": "default",
        "isDefault": "false"
      }
    }
  }
}</pre></td>
    </tr>
  </tbody>
</table>



### Query Output


  

The following items show how to query successful results from the output of **Create VPC - AWS**:

    
#### Created VPC ID

`createdVpc.response.CreateVpcResponse.vpc.vpcId`

    
#### Created VPC State

`createdVpc.response.CreateVpcResponse.vpc.state`

    
  
  




### Example Inputs and Outputs

  
#### Example 1

    
Input:
<pre>{
  "cidrBlock": "10.0.0.0/24",
  "adapterId": "EC2",
  "vpcName": "TEST VPC"
} </pre>

    
    
Output:
<pre>{
  "createdVpc": {
    "icode": "AD.200",
    "response": {
      "CreateVpcResponse": {
        "_attr": {
          "xmlns": "http://ec2.amazonaws.com/doc/2016-11-15/"
        },
        "requestId": "da850668-b4d9-4c57-846a-7b64e487eef9",
        "vpc": {
          "vpcId": "vpc-057e1defa8211ba74",
          "ownerId": "314014972859",
          "state": "pending",
          "cidrBlock": "10.0.0.0/24",
          "cidrBlockAssociationSet": {
            "item": [
              {
                "cidrBlock": "10.0.0.0/24",
                "associationId": "vpc-cidr-assoc-0f0f4d51506a452cd",
                "cidrBlockState": {
                  "state": "associated"
                }
              }
            ]
          },
          "ipv6CidrBlockAssociationSet": "",
          "dhcpOptionsId": "dopt-045a5c88c0d702d2b",
          "instanceTenancy": "default",
          "isDefault": "false"
        }
      }
    }
  }
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
    </tr>
  </tbody>
</table>


## Support

Please use your Itential Customer Success account if you need support when using **Create VPC - AWS**.