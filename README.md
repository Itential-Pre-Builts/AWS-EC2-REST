# AWS - EC2 - REST

## Overview

This Pre-Built Automation bundle contains several example use cases that are applicable when Itential Automation Platform is integrated with the AWS EC2 REST API. Because every environment is different, these use cases are fully functioning examples that can be easily modified to operate in your specific environment. These workflows have been written with modularity in mind to make them easy to understand and simple to modify to suit your needs. Modular workflows in this project include:

**Add Ingress Rule to Security Group - AWS** A modular workflow that automates adding an ingress rule to a security group.

**Create and Attach Internet Gateway - AWS** A modular workflow that automates creating and attaching an internet gateway to a VPC in AWS.

**Create EC2 Instance - AWS** A modular workflow that automates creating an EC2 instance in AWS.

**Create Route - AWS** A modular workflow that automates creating a route within a VPC in AWS.

**Create Security Group with Ingress Rules - AWS** A modular workflow that automates creating a security group with ingress rules in AWS.

**Create VPC - AWS** A modular workflow that automates creating a VPC in AWS.

**Create VPC Subnet - AWS** A modular workflow that automates creating a subnet for a VPC in AWS.

**Provision VPC with Networking - AWS** A modular workflow that automates creating and configuring a VPC with networking in AWS.

**Delete Security Groups by VPC - AWS** A modular workflow that automates deleting VPC Security groups in AWS.

**Delete Subnets by VPC - AWS** A modular workflow that automates deleting subnets by VPC in AWS.

**Destroy VPC and EC2 Instance - AWS** A modular workflow that automates destroying a VPC and EC2 Instance in AWS

**Detach and Delete Internet Gateways by VPC - AWS** A modular workflow that automates detaching and deleting VPC internet gateways in AWS.


<a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/release/2023.1/documentation/Add Ingress Rule to Security Group - AWS.md' target='_blank'>Add Ingress Rule to Security Group - AWS</a>

<a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/release/2023.1/documentation/Create and Attach Internet Gateway - AWS.md' target='_blank'>Create and Attach Internet Gateway - AWS</a>

<a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/release/2023.1/documentation/Create EC2 Instance - AWS.md' target='_blank'>Create EC2 Instance - AWS</a>

<a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/release/2023.1/documentation/Create Route - AWS.md' target='_blank'>Create Route - AWS</a>

<a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/release/2023.1/documentation/Create Security Group with Ingress Rules - AWS.md' target='_blank'>Create Security Group with Ingress Rules - AWS</a>

<a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/release/2023.1/documentation/Create VPC - AWS.md' target='_blank'>Create VPC - AWS</a>

<a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/release/2023.1/documentation/Create VPC Subnet - AWS.md' target='_blank'>Create VPC Subnet - AWS</a>

<a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/release/2023.1/documentation/Provision VPC with Networking - AWS.md' target='_blank'>Provision VPC with Networking - AWS</a>

<a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/release/2023.1/documentation/Delete Security Groups by VPC - AWS.md' target='_blank'>Delete Security Groups by VPC - AWS</a>

<a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/release/2023.1/documentation/Delete Subnets by VPC - AWS.md' target='_blank'>Delete Subnets by VPC - AWS</a>

<a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/release/2023.1/documentation/Destroy VPC and EC2 Instance - AWS.md' target='_blank'>Destroy VPC and EC2 Instance - AWS</a>

<a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/release/2023.1/documentation/Detach and Delete Internet Gateways by VPC - AWS.md' target='_blank'>Detach and Delete Internet Gateways by VPC - AWS</a>



## External Dependencies

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

## Adapters

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