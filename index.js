const express = require('express');
const { createHandler } = require('graphql-http/lib/use/http');
const graphqlSchema = require('./graphql');
const app = express();

app.all('/graphql', createHandler({ schema: graphqlSchema }));
app.listen(4000, () => {
    console.log('app is running on port 4000');
});
