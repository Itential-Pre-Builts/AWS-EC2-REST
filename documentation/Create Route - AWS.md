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
    - [Related Documentation](#related-documentation)
    - [Example Inputs and Outputs](#example-inputs-and-outputs)
  - [Support](#support)

## Overview

A modular workflow that automates creating a route within a VPC in AWS.

Capabilities include:
- Create a route in a route table associated with a VPC in AWS
- If no route ID provided, default route table is used
- If more than one route table found associated with VPC and no route ID provied, manual task confirms using first route table to create route


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
      <td>ID of the route table in which to create route</td>
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
      <td>The ID of an internet gateway or virtual private gateway attached to your VPC (also referred to as thet target in the route table)</td>
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

      
##### Route Table ID

`routeTableId`

      
##### Create Route Result

`createdRoute.response.CreateRouteResponse.return`

      
    
    
  


### Related Documentation

<table>
  <thead>
    <tr>
      <th>Documentation Link</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateRoute.html">Create Route - AWS EC2</a></td>
      <td>API Documentation for creating a route in a route table within a VPC</td>
    </tr>    <tr>
      <td><a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Configure Route Tables - AWS EC2</a></td>
      <td>General documentation for configuring route tables in AWS EC2</td>
    </tr>    <tr>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeRouteTables.html">Describe Route Tables - AWS EC2</a></td>
      <td>API documentation for getting details of one or more route tables</td>
    </tr>
  </tbody>
</table>



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