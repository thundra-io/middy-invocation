import 'aws-lambda'

export interface Context {
    readonly callbackWaitsForEmptyEventLoop: boolean;
    readonly functionName: string;
    readonly functionVersion: string;
    readonly invokedFunctionArn: string;
    readonly memoryLimitInMB: string;
    readonly awsRequestId: string;
    readonly logGroupName: string;
    readonly logStreamName: string;
    readonly identity?: AWSLambda.CognitoIdentity | undefined;
    readonly clientContext?: AWSLambda.ClientContextClient | undefined;

    getRemainingTimeInMillis(): number;
}

export function context(): Context;

export function event<T extends any>(): T;
