# Create EC2 Instance - AWS

## Table of Contents

- [Create EC2 Instance - AWS](#create-ec2-instance---aws)
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

Create an EC2 instance in AWS

Capabilities include:
- The workflow is used to create an EC2 instance in AWS


## Getting Started

### Supported IAP Versions

Itential Workflow Projects are built and tested on particular versions of IAP. In addition, Workflow Projects are often dependent on external systems and as such, these Workflow Projects will have dependencies on these other systems. This version of **Create EC2 Instance - AWS** has been tested with:


- IAP **2023.1**



### External Dependencies

This version of **Create EC2 Instance - AWS** has been tested with:

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

This version of **Create EC2 Instance - AWS** has been tested with:

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
      <td>Create EC2 Instance - AWS</td>
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
      <td>imageId</td>
      <td>string</td>
      <td>yes</td>
      <td>The ID of the AMI</td>
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
      <td>publicIp</td>
      <td>string</td>
      <td>Public IP of the instance</td>
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
    

The following items show how to query successful results from the output:

      
##### Public IP of the instance

`publicIp`

      
##### Describe Instance Request

`instanceInfo.response`

      
    
    
  



### Example Inputs and Outputs

  
#### Example 1

    
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

    
  


## Support

Please use your Itential Customer Success account if you need support when using this Workflow Project.