import { WorkflowRunner, PrebuiltRunner } from '@itential-tools/iap-cypress-testing-library/testRunner/testRunners';
const AddIngressRuletoSecurityGroupAWSJob0Data = require('../fixtures/stubs/Add Ingress Rule to Security Group - AWS Job0.json');
const CreateandAttachInternetGatewayAWSJob1Data = require('../fixtures/stubs/Create and Attach Internet Gateway - AWS Job1.json');
const CreateEC2InstanceAWSJob2Data = require('../fixtures/stubs/Create EC2 Instance - AWS Job2.json');
const CreateRouteAWSJob3Data = require('../fixtures/stubs/Create Route - AWS Job3.json');
const CreateSecurityGroupwithIngressRulesAWSJob4Data = require('../fixtures/stubs/Create Security Group with Ingress Rules - AWS Job4.json');
const CreateVPCAWSJob5Data = require('../fixtures/stubs/Create VPC - AWS Job5.json');
const CreateVPCSubnetAWSJob6Data = require('../fixtures/stubs/Create VPC Subnet - AWS Job6.json');
const ProvisionVPCwithNetworkingAWSJob7Data = require('../fixtures/stubs/Provision VPC with Networking - AWS Job7.json');
const DeleteSecurityGroupsbyVPCAWSJob8Data = require('../fixtures/stubs/Delete Security Groups by VPC - AWS Job8.json');
const DeleteSubnetsbyVPCAWSJob9Data = require('../fixtures/stubs/Delete Subnets by VPC - AWS Job9.json');
const DeleteSubnetsbyVPCAWSJob12Data = require('../fixtures/stubs/Delete Subnets by VPC - AWS Job12.json');
const DestroyVPCandEC2InstanceAWSJob10Data = require('../fixtures/stubs/Destroy VPC And EC2 Instance - AWS Job10.json');
const DestroyVPCandEC2InstanceAWSJob13Data = require('../fixtures/stubs/Destroy VPC And EC2 Instance - AWS Job13.json');
const DetachandDeleteInternetGatewaysbyVPCAWSJob11Data = require('../fixtures/stubs/Detach and Delete Internet Gateways by VPC - AWS Job11.json');

function initializeWorkflowRunner(workflow, importWorkflow, isStub, stubTasks) {
  let workflowRunner = new WorkflowRunner(workflow.name);

  if (importWorkflow) {
    // cancel all running jobs for workflow
    workflowRunner.job.cancelAllJobs();

    workflowRunner.deleteWorkflow.allCopies({
      failOnStatusCode: false
    });
    // Check if Stub flag is enabled
    if(isStub){
      stubTasks.forEach(stubTask=>{
        workflow = workflowRunner.stub.task({
          stub: stubTask,
          workflow: workflow,
        });
      })
    }
    workflowRunner.importWorkflow.single({
      workflow,
      failOnStatusCode: false
    });
  }

  /* Verify workflow */
  workflowRunner.verifyWorkflow.exists();
  workflowRunner.verifyWorkflow.hasNoDuplicates({});
  // workflowRunner.verifyWorkflow.dependenciesOnline();

  return workflowRunner;
}

// Function to delete the stubbed workflow and reimport it without the stub tasks
function replaceStubTasks(workflowRunner, workflowName) {
    workflowRunner.deleteWorkflow.allCopies({
        failOnStatusCode: false,
    });
    workflowRunner.importWorkflow.single({ workflow: workflowName });
    workflowRunner.verifyWorkflow.exists();
    workflowRunner.verifyWorkflow.hasNoDuplicates({});
}

