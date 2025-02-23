const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

const TeacherType = new GraphQLObjectType({
    name: 'Teacher',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
    }),
});

module.exports = TeacherType;
