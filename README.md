# typescript-fetch
A TypeScript type definition for the Fetch API

This is based off the [Fetch Standard spec](https://fetch.spec.whatwg.org/) as of 9 March 2015.

It requires the ES6 Promises type definitions:  
https://github.com/borisyankov/DefinitelyTyped/tree/master/es6-promise

And, unless you're using Chrome Canary, the following polyfills in production:
- Fetch API - https://github.com/github/fetch
- ES6 Promises - https://github.com/jakearchibald/es6-promise

**Note:**
The headers dictionary should have an iterator however I'm not sure how to go about implementing it - feel free to submit a PR for this change.
