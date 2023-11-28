# Create Route - AWS

## Table of Contents

- [Create Route - AWS](#create-route---aws)
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

Create a route within a VPC in AWS

Capabilities include:
- The workflow is used to create a route within a VPC in AWS


## Getting Started

### Supported IAP Versions

Itential Workflow Projects are built and tested on particular versions of IAP. In addition, Workflow Projects are often dependent on external systems and as such, these Workflow Projects will have dependencies on these other systems. This version of **Create Route - AWS** has been tested with:


- IAP **2023.1**



### External Dependencies

This version of **Create Route - AWS** has been tested with:

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

This version of **Create Route - AWS** has been tested with:

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
      <td>Create Route - AWS</td>
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
      <td>routeTableId</td>
      <td>string</td>
      <td>no</td>
      <td>ID of the route table</td>
      <td><pre lang="json">rtb-06d646d475a5b5d48</pre></td>
    </tr>    <tr>
      <td>destinationCidrBlock</td>
      <td>string</td>
      <td>yes</td>
      <td>The IPv4 CIDR address block used for the destination match</td>
      <td><pre lang="json">0.0.0.0/0</pre></td>
    </tr>    <tr>
      <td>gatewayId</td>
      <td>string</td>
      <td>yes</td>
      <td>The ID of an internet gateway or virtual private gateway attached to your VPC</td>
      <td><pre lang="json">igw-0fae02dad528986b6</pre></td>
    </tr>    <tr>
      <td>vpcId</td>
      <td>string</td>
      <td>yes</td>
      <td>ID of the VPC</td>
      <td><pre lang="json">vpc-0324c35cf9d083a40</pre></td>
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
      <td>routeTableId</td>
      <td>string</td>
      <td>ID of the route table</td>
      <td><pre lang="json">rtb-06d646d475a5b5d48</pre></td>
    </tr>    <tr>
      <td>createdRoute</td>
      <td>object</td>
      <td>Result of the create route request</td>
      <td><pre lang="json">{
  "icode": "AD.200",
  "response": {
    "CreateRouteResponse": {
      "_attr": {
        "xmlns": "http://ec2.amazonaws.com/doc/2016-11-15/"
      },
      "requestId": "4e157878-b2fb-4f95-8312-8c3cbbec8b18",
      "return": "true"
    }
  }
}</pre></td>
    </tr>
  </tbody>
</table>

  
#### Query Output
    

The following items show how to query successful results from the output:

      
##### Route table ID

`routeTableId`

      
##### Create Route Request

`createdRoute.response`

      
    
    
  



### Example Inputs and Outputs

  
#### Example 1

    
Input:
<pre>{
  "routeTableId": "",
  "destinationCidrBlock": "0.0.0.0/0",
  "gatewayId": "igw-0fae02dad528986b6", 
  "adapterId": "EC2", 
  "vpcId": "vpc-0324c35cf9d083a40" 
} </pre>

    
    
Output:
<pre>{
  "routeTableId": "rtb-06d646d475a5b5d48",
  "createdRoute": {
    "icode": "AD.200",
    "response": { 
      "CreateRouteResponse": { 
        "_attr": { 
          "xmlns": "http://ec2.amazonaws.com/doc/2016-11-15/" 
        }, 
        "requestId": "4e157878-b2fb-4f95-8312-8c3cbbec8b18", 
        "return": "true" 
      } 
    }
  }  
} </pre>

    
  


## Support

Please use your Itential Customer Success account if you need support when using this Workflow Project.