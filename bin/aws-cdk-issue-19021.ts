#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCdkIssue19021Stack } from '../lib/aws-cdk-issue-19021-stack';

const app = new cdk.App()

const envName = app.node.tryGetContext('envName')

if (!envName) {
  throw new Error('Error, you have to add context: envName')
}

const context = app.node.tryGetContext(envName)
const region: string = context.region
const accountId: string = context.accountId

const props = {
  env : {
    account: accountId,
    region: region
  } ,
  envName: envName,
  region: region,
}

new AwsCdkIssue19021Stack(app, 'AwsCdkIssue19021Stack', {
  ...props,
})