# AWS - EC2 - REST

## Overview

This Pre-Built Automation bundle contains use cases around performing actions on Amazon EC2 plus additional service Amazon VPC


<a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/master/documentation/Add Ingress Rule to Security Group - AWS - EC2 - REST.md' target='_blank'>Add Ingress Rule to Security Group - AWS - EC2 - REST</a>

<a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/master/documentation/Create and Attach Internet Gateway - AWS - EC2 - REST.md' target='_blank'>Create and Attach Internet Gateway - AWS</a>

<a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/master/documentation/Create EC2 Instance - AWS - EC2 - REST.md' target='_blank'>Create EC2 Instance - AWS</a>

<a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/master/documentation/Create Route - AWS - EC2 - REST.md' target='_blank'>Create Route - AWS</a>

<a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/master/documentation/Create Security Group with Ingress Rules - AWS - EC2 - REST.md' target='_blank'>Create Security Group with Ingress Rules - AWS</a>

<a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/master/documentation/Create VPC - AWS - EC2 - REST.md' target='_blank'>Create VPC - AWS</a>

<a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/master/documentation/Create VPC Subnet - AWS - EC2 - REST.md' target='_blank'>Create VPC Subnet - AWS</a>

<a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/master/documentation/Provision VPC with Networking - AWS - EC2 - REST.md' target='_blank'>Provision VPC with Networking - AWS</a>

<a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/master/documentation/Delete Security Groups by VPC - AWS - EC2 - REST.md' target='_blank'>Delete Security Groups by VPC - AWS</a>

<a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/master/documentation/Delete Subnets by VPC - AWS - EC2 - REST.md' target='_blank'>Delete Subnets by VPC - AWS</a>

<a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/master/documentation/Destroy VPC and EC2 Instance - AWS - EC2 - REST.md' target='_blank'>Destroy VPC and EC2 Instance - AWS</a>

<a href='https://gitlab.com/itentialopensource/pre-built-automations/aws-ec2-rest/-/blob/master/documentation/Detach and Delete Internet Gateways by VPC - AWS - EC2 - REST.md' target='_blank'>Detach and Delete Internet Gateways by VPC - AWS</a>



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