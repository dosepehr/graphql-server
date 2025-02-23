const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
} = require('graphql');

const CourseType = new GraphQLObjectType({
    name: 'Course',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        price: { type: GraphQLString },
    }),
});
const courses = [
    {
        id: 1,
        title: 'js',
        price: 10,
    },
    {
        id: 1,
        title: 'ts',
        price: 20,
    },
];
const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        courses: {
            type: new GraphQLList(CourseType),
            resolve: () => {
                return courses;
            },
        },
    },
});

const graphqlSchema = new GraphQLSchema({
    query: RootQuery,
});

module.exports = graphqlSchema;
