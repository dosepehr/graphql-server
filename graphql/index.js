const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLString,
} = require('graphql');
const CourseType = require('./courseType');
const TeacherType = require('./teacherType');

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
const teachers = [
    {
        id: 1,
        name: 'js',
        age: 10,
    },
    {
        id: 1,
        name: 'ts',
        age: 20,
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
        teachers: {
            type: new GraphQLList(TeacherType),
            resolve: () => {
                return teachers;
            },
        },
        course: {
            type: TeacherType,
            args: {
                id: { type: GraphQLString },
            },
            resolve: (obj, { id }) => {
                return teachers[+id];
            },
        },
    },
});

const graphqlSchema = new GraphQLSchema({
    query: RootQuery,
});

module.exports = graphqlSchema;
