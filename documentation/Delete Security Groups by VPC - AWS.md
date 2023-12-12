# Delete Security Groups by VPC - AWS

## Table of Contents

- [Delete Security Groups by VPC - AWS](#delete-security-groups-by-vpc---aws)
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

A modular workflow that automates deleting VPC Security groups in AWS.

Capabilities include:
- The workflow is used to delete VPC Security groups in AWS


## Getting Started

### Supported IAP Versions

Itential Workflow Projects are built and tested on particular versions of IAP. In addition, Workflow Projects are often dependent on external systems and as such, these Workflow Projects will have dependencies on these other systems. This version of **Delete Security Groups by VPC - AWS** has been tested with:


- IAP **2023.1**



### External Dependencies

This version of **Delete Security Groups by VPC - AWS** has been tested with:

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

This version of **Delete Security Groups by VPC - AWS** has been tested with:

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
      <td>Delete Security Groups by VPC - AWS</td>
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
      <td>vpcId</td>
      <td>string</td>
      <td>yes</td>
      <td>The ID of the VPC</td>
      <td><pre lang="json">vpc-0b678b7a21e66ded8</pre></td>
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
      <td>deletedSecurityGroup</td>
      <td>array</td>
      <td>Delete Security group request result</td>
      <td><pre lang="json">[
  {
    "icode": "AD.200",
    "response": {
      "DeleteSecurityGroupResponse": {
        "_attr": {
          "xmlns": "http://ec2.amazonaws.com/doc/2016-11-15/"
        },
        "requestId": "2cdea5d3-b27b-4a39-ab90-26bf31051769",
        "return": "true"
      }
    }
  }
]</pre></td>
    </tr>
  </tbody>
</table>

  
#### Query Output
    

The following items show how to query successful results from the output:

      
##### Delete Security Group Request Result

`deletedSecurityGroup`

      
    
    
  


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
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSecurityGroup.html">Delete Security Group - AWS EC2</a></td>
      <td>Documentation for deleting a security group in AWS EC2</td>
    </tr>    <tr>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSecurityGroups.html">Describe Security Groups - AWS EC2</a></td>
      <td>Documentation for getting specified security groups or all security groups</td>
    </tr>
  </tbody>
</table>



### Example Inputs and Outputs

  
#### Example 1

    
Input:
<pre>{
  "vpcId": "vpc-0b678b7a21e66ded8",
  "adapterId": "EC2" 
} </pre>

    
    
Output:
<pre>{
  "deletedSecurityGroup": [
    {
      "icode": "AD.200",
      "response": { 
        "DeleteSecurityGroupResponse": { 
          "_attr": { 
            "xmlns": "http://ec2.amazonaws.com/doc/2016-11-15/" 
          }, 
          "requestId": "2cdea5d3-b27b-4a39-ab90-26bf31051769", 
          "return": "true" 
        } 
      }
    }
  ]
} </pre>

    
  


## Support

Please use your Itential Customer Success account if you need support when using this Workflow Project.