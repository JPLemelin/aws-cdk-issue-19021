
# CDK hotswap results in many call to `ListStackResources` of cloudformation API (with ThrottlingException)

Stack content: 
 * 300 dummy ressources, in this case it's `AWS::IAM::Role`
 * 68 lambdas, each lambda use the same asset code

A *HotSwap* deployment `cdk deploy --hotswap`  take ~270 sec vs a classic deployment `cdk deploy` take ~166 sec



## Useful commands

 * `cdk deploy --hotswap -c envName=dev`   classic deployment of den env
 * `cdk deploy -c envName=dev`   Hotswap deployment of den env
