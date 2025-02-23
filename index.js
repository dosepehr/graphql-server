const express = require('express');
const { createHandler } = require('graphql-http/lib/use/http');
const courseSchema = require('./graphql/course');
const app = express();

app.all('/graphql', createHandler({ schema: courseSchema }));
app.listen(4000, () => {
    console.log('app is running on port 4000');
});
