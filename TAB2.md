## Table of Contents 

  - [Getting Started](#getting-started)
    - [Helpful Background Information](#helpful-background-information)
    - [Prerequisites](#prerequisites)
    - [External Dependencies](#external-dependencies)
    - [Adapters](#adapters)
    - [How to Install](#how-to-install)
    - [Testing](#testing)
  - [Using this Workflow Project](#using-this-workflow-project)
    - [Add Ingress Rule to Security Group - AWS](#add-ingress-rule-to-security-group-aws)
    - [Create EC2 Instance - AWS](#create-ec2-instance-aws)
    - [Create Route - AWS](#create-route-aws)
    - [Create Security Group with Ingress Rules - AWS](#create-security-group-with-ingress-rules-aws)
    - [Create VPC - AWS](#create-vpc-aws)
    - [Create VPC Subnet - AWS](#create-vpc-subnet-aws)
    - [Create and Attach Internet Gateway - AWS](#create-and-attach-internet-gateway-aws)
    - [Delete Security Groups by VPC - AWS](#delete-security-groups-by-vpc-aws)
    - [Delete Subnets by VPC - AWS](#delete-subnets-by-vpc-aws)
    - [Destroy VPC and EC2 Instance - AWS](#destroy-vpc-and-ec2-instance-aws)
    - [Detach and Delete Internet Gateways by VPC - AWS](#detach-and-delete-internet-gateways-by-vpc-aws)
    - [Provision VPC with Networking - AWS](#provision-vpc-with-networking-aws)
  - [Additional Information](#additional-information)
    - [Support](#support)

## Getting Started

This section is helpful for deployments as it provides you with pertinent information on prerequisites and properties.

### Helpful Background Information

Workflows often include logic that varies from business to business. As a result, we often find that our Workflow Projects are more useful as modular components that can be incorporated into a larger process. In addition, they often can add value as a learning tool on how we integrate with other systems and how we do things within the Itential Automation Platform.

While these can be utilized, you may find more value in using them as a starting point to build around.


### Prerequisites

Itential Workflow Projects are built and tested on particular versions of IAP. In addition, Workflow Projects are often dependent on external systems and as such, these Workflow Projects will have dependencies on these other systems. This version of **AWS - EC2 - REST** has been tested with:

- IAP **2023.1**

### External Dependencies

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

- Verify you are running a supported version of the Itential Automation Platform (IAP) as listed above in the [Supported IAP Versions](#supported-iap-versions) section in order to install the Example Project.
- Import the Example Project in [Admin Essentials](https://docs.itential.com/docs/importing-a-prebuilt-4).

###  Testing

Cypress is generally used to test all Itential Example Projects. While Cypress is an opensource tool, at Itential we have internal libraries that have been built around Cypress to allow us to test with a deployed IAP.

When certifying our Example Projects for a release of IAP we run these tests against the particular version of IAP and create a release branch in GitLab. If you do not see the Example Project available in your version of IAP please contact Itential.

While Itential tests this Example Project and its capabilities, it is often the case the customer environments offer their own unique circumstances. Therefore, it is our recommendation that you deploy this Example Project into a development/testing environment in which you can test the Example Project.

## Using this Workflow Project
Workflow Projects contain 1 or more workflows. Each of these workflows have different inputs and outputs. 

### Add Ingress Rule to Security Group - AWS
A modular workflow that automates adding an ingress rule to a security group.

Capabilities include:
- The workflow is used to add Ingress Rule to Security group in AWS







#### Entry Point IAP Component

The primary IAP component to run **Add Ingress Rule to Security Group - AWS** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Add Ingress Rule to Security Group - AWS</td>
      <td>Workflow</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Add Ingress Rule to Security Group - AWS**:

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
      <td>sourceCidrIp</td>
      <td>string</td>
      <td>yes</td>
      <td>The IPv4 address range, in CIDR format</td>
      <td><pre lang="json">19.27.253.13/32</pre></td>
    </tr>    <tr>
      <td>fromPort</td>
      <td>number</td>
      <td>yes</td>
      <td>The start of port range for the TCP and UDP protocols, or an ICMP type number</td>
      <td><pre lang="json">80</pre></td>
    </tr>    <tr>
      <td>toPort</td>
      <td>number</td>
      <td>yes</td>
      <td>The end of port range for the TCP and UDP protocols, or an ICMP code number</td>
      <td><pre lang="json">80</pre></td>
    </tr>    <tr>
      <td>groupId</td>
      <td>string</td>
      <td>yes</td>
      <td>The ID of the security group</td>
      <td><pre lang="json">sg-08f249db62d26d8a6</pre></td>
    </tr>    <tr>
      <td>ipProtocol</td>
      <td>string</td>
      <td>yes</td>
      <td>The IP protocol name ( tcp , udp , icmp ) or number</td>
      <td><pre lang="json">TCP</pre></td>
    </tr>    <tr>
      <td>adapterId</td>
      <td>string</td>
      <td>yes</td>
      <td>AWS EC2 adapter to use</td>
      <td><pre lang="json">EC2</pre></td>
    </tr>
  </tbody>
</table>



#### Outputs

The following table lists the outputs for **Add Ingress Rule to Security Group - AWS**:

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
      <td>updatedSecurityGroup</td>
      <td>object</td>
      <td>The result of Create rule request</td>
      <td><pre lang="json">{
  "icode": "AD.200",
  "response": {
    "AuthorizeSecurityGroupIngressResponse": {
      "_attr": {
        "xmlns": "http://ec2.amazonaws.com/doc/2016-11-15/"
      },
      "requestId": "2cf4e379-aac3-4fbe-b75d-543127204d91",
      "return": "true",
      "securityGroupRuleSet": {
        "item": [
          {
            "groupOwnerId": "314014972859",
            "groupId": "sg-08f249db62d26d8a6",
            "securityGroupRuleId": "sgr-08f9a989136861e6c",
            "isEgress": "false",
            "ipProtocol": "tcp",
            "fromPort": "80",
            "toPort": "80",
            "cidrIpv4": "19.27.253.13/32"
          }
        ]
      }
    }
  }
}</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output


  

The following items show how to query successful results from the output of **Add Ingress Rule to Security Group - AWS**:

    
##### Security Group Rule ID

`updatedSecurityGroup.response.AuthorizeSecurityGroupIngressResponse.securityGroupRuleSet.item[0].securityGroupRuleId`

    
  
  




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "sourceCidrIp": "19.27.253.13/32", 
  "fromPort": 80, 
  "groupId": "sg-08f249db62d26d8a6", 
  "ipProtocol": "TCP", 
  "toPort": 80, 
  "adapterId": "EC2" 
} </pre>

    
    
Output:
<pre>{
  "updatedSecurityGroup": {
    "icode": "AD.200",
    "response": {
      "AuthorizeSecurityGroupIngressResponse": {
        "_attr": { 
          "xmlns": "http://ec2.amazonaws.com/doc/2016-11-15/" 
        },
        "requestId": "2cf4e379-aac3-4fbe-b75d-543127204d91",
        "return": "true",
        "securityGroupRuleSet": {
          "item": [
            {
              "groupOwnerId": "314014972859",
              "groupId": "sg-08f249db62d26d8a6",
              "securityGroupRuleId": "sgr-08f9a989136861e6c",
              "isEgress": "false",
              "ipProtocol": "tcp",
              "fromPort": "80",
              "toPort": "80",
              "cidrIpv4": "19.27.253.13/32"
            }
          ]
        }
      }
    }
  }
} </pre>

    
  


#### API Links


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
      <td>Authorize Security Group Ingress - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AuthorizeSecurityGroupIngress.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AuthorizeSecurityGroupIngress.html</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>


### Create EC2 Instance - AWS
A modular workflow that automates creating an EC2 instance in AWS.

Capabilities include:
- Launch an EC2 instance in AWS
- Check status of launched EC2 instance until it is ready for use in AWS
- Creates tag for launched EC2 instance







#### Entry Point IAP Component

The primary IAP component to run **Create EC2 Instance - AWS** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Create EC2 Instance - AWS</td>
      <td>Workflow</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Create EC2 Instance - AWS**:

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
      <td>imageId</td>
      <td>string</td>
      <td>yes</td>
      <td>The ID of the Amazon Machine Image (AMI)</td>
      <td><pre lang="json">ami-041feb57c611358bd</pre></td>
    </tr>    <tr>
      <td>instanceType</td>
      <td>string</td>
      <td>no</td>
      <td>The instance type</td>
      <td><pre lang="json">t2.micro</pre></td>
    </tr>    <tr>
      <td>securityGroupId</td>
      <td>array</td>
      <td>no</td>
      <td>The IDs of the security groups</td>
      <td><pre lang="json">[
  "sg-0df320af9c57973a4"
]</pre></td>
    </tr>    <tr>
      <td>networkInterface</td>
      <td>array</td>
      <td>no</td>
      <td>The network interfaces to associate with the instance</td>
      <td><pre lang="json">[
  {
    "SubnetId": "subnet-0d01076d82853eac1",
    "DeviceIndex": 0,
    "AssociatePublicIpAddress": true,
    "SecurityGroupId": [
      "sg-0f70c6ety78ee4450"
    ]
  }
]</pre></td>
    </tr>    <tr>
      <td>vpcName</td>
      <td>string</td>
      <td>no</td>
      <td>Name of the VPC</td>
      <td><pre lang="json">MY VPC</pre></td>
    </tr>    <tr>
      <td>adapterId</td>
      <td>string</td>
      <td>yes</td>
      <td>AWS EC2 adapter to use</td>
      <td><pre lang="json">EC2</pre></td>
    </tr>
  </tbody>
</table>



#### Outputs

The following table lists the outputs for **Create EC2 Instance - AWS**:

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
      <td>publicIp</td>
      <td>string</td>
      <td>Public IP of the created EC2 instance</td>
      <td><pre lang="json">54.204.78.24</pre></td>
    </tr>    <tr>
      <td>instanceInfo</td>
      <td>object</td>
      <td>Created Instance Info</td>
      <td><pre lang="json">{
  "icode": "AD.200",
  "response": {
    "DescribeInstancesResponse": {
      "_attr": {
        "xmlns": "http://ec2.amazonaws.com/doc/2016-11-15/"
      },
      "requestId": "59729eb9-c110-4b1c-bd2e-1a08dae45664",
      "reservationSet": {
        "item": [
          {
            "reservationId": "r-00bf9973a17756cb9",
            "ownerId": "314014972859",
            "groupSet": "",
            "instancesSet": {
              "item": [
                {
                  "instanceId": "i-028ff00bc5698aad0",
                  "imageId": "ami-041feb57c611358bd",
                  "instanceState": {
                    "code": "16",
                    "name": "running"
                  },
                  "privateDnsName": "ip-172-31-18-198.ec2.internal",
                  "dnsName": "ec2-18-215-164-122.compute-1.amazonaws.com",
                  "reason": "",
                  "amiLaunchIndex": "0",
                  "productCodes": "",
                  "instanceType": "t2.micro",
                  "launchTime": "2023-10-23T00:43:27.000Z",
                  "placement": {
                    "availabilityZone": "us-east-1d",
                    "groupName": "",
                    "tenancy": "default"
                  },
                  "monitoring": {
                    "state": "disabled"
                  },
                  "subnetId": "subnet-0fd6d26fc17380403",
                  "vpcId": "vpc-0324c35cf9d083a40",
                  "privateIpAddress": "172.31.18.198",
                  "ipAddress": "18.215.164.122",
                  "sourceDestCheck": "true",
                  "groupSet": {
                    "item": [
                      {
                        "groupId": "sg-0df320af9c57973a4",
                        "groupName": "default"
                      }
                    ]
                  },
                  "architecture": "x86_64",
                  "rootDeviceType": "ebs",
                  "rootDeviceName": "/dev/xvda",
                  "blockDeviceMapping": {
                    "item": [
                      {
                        "deviceName": "/dev/xvda",
                        "ebs": {
                          "volumeId": "vol-06f72a3639723aa36",
                          "status": "attached",
                          "attachTime": "2023-10-23T00:43:27.000Z",
                          "deleteOnTermination": "true"
                        }
                      }
                    ]
                  },
                  "virtualizationType": "hvm",
                  "clientToken": "",
                  "tagSet": {
                    "item": [
                      {
                        "key": "Name",
                        "value": "Apache Web Server for "
                      }
                    ]
                  },
                  "hypervisor": "xen",
                  "networkInterfaceSet": {
                    "item": [
                      {
                        "networkInterfaceId": "eni-08728a92558ff3548",
                        "subnetId": "subnet-0fd6d26fc17380403",
                        "vpcId": "vpc-0324c35cf9d083a40",
                        "description": "",
                        "ownerId": "314014972859",
                        "status": "in-use",
                        "macAddress": "0a:bd:5f:41:37:ff",
                        "privateIpAddress": "172.31.18.198",
                        "privateDnsName": "ip-172-31-18-198.ec2.internal",
                        "sourceDestCheck": "true",
                        "groupSet": {
                          "item": [
                            {
                              "groupId": "sg-0df320af9c57973a4",
                              "groupName": "default"
                            }
                          ]
                        },
                        "attachment": {
                          "attachmentId": "eni-attach-007008b2faaf46562",
                          "deviceIndex": "0",
                          "status": "attached",
                          "attachTime": "2023-10-23T00:43:27.000Z",
                          "deleteOnTermination": "true",
                          "networkCardIndex": "0"
                        },
                        "association": {
                          "publicIp": "54.204.78.24",
                          "publicDnsName": "ec2-18-215-164-122.compute-1.amazonaws.com",
                          "ipOwnerId": "amazon"
                        },
                        "privateIpAddressesSet": {
                          "item": [
                            {
                              "privateIpAddress": "172.31.18.198",
                              "privateDnsName": "ip-172-31-18-198.ec2.internal",
                              "primary": "true",
                              "association": {
                                "publicIp": "18.215.164.122",
                                "publicDnsName": "ec2-18-215-164-122.compute-1.amazonaws.com",
                                "ipOwnerId": "amazon"
                              }
                            }
                          ]
                        },
                        "ipv6AddressesSet": "",
                        "interfaceType": "interface"
                      }
                    ]
                  },
                  "ebsOptimized": "false",
                  "enaSupport": "true",
                  "cpuOptions": {
                    "coreCount": "1",
                    "threadsPerCore": "1"
                  },
                  "capacityReservationSpecification": {
                    "capacityReservationPreference": "open"
                  },
                  "hibernationOptions": {
                    "configured": "false"
                  },
                  "enclaveOptions": {
                    "enabled": "false"
                  },
                  "metadataOptions": {
                    "state": "applied",
                    "httpTokens": "required",
                    "httpPutResponseHopLimit": "2",
                    "httpEndpoint": "enabled",
                    "httpProtocolIpv4": "enabled",
                    "httpProtocolIpv6": "disabled",
                    "instanceMetadataTags": "disabled"
                  },
                  "maintenanceOptions": {
                    "autoRecovery": "default"
                  },
                  "bootMode": "uefi-preferred",
                  "currentInstanceBootMode": "legacy-bios",
                  "platformDetails": "Linux/UNIX",
                  "usageOperation": "RunInstances",
                  "usageOperationUpdateTime": "2023-10-23T00:43:26.000Z",
                  "privateDnsNameOptions": {
                    "hostnameType": "ip-name",
                    "enableResourceNameDnsARecord": "false",
                    "enableResourceNameDnsAAAARecord": "false"
                  }
                }
              ]
            }
          }
        ]
      }
    }
  }
}</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output


  

The following items show how to query successful results from the output of **Create EC2 Instance - AWS**:

    
##### Public IP of the Created EC2 Instance

`publicIp`

    
##### Created EC2 Instance ID

`instanceInfo.response.DescribeInstancesResponse.reservationSet.item[0].instancesSet.item[0].instanceId`

    
##### Created EC2 Instance State

`instanceInfo.response.DescribeInstancesResponse.reservationSet.item[0].instancesSet.item[0].instanceState.name`

    
  
  




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "imageId": "ami-041feb57c611358bd", 
  "instanceType": "t2.micro", 
  "securityGroupId": [
    "sg-0df320af9c57973a4"
  ], 
  "networkInterface": [],
  "adapterId": "EC2", 
  "vpcName": "" 
} </pre>

    
    
Output:
<pre>{
  "instanceInfo": {
    "icode": "AD.200",
    "response": {
      "DescribeInstancesResponse": {
        "_attr": {
          "xmlns": "http://ec2.amazonaws.com/doc/2016-11-15/"
        },
        "requestId": "59729eb9-c110-4b1c-bd2e-1a08dae45664",
        "reservationSet": {
          "item": [
            {
              "reservationId": "r-00bf9973a17756cb9",
              "ownerId": "314014972859",
              "groupSet": "",
              "instancesSet": {
                "item": [
                  {
                    "instanceId": "i-028ff00bc5698aad0",
                    "imageId": "ami-041feb57c611358bd",
                    "instanceState": {
                      "code": "16",
                      "name": "running"
                    },
                    "privateDnsName": "ip-172-31-18-198.ec2.internal",
                    "dnsName": "ec2-18-215-164-122.compute-1.amazonaws.com",
                    "reason": "",
                    "amiLaunchIndex": "0",
                    "productCodes": "",
                    "instanceType": "t2.micro",
                    "launchTime": "2023-10-23T00:43:27.000Z",
                    "placement": {
                      "availabilityZone": "us-east-1d",
                      "groupName": "",
                      "tenancy": "default"
                    },
                    "monitoring": {
                      "state": "disabled"
                    },
                    "subnetId": "subnet-0fd6d26fc17380403",
                    "vpcId": "vpc-0324c35cf9d083a40",
                    "privateIpAddress": "172.31.18.198",
                    "ipAddress": "18.215.164.122",
                    "sourceDestCheck": "true",
                    "groupSet": {
                      "item": [
                        {
                          "groupId": "sg-0df320af9c57973a4",
                          "groupName": "default"
                        }
                      ]
                    },
                    "architecture": "x86_64",
                    "rootDeviceType": "ebs",
                    "rootDeviceName": "/dev/xvda",
                    "blockDeviceMapping": {
                      "item": [
                        {
                          "deviceName": "/dev/xvda",
                          "ebs": {
                            "volumeId": "vol-06f72a3639723aa36",
                            "status": "attached",
                            "attachTime": "2023-10-23T00:43:27.000Z",
                            "deleteOnTermination": "true"
                          }
                        }
                      ]
                    },
                    "virtualizationType": "hvm",
                    "clientToken": "",
                    "tagSet": {
                      "item": [
                        {
                          "key": "Name",
                          "value": "Apache Web Server for "
                        }
                      ]
                    },
                    "hypervisor": "xen",
                    "networkInterfaceSet": {
                      "item": [
                        {
                          "networkInterfaceId": "eni-08728a92558ff3548",
                          "subnetId": "subnet-0fd6d26fc17380403",
                          "vpcId": "vpc-0324c35cf9d083a40",
                          "description": "",
                          "ownerId": "314014972859",
                          "status": "in-use",
                          "macAddress": "0a:bd:5f:41:37:ff",
                          "privateIpAddress": "172.31.18.198",
                          "privateDnsName": "ip-172-31-18-198.ec2.internal",
                          "sourceDestCheck": "true",
                          "groupSet": {
                            "item": [
                              {
                                "groupId": "sg-0df320af9c57973a4",
                                "groupName": "default"
                              }
                            ]
                          },
                          "attachment": {
                            "attachmentId": "eni-attach-007008b2faaf46562",
                            "deviceIndex": "0",
                            "status": "attached",
                            "attachTime": "2023-10-23T00:43:27.000Z",
                            "deleteOnTermination": "true",
                            "networkCardIndex": "0"
                          },
                          "association": {
                            "publicIp": "54.204.78.24",
                            "publicDnsName": "ec2-18-215-164-122.compute-1.amazonaws.com",
                            "ipOwnerId": "amazon"
                          },
                          "privateIpAddressesSet": {
                            "item": [
                              {
                                "privateIpAddress": "172.31.18.198",
                                "privateDnsName": "ip-172-31-18-198.ec2.internal",
                                "primary": "true",
                                "association": {
                                  "publicIp": "18.215.164.122",
                                  "publicDnsName": "ec2-18-215-164-122.compute-1.amazonaws.com",
                                  "ipOwnerId": "amazon"
                                }
                              }
                            ]
                          },
                          "ipv6AddressesSet": "",
                          "interfaceType": "interface"
                        }
                      ]
                    },
                    "ebsOptimized": "false",
                    "enaSupport": "true",
                    "cpuOptions": {
                      "coreCount": "1",
                      "threadsPerCore": "1"
                    },
                    "capacityReservationSpecification": {
                      "capacityReservationPreference": "open"
                    },
                    "hibernationOptions": {
                      "configured": "false"
                    },
                    "enclaveOptions": {
                      "enabled": "false"
                    },
                    "metadataOptions": {
                      "state": "applied",
                      "httpTokens": "required",
                      "httpPutResponseHopLimit": "2",
                      "httpEndpoint": "enabled",
                      "httpProtocolIpv4": "enabled",
                      "httpProtocolIpv6": "disabled",
                      "instanceMetadataTags": "disabled"
                    },
                    "maintenanceOptions": {
                      "autoRecovery": "default"
                    },
                    "bootMode": "uefi-preferred",
                    "currentInstanceBootMode": "legacy-bios",
                    "platformDetails": "Linux/UNIX",
                    "usageOperation": "RunInstances",
                    "usageOperationUpdateTime": "2023-10-23T00:43:26.000Z",
                    "privateDnsNameOptions": {
                      "hostnameType": "ip-name",
                      "enableResourceNameDnsARecord": "false",
                      "enableResourceNameDnsAAAARecord": "false"
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    }
  },
  "publicIp": "54.204.78.24"
} </pre>

    
  


#### API Links


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
      <td>Run Instances - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Describe Instance Status - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceStatus.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceStatus.html</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Create Tags - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>


### Create Route - AWS
A modular workflow that automates creating a route within a VPC in AWS.

Capabilities include:
- Create a route in a route table associated with a VPC in AWS
- If no route ID provided, default route table is used
- If more than one route table found associated with VPC and no route ID provied, manual task confirms using first route table to create route







#### Entry Point IAP Component

The primary IAP component to run **Create Route - AWS** is listed below:

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

#### Inputs

The following table lists the inputs for **Create Route - AWS**:

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



#### Outputs

The following table lists the outputs for **Create Route - AWS**:

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


  

The following items show how to query successful results from the output of **Create Route - AWS**:

    
##### Route Table ID

`routeTableId`

    
##### Create Route Result

`createdRoute.response.CreateRouteResponse.return`

    
  
  




#### Example Inputs and Outputs

  
##### Example 1

    
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

    
  


#### API Links


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
    </tr>
  </tbody>
</table>


### Create Security Group with Ingress Rules - AWS
A modular workflow that automates creating a security group with ingress rules in AWS.

Capabilities include:
- Create a security group in AWS EC2
- Add ingress rule to created security group







#### Entry Point IAP Component

The primary IAP component to run **Create Security Group with Ingress Rules - AWS** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Create Security Group with Ingress Rules - AWS</td>
      <td>Workflow</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Create Security Group with Ingress Rules - AWS**:

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
      <td>securityGroupDescription</td>
      <td>string</td>
      <td>yes</td>
      <td>A description for the security group</td>
      <td><pre lang="json">Web Servers</pre></td>
    </tr>    <tr>
      <td>securityGroupName</td>
      <td>string</td>
      <td>yes</td>
      <td>The name of the security group</td>
      <td><pre lang="json">WebServerSG</pre></td>
    </tr>    <tr>
      <td>vpcId</td>
      <td>string</td>
      <td>yes</td>
      <td>ID of the VPC</td>
      <td><pre lang="json">vpc-0324c35cf9d083a40</pre></td>
    </tr>    <tr>
      <td>ruleList</td>
      <td>array</td>
      <td>yes</td>
      <td>List of Ingress rules</td>
      <td><pre lang="json">[
  {
    "protocol": "TCP",
    "port": 80,
    "sourceIp": "199.27.253.134",
    "sourceSubnetCidrMask": 32
  },
  {
    "protocol": "TCP",
    "port": 80,
    "sourceIp": "19.27.253.134",
    "sourceSubnetCidrMask": 32
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



#### Outputs

The following table lists the outputs for **Create Security Group with Ingress Rules - AWS**:

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
      <td>securityGroupId</td>
      <td>string</td>
      <td>ID of the created Security group</td>
      <td><pre lang="json">sg-0bd40e2d7195add77</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output


  

The following items show how to query successful results from the output of **Create Security Group with Ingress Rules - AWS**:

    
##### Security Group ID

`securityGroupId`

    
  
  




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "securityGroupDescription": "TestING",
  "securityGroupName": "FOR TESTING",
  "vpcId": "vpc-004c7963c31a8d156",
  "adapterId": "EC2",
  "ruleList": [
    { 
      "protocol": "TCP", 
      "port": 80, 
      "sourceIp": "199.27.253.134", 
      "sourceSubnetCidrMask": 32 
    },
    { 
      "protocol": "TCP", 
      "port": 80, 
      "sourceIp": "19.27.253.134", 
      "sourceSubnetCidrMask": 32 
    }
  ]
} </pre>

    
    
Output:
<pre>{
  "securityGroupId": "sg-0bd40e2d7195add77"
} </pre>

    
  


#### API Links


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


### Create VPC - AWS
A modular workflow that automates creating a VPC in AWS.

Capabilities include:
- The workflow is used to create a VPC in AWS







#### Entry Point IAP Component

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

#### Inputs

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



#### Outputs

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



#### Query Output


  

The following items show how to query successful results from the output of **Create VPC - AWS**:

    
##### Created VPC ID

`createdVpc.response.CreateVpcResponse.vpc.vpcId`

    
##### Created VPC State

`createdVpc.response.CreateVpcResponse.vpc.state`

    
  
  




#### Example Inputs and Outputs

  
##### Example 1

    
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

    
  


#### API Links


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


### Create VPC Subnet - AWS
A modular workflow that automates creating a subnet for a VPC in AWS.

Capabilities include:
- The workflow is used to create subnet for a VPC in AWS







#### Entry Point IAP Component

The primary IAP component to run **Create VPC Subnet - AWS** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Create VPC Subnet - AWS</td>
      <td>Workflow</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Create VPC Subnet - AWS**:

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



#### Outputs

The following table lists the outputs for **Create VPC Subnet - AWS**:

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
      <td>subnetId</td>
      <td>string</td>
      <td>ID of the created subnet</td>
      <td><pre lang="json">subnet-04545f4e6b8bc63ea</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output


  

The following items show how to query successful results from the output of **Create VPC Subnet - AWS**:

    
##### Created VPC Subnet ID

`subnetId`

    
  
  




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "cidrBlock": "100.68.0.1/18", 
  "vpcId": "vpc-0ece2ed1b3725e018", 
  "adapterId": "EC2" 
} </pre>

    
    
Output:
<pre>{
  "subnetId": "subnet-04545f4e6b8bc63ea" 
} </pre>

    
  


#### API Links


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
      <td>Create Subnet - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSubnet.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSubnet.html</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>


### Create and Attach Internet Gateway - AWS
A modular workflow that automates creating and attaching an internet gateway to a VPC in AWS.

Capabilities include:
- The workflow is used to create and attach Internet gateway to VPC in AWS







#### Entry Point IAP Component

The primary IAP component to run **Create and Attach Internet Gateway - AWS** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Create and Attach Internet Gateway - AWS</td>
      <td>Workflow</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Create and Attach Internet Gateway - AWS**:

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
      <td><pre lang="json">vpc-0c78b30c98d04b8ce</pre></td>
    </tr>    <tr>
      <td>adapterId</td>
      <td>string</td>
      <td>yes</td>
      <td>AWS EC2 adapter to use</td>
      <td><pre lang="json">EC2</pre></td>
    </tr>
  </tbody>
</table>



#### Outputs

The following table lists the outputs for **Create and Attach Internet Gateway - AWS**:

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
      <td>internetGatewayId</td>
      <td>string</td>
      <td>The ID of the created Internet gateway</td>
      <td><pre lang="json">igw-01462c9d3d191a0b3</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output


  

The following items show how to query successful results from the output of **Create and Attach Internet Gateway - AWS**:

    
##### Created Internet Gateway ID

`internetGatewayId`

    
  
  




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "adapterId": "EC2", 
  "vpcId": "vpc-0c78b30c98d04b8ce" 
} </pre>

    
    
Output:
<pre>{
  "internetGatewayId": "igw-01462c9d3d191a0b3" 
} </pre>

    
  


#### API Links


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
      <td>Create Internet Gateway - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateInternetGateway.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateInternetGateway.html</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Attach Internet Gateway - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachInternetGateway.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachInternetGateway.html</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>


### Delete Security Groups by VPC - AWS
A modular workflow that automates deleting VPC Security groups in AWS.

Capabilities include:
- The workflow is used to delete VPC Security groups in AWS







#### Entry Point IAP Component

The primary IAP component to run **Delete Security Groups by VPC - AWS** is listed below:

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

#### Inputs

The following table lists the inputs for **Delete Security Groups by VPC - AWS**:

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



#### Outputs

The following table lists the outputs for **Delete Security Groups by VPC - AWS**:

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


  

The following items show how to query successful results from the output of **Delete Security Groups by VPC - AWS**:

    
##### Delete Security Group Request Result

`deletedSecurityGroup`

    
  
  




#### Example Inputs and Outputs

  
##### Example 1

    
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

    
  


#### API Links


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
      <td>Delete Security Group - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSecurityGroup.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSecurityGroup.html</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Describe Security Groups - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSecurityGroups.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSecurityGroups.html</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>


### Delete Subnets by VPC - AWS
A modular workflow that automates deleting subnets by VPC in AWS.

Capabilities include:
- The workflow is used to delete VPC Subnets from AWS







#### Entry Point IAP Component

The primary IAP component to run **Delete Subnets by VPC - AWS** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Delete Subnets by VPC - AWS</td>
      <td>Workflow</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Delete Subnets by VPC - AWS**:

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



#### Outputs

The following table lists the outputs for **Delete Subnets by VPC - AWS**:

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
      <td>deletedSubnet</td>
      <td>array</td>
      <td>Delete Subnet request result</td>
      <td><pre lang="json">[
  {
    "icode": "AD.200",
    "response": {
      "DeleteSubnetResponse": {
        "_attr": {
          "xmlns": "http://ec2.amazonaws.com/doc/2016-11-15/"
        },
        "requestId": "31ea90a8-8dbb-4cde-912a-df8d1f1021ec",
        "return": "true"
      }
    }
  }
]</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output


  

The following items show how to query successful results from the output of **Delete Subnets by VPC - AWS**:

    
##### Delete Subnet Request Result

`deletedSubnet`

    
  
  




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "vpcId": "vpc-0b678b7a21e66ded8",
  "adapterId": "EC2" 
} </pre>

    
    
Output:
<pre>{
  "deletedSubnet": [
    {
      "icode": "AD.200",
      "response": { 
        "DeleteSubnetResponse": { 
          "_attr": { 
            "xmlns": "http://ec2.amazonaws.com/doc/2016-11-15/" 
          }, 
          "requestId": "31ea90a8-8dbb-4cde-912a-df8d1f1021ec", 
          "return": "true" 
        } 
      }
    }
  ]
} </pre>

    
  


#### API Links


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
      <td>Delete Subnet - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSubnet.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSubnet.html</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Describe Subnets - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSubnets.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSubnets.html</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>


### Destroy VPC and EC2 Instance - AWS
A modular workflow that automates destroying a VPC and EC2 Instance in AWS

Capabilities include:
- The workflow is used to destroy VPC And EC2 Instance in AWS







#### Entry Point IAP Component

The primary IAP component to run **Destroy VPC And EC2 Instance - AWS** is listed below:

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

#### Inputs

The following table lists the inputs for **Destroy VPC And EC2 Instance - AWS**:

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



#### Outputs

The following table lists the outputs for **Destroy VPC And EC2 Instance - AWS**:

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


  

The following items show how to query successful results from the output of **Destroy VPC And EC2 Instance - AWS**:

    
##### Delete VPC Result

`deletedVPC.responseDeleteVpcResponse.return`

    
  
  




#### Example Inputs and Outputs

  
##### Example 1

    
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

    
  


#### API Links


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
      <td>Describe VPCs - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcs.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcs.html</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Describe Instances - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Describe Internet Gateways - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInternetGateways.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInternetGateways.html</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Detach Internet Gateway - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachInternetGateway.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachInternetGateway.html</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Delete Internet Gateway - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteInternetGateway.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteInternetGateway.html</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Delete Security Group - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSecurityGroup.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSecurityGroup.html</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Delete Subnet - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSubnet.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSubnet.html</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Delete VPC - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpc.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpc.html</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Terminate Instances - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>


### Detach and Delete Internet Gateways by VPC - AWS
A modular workflow that automates detaching and deleting VPC internet gateways in AWS.

Capabilities include:
- The workflow is used to detach and delete VPC Internet gateways in AWS







#### Entry Point IAP Component

The primary IAP component to run **Detach and Delete Internet Gateways by VPC - AWS** is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Detach and Delete Internet Gateways by VPC - AWS</td>
      <td>Workflow</td>
    </tr>
  </tbody>
</table>

#### Inputs

The following table lists the inputs for **Detach and Delete Internet Gateways by VPC - AWS**:

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
      <td><pre lang="json">vpc-0ba78c5ca9aaecd64</pre></td>
    </tr>    <tr>
      <td>adapterId</td>
      <td>string</td>
      <td>yes</td>
      <td>AWS EC2 adapter to use</td>
      <td><pre lang="json">EC2</pre></td>
    </tr>
  </tbody>
</table>



#### Outputs

The following table lists the outputs for **Detach and Delete Internet Gateways by VPC - AWS**:

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
      <td>deletedInternetGateway</td>
      <td>object</td>
      <td>Delete Internet Gateway request result</td>
      <td><pre lang="json">{
  "icode": "AD.200",
  "response": {
    "DeleteInternetGatewayResponse": {
      "_attr": {
        "xmlns": "http://ec2.amazonaws.com/doc/2016-11-15/"
      },
      "requestId": "f743ec7e-1039-4261-8f74-4f8ba72a6c35",
      "return": "true"
    }
  }
}</pre></td>
    </tr>
  </tbody>
</table>



#### Query Output


  

The following items show how to query successful results from the output of **Detach and Delete Internet Gateways by VPC - AWS**:

    
##### Delete Internet Gateway Result

`deletedInternetGateway.response.DeleteInternetGatewayResponse.return`

    
  
  




#### Example Inputs and Outputs

  
##### Example 1

    
Input:
<pre>{
  "adapterId": "EC2", 
  "vpcId": "vpc-0ba78c5ca9aaecd64" 
} </pre>

    
    
Output:
<pre>{
  "deletedInternetGateway": {
    "icode": "AD.200",
    "response": {
      "DeleteInternetGatewayResponse": {
        "_attr": {
          "xmlns": "http://ec2.amazonaws.com/doc/2016-11-15/"
        },
        "requestId": "f743ec7e-1039-4261-8f74-4f8ba72a6c35",
        "return": "true"
      }
    }
  }
} </pre>

    
  


#### API Links


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
      <td>Describe Internet Gateways - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInternetGateways.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInternetGateways.html</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Detach Internet Gateway - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachInternetGateway.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachInternetGateway.html</a></td>
      <td>Public</td>
    </tr>    <tr>
      <td>Delete Internet Gateway - AWS EC2</td>
      <td><a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteInternetGateway.html">https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteInternetGateway.html</a></td>
      <td>Public</td>
    </tr>
  </tbody>
</table>


### Provision VPC with Networking - AWS
A modular workflow that automates creating and configuring a VPC with networking in AWS.

Capabilities include:
- The workflow is used to create and configure VPC in AWS







#### Entry Point IAP Component

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

#### Inputs

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



#### Outputs

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



#### Query Output


  

The following items show how to query successful results from the output of **Provision VPC with Networking - AWS**:

    
##### Created VPC ID

`vpcId`

    
##### Created Subnet ID

`subnetId`

    
##### Created Internet Gateway ID

`internetGatewayId`

    
##### Created Security Group ID

`securityGroupId`

    
  
  




#### Example Inputs and Outputs

  
##### Example 1

    
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

    
  


#### API Links


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


## Additional Information

### Support
Please use your Itential Customer Success account if you need support when using this Workflow Project.



