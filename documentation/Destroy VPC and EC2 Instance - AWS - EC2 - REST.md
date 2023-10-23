# Destroy VPC and EC2 Instance - AWS - EC2 - REST

## Table of Contents

- [Destroy VPC and EC2 Instance - AWS](#destroy-vpc-and-ec2-instance---aws---ec2---rest)
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

Destroy VPC And EC2 Instance in AWS

Capabilities include:
- The workflow is used to destroy VPC And EC2 Instance in AWS


## Getting Started

### Supported IAP Versions

Itential Workflow Projects are built and tested on particular versions of IAP. In addition, Workflow Projects are often dependent on external systems and as such, these Workflow Projects will have dependencies on these other systems. This version of **Destroy VPC and EC2 Instance - AWS - EC2 - REST** has been tested with:


- IAP **2023.1**



### External Dependencies

This version of **Destroy VPC and EC2 Instance - AWS - EC2 - REST** has been tested with:

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
      <td>0.6.9</td>
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
      <td>Destroy VPC and EC2 Instance - AWS</td>
      <td>Workflow</td>
    </tr>
  </tbody>
</table>

### Inputs

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
      <td>vpcId</td>
      <td>string</td>
      <td>yes</td>
      <td>The ID of the VPC</td>
      <td><pre lang="json">vpc-0ece2ed1b3725e018</pre></td>
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
      <td>deletedVPC</td>
      <td>object</td>
      <td>Delete VPC request result</td>
      <td><pre lang="json">{
  "icode": "AD.200",
  "response": {
    "DeleteVpcResponse": {
      "_attr": {
        "xmlns": "http://ec2.amazonaws.com/doc/2016-11-15/"
      },
      "requestId": "81a08c9a-f42d-49ea-9359-9213d2a11250",
      "return": "true"
    }
  }
}</pre></td>
    </tr> 
  </tbody>
</table>


#### Query Output
    

The following items show how to query successful results from the output:

      
##### Delete VPC Request Result

`deletedVPC.response`



### Example Inputs and Outputs

#### Example 1

    
Input:
<pre>{ 
  "vpcId": "vpc-0ece2ed1b3725e018",
  "adapterId": "EC2" 
} </pre>


Output:
<pre>{
  "deletedVPC": {
    "icode": "AD.200",
    "response": {
      "DeleteVpcResponse": {
        "_attr": {
          "xmlns": "http://ec2.amazonaws.com/doc/2016-11-15/"
        },
        "requestId": "81a08c9a-f42d-49ea-9359-9213d2a11250",
        "return": "true"
      }
    }
  }
} </pre>



## Support

Please use your Itential Customer Success account if you need support when using this Workflow Project.