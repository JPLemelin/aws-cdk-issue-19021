import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';


export class AwsCdkIssue19021Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    // The code that defines your stack goes here

    const asset = new lambda.AssetCode('src')

    for(let i = 0; i < 300; i++) {
      new iam.Role(this, `dummy-role-${i}`, {
        assumedBy: new iam.AnyPrincipal()
      })
    }

    for(let i = 0; i < 68; i++) {
      new lambda.Function(this, `fct-${i}`, {
        code: asset,
        runtime: lambda.Runtime.NODEJS_14_X,
        handler: 'hello.handler',
      })
    }

  }
}
