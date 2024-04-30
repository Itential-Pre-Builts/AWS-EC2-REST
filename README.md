# AWS - EC2 - REST

## Overview

The integration of Itential and the AWS EC2 solution enables network teams to utilize its REST API to build automations that can include common tasks for provisioning and configuring resources for AWS EC2. This is a library of related automations that can be used as modular components in your own larger, end-to-end workflows.


## Workflows


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Overview</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/release/2023.2/documentation/Add Ingress Rule to Security Group - AWS.md' target='_blank'>Add Ingress Rule to Security Group - AWS</a></td>
      <td>A modular workflow that automates adding an ingress rule to a security group.</td>
    </tr>    <tr>
      <td><a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/release/2023.2/documentation/Create and Attach Internet Gateway - AWS.md' target='_blank'>Create and Attach Internet Gateway - AWS</a></td>
      <td>A modular workflow that automates creating and attaching an internet gateway to a VPC in AWS.</td>
    </tr>    <tr>
      <td><a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/release/2023.2/documentation/Create EC2 Instance - AWS.md' target='_blank'>Create EC2 Instance - AWS</a></td>
      <td>A modular workflow that automates creating an EC2 instance in AWS.</td>
    </tr>    <tr>
      <td><a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/release/2023.2/documentation/Create Route - AWS.md' target='_blank'>Create Route - AWS</a></td>
      <td>A modular workflow that automates creating a route within a VPC in AWS.</td>
    </tr>    <tr>
      <td><a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/release/2023.2/documentation/Create Security Group with Ingress Rules - AWS.md' target='_blank'>Create Security Group with Ingress Rules - AWS</a></td>
      <td>A modular workflow that automates creating a security group with ingress rules in AWS.</td>
    </tr>    <tr>
      <td><a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/release/2023.2/documentation/Create VPC - AWS.md' target='_blank'>Create VPC - AWS</a></td>
      <td>A modular workflow that automates creating a VPC in AWS.</td>
    </tr>    <tr>
      <td><a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/release/2023.2/documentation/Create VPC Subnet - AWS.md' target='_blank'>Create VPC Subnet - AWS</a></td>
      <td>A modular workflow that automates creating a subnet for a VPC in AWS.</td>
    </tr>    <tr>
      <td><a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/release/2023.2/documentation/Provision VPC with Networking - AWS.md' target='_blank'>Provision VPC with Networking - AWS</a></td>
      <td>A modular workflow that automates creating and configuring a VPC with networking in AWS.</td>
    </tr>    <tr>
      <td><a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/release/2023.2/documentation/Delete Security Groups by VPC - AWS.md' target='_blank'>Delete Security Groups by VPC - AWS</a></td>
      <td>A modular workflow that automates deleting VPC Security groups in AWS.</td>
    </tr>    <tr>
      <td><a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/release/2023.2/documentation/Delete Subnets by VPC - AWS.md' target='_blank'>Delete Subnets by VPC - AWS</a></td>
      <td>A modular workflow that automates deleting subnets by VPC in AWS.</td>
    </tr>    <tr>
      <td><a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/release/2023.2/documentation/Destroy VPC and EC2 Instance - AWS.md' target='_blank'>Destroy VPC and EC2 Instance - AWS</a></td>
      <td>A modular workflow that automates destroying a VPC and EC2 Instance in AWS</td>
    </tr>    <tr>
      <td><a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/release/2023.2/documentation/Detach and Delete Internet Gateways by VPC - AWS.md' target='_blank'>Detach and Delete Internet Gateways by VPC - AWS</a></td>
      <td>A modular workflow that automates detaching and deleting VPC internet gateways in AWS.</td>
    </tr>
  </tbody>
</table>


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