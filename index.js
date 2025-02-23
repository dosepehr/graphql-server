const express = require('express');
const { createHandler } = require('graphql-http/lib/use/http');
const graphqlSchema = require('./graphql');
const { mongoDBInit } = require('./utils/funcs/db');
const app = express();

mongoDBInit();

app.all('/graphql', createHandler({ schema: graphqlSchema }));
app.listen(4000, () => {
    console.log('app is running on port 4000');
});
