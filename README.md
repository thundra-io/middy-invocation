# middy-invocation

Middy middleware for accessing current AWS Lambda invocation event and context from anywhere 
without need to passing event and context as arguments through your code.


## Installation

To install the middleware, you can use NPM:

```
npm install --save middy-invocation
```

**Note:** Requires `@middy/core` version `2.0.0`+


## Usage

- Register `middy-invocation` middleware in your handler:
```javascript
const middy = require('@middy/core');
const invocation = require('middy-invocation');

const handler = async(event, context) => {
  // Do something meaningful

  return {
    statusCode: 200,
  }
}

module.exports.handler = middy(handler).use(invocation());
```

- Access event and context from anywhere/module/file:
```javascript
const { event, context } = require('middy-invocation');

const evt = event();
const ctx = context();
const awsRequestId = ctx.awsRequestId; // or context().awsRequestId;
const remainingTimeInMillis = ctx.getRemainingTimeInMillis(); // or context().getRemainingTimeInMillis();
```


## Contributing

Everyone is very welcome to contribute to this repository. 
Feel free to [raise issues](https://github.com/serkan-ozal/middy-invocation/issues) 
or to [submit Pull Requests](https://github.com/serkan-ozal/middy-invocation/pulls).


## License

Licensed under [MIT License](LICENSE).