describe('Default: Cypress Tests', function () {
  let prebuiltRunner;
  let AddIngressRuletoSecurityGroupAWSJob0Workflow;
  let CreateandAttachInternetGatewayAWSJob1Workflow;
  let CreateEC2InstanceAWSJob2Workflow;
  let CreateRouteAWSJob3Workflow;
  let CreateSecurityGroupwithIngressRulesAWSJob4Workflow;
  let CreateVPCAWSJob5Workflow;
  let CreateVPCSubnetAWSJob6Workflow;
  let ProvisionVPCwithNetworkingAWSJob7Workflow;
  let DeleteSecurityGroupsbyVPCAWSJob8Workflow;
  let DeleteSubnetsbyVPCAWSJob9Workflow;
  let DeleteSubnetsbyVPCAWSJob12Workflow;
  let DestroyVPCandEC2InstanceAWSJob10Workflow;
  let DestroyVPCandEC2InstanceAWSJob13Workflow;
  let DetachandDeleteInternetGatewaysbyVPCAWSJob11Workflow;
  
  before(function () {
    //creates a prebuilt runner for importing the prebuilt
    cy.fixture(`../../../artifact.json`).then((data) => {
      prebuiltRunner = new PrebuiltRunner(data);
    });
    cy.fixture(`../../../bundles/workflows/Add Ingress Rule to Security Group - AWS.json`).then((data) => {
      AddIngressRuletoSecurityGroupAWSJob0Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Create and Attach Internet Gateway - AWS.json`).then((data) => {
      CreateandAttachInternetGatewayAWSJob1Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Create EC2 Instance - AWS.json`).then((data) => {
      CreateEC2InstanceAWSJob2Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Create Route - AWS.json`).then((data) => {
      CreateRouteAWSJob3Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Create Security Group with Ingress Rules - AWS.json`).then((data) => {
      CreateSecurityGroupwithIngressRulesAWSJob4Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Create VPC - AWS.json`).then((data) => {
      CreateVPCAWSJob5Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Create VPC Subnet - AWS.json`).then((data) => {
      CreateVPCSubnetAWSJob6Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Provision VPC with Networking - AWS.json`).then((data) => {
      ProvisionVPCwithNetworkingAWSJob7Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Delete Security Groups by VPC - AWS.json`).then((data) => {
      DeleteSecurityGroupsbyVPCAWSJob8Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Delete Subnets by VPC - AWS.json`).then((data) => {
      DeleteSubnetsbyVPCAWSJob9Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Delete Subnets by VPC - AWS.json`).then((data) => {
      DeleteSubnetsbyVPCAWSJob12Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Destroy VPC And EC2 Instance - AWS.json`).then((data) => {
      DestroyVPCandEC2InstanceAWSJob10Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Destroy VPC And EC2 Instance - AWS.json`).then((data) => {
      DestroyVPCandEC2InstanceAWSJob13Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Detach and Delete Internet Gateways by VPC - AWS.json`).then((data) => {
      DetachandDeleteInternetGatewaysbyVPCAWSJob11Workflow = data;
    });
    
  });

  after(function() {
    prebuiltRunner.deletePrebuilt.single({ failOnStatusCode: false });
  });

  describe('Default: Imports Pre-Built', function () {
    // eslint-disable-next-line mocha/no-hooks-for-single-case
    it('Default: Should import the prebuilt into IAP', function () {
        prebuiltRunner.deletePrebuilt.single({ failOnStatusCode: false });
        prebuiltRunner.importPrebuilt.single({});
    });
  })

  describe('Add Ingress Rule to Security Group - AWS', function() {
    it('It should run Add Ingress Rule to Security Group', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(AddIngressRuletoSecurityGroupAWSJob0Workflow, importWorkflow, isStub, AddIngressRuletoSecurityGroupAWSJob0Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: AddIngressRuletoSecurityGroupAWSJob0Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(AddIngressRuletoSecurityGroupAWSJob0Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(AddIngressRuletoSecurityGroupAWSJob0Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, AddIngressRuletoSecurityGroupAWSJob0Workflow);
      });
    })
  })

  describe('Create and Attach Internet Gateway - AWS', function() {
    it('It should run Create and Attach Internet Gateway', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(CreateandAttachInternetGatewayAWSJob1Workflow, importWorkflow, isStub, CreateandAttachInternetGatewayAWSJob1Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: CreateandAttachInternetGatewayAWSJob1Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(CreateandAttachInternetGatewayAWSJob1Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(CreateandAttachInternetGatewayAWSJob1Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, CreateandAttachInternetGatewayAWSJob1Workflow);
      });
    })
  })

  describe('Create EC2 Instance - AWS', function() {
    it('It should run Create EC2 Instance', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(CreateEC2InstanceAWSJob2Workflow, importWorkflow, isStub, CreateEC2InstanceAWSJob2Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: CreateEC2InstanceAWSJob2Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(CreateEC2InstanceAWSJob2Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(CreateEC2InstanceAWSJob2Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, CreateEC2InstanceAWSJob2Workflow);
      });
    })
  })

  describe('Create Route - AWS', function() {
    it('It should run Create Route', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(CreateRouteAWSJob3Workflow, importWorkflow, isStub, CreateRouteAWSJob3Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: CreateRouteAWSJob3Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(CreateRouteAWSJob3Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(CreateRouteAWSJob3Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, CreateRouteAWSJob3Workflow);
      });
    })
  })

  describe('Create Security Group with Ingress Rules - AWS', function() {
    it('It should run Create Security Group with Ingress Rules', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(CreateSecurityGroupwithIngressRulesAWSJob4Workflow, importWorkflow, isStub, CreateSecurityGroupwithIngressRulesAWSJob4Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: CreateSecurityGroupwithIngressRulesAWSJob4Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(CreateSecurityGroupwithIngressRulesAWSJob4Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(CreateSecurityGroupwithIngressRulesAWSJob4Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, CreateSecurityGroupwithIngressRulesAWSJob4Workflow);
      });
    })
  })

  describe('Create VPC - AWS', function() {
    it('It should run Create VPC', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(CreateVPCAWSJob5Workflow, importWorkflow, isStub, CreateVPCAWSJob5Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: CreateVPCAWSJob5Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(CreateVPCAWSJob5Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(CreateVPCAWSJob5Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, CreateVPCAWSJob5Workflow);
      });
    })
  })

  describe('Create VPC Subnet - AWS', function() {
    it('It should run Create VPC Subnet', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(CreateVPCSubnetAWSJob6Workflow, importWorkflow, isStub, CreateVPCSubnetAWSJob6Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: CreateVPCSubnetAWSJob6Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(CreateVPCSubnetAWSJob6Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(CreateVPCSubnetAWSJob6Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, CreateVPCSubnetAWSJob6Workflow);
      });
    })
  })

  describe('Provision VPC with Networking - AWS', function() {
    it('It should run Provision VPC with Networking', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(ProvisionVPCwithNetworkingAWSJob7Workflow, importWorkflow, isStub, ProvisionVPCwithNetworkingAWSJob7Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: ProvisionVPCwithNetworkingAWSJob7Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(ProvisionVPCwithNetworkingAWSJob7Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(ProvisionVPCwithNetworkingAWSJob7Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, ProvisionVPCwithNetworkingAWSJob7Workflow);
      });
    })
  })

  describe('Delete Security Groups by VPC - AWS', function() {
    it('It should run Delete Security Groups by VPC', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(DeleteSecurityGroupsbyVPCAWSJob8Workflow, importWorkflow, isStub, DeleteSecurityGroupsbyVPCAWSJob8Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: DeleteSecurityGroupsbyVPCAWSJob8Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(DeleteSecurityGroupsbyVPCAWSJob8Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(DeleteSecurityGroupsbyVPCAWSJob8Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, DeleteSecurityGroupsbyVPCAWSJob8Workflow);
      });
    })
  })

  describe('Delete Subnets by VPC - AWS', function() {
    it('It should run Delete Subnets by VPC when VPC has a subnet', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(DeleteSubnetsbyVPCAWSJob9Workflow, importWorkflow, isStub, DeleteSubnetsbyVPCAWSJob9Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: DeleteSubnetsbyVPCAWSJob9Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(DeleteSubnetsbyVPCAWSJob9Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(DeleteSubnetsbyVPCAWSJob9Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, DeleteSubnetsbyVPCAWSJob9Workflow);
      });
    })
  })

  describe('Delete Subnets by VPC - AWS', function() {
    it('It should run Delete Subnets by VPC when VPC has multiple subnets', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(DeleteSubnetsbyVPCAWSJob12Workflow, importWorkflow, isStub, DeleteSubnetsbyVPCAWSJob12Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: DeleteSubnetsbyVPCAWSJob12Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(DeleteSubnetsbyVPCAWSJob12Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(DeleteSubnetsbyVPCAWSJob12Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, DeleteSubnetsbyVPCAWSJob12Workflow);
      });
    })
  })

  describe('Destroy VPC and EC2 Instance - AWS', function() {
    it('It should run Destroy VPC and EC2 Instance when there are multiple instances', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(DestroyVPCandEC2InstanceAWSJob10Workflow, importWorkflow, isStub, DestroyVPCandEC2InstanceAWSJob10Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: DestroyVPCandEC2InstanceAWSJob10Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(DestroyVPCandEC2InstanceAWSJob10Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(DestroyVPCandEC2InstanceAWSJob10Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, DestroyVPCandEC2InstanceAWSJob10Workflow);
      });
    })
  })

  describe('Destroy VPC and EC2 Instance - AWS', function() {
    it('It should run Destroy VPC and EC2 Instance when there is one instance', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(DestroyVPCandEC2InstanceAWSJob13Workflow, importWorkflow, isStub, DestroyVPCandEC2InstanceAWSJob13Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: DestroyVPCandEC2InstanceAWSJob13Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(DestroyVPCandEC2InstanceAWSJob13Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(DestroyVPCandEC2InstanceAWSJob13Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, DestroyVPCandEC2InstanceAWSJob13Workflow);
      });
    })
  })

  describe('Detach and Delete Internet Gateways by VPC - AWS', function() {
    it('It should run Detach and Delete Internet Gateways by VPC', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(DetachandDeleteInternetGatewaysbyVPCAWSJob11Workflow, importWorkflow, isStub, DetachandDeleteInternetGatewaysbyVPCAWSJob11Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: DetachandDeleteInternetGatewaysbyVPCAWSJob11Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(DetachandDeleteInternetGatewaysbyVPCAWSJob11Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(DetachandDeleteInternetGatewaysbyVPCAWSJob11Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, DetachandDeleteInternetGatewaysbyVPCAWSJob11Workflow);
      });
    })
  })
});
