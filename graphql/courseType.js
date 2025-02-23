const { GraphQLObjectType, GraphQLString } = require('graphql');

const CourseType = new GraphQLObjectType({
    name: 'Course',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        price: { type: GraphQLString },
    }),
});

module.exports = CourseType;
