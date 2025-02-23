const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLString,
    GraphQLInt,
} = require('graphql');
const CourseType = require('./courseType');
const TeacherType = require('../modules/Teacher/teacherType');
const mongoDBInit = require('../utils/mongo');
const Teacher = require('../modules/Teacher/teacherModel');

const courses = [
    {
        id: 1,
        title: 'js',
        price: 10,
        teacherId: '1',
    },
    {
        id: 1,
        title: 'ts',
        price: 20,
        teacherId: '2',
    },
];
const teachers = [
    {
        id: 1,
        name: 'Amin',
        age: 10,
    },
    {
        id: 1,
        name: 'sepehr',
        age: 20,
    },
];

mongoDBInit();

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
const RootMutation = new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
        addTeacher: {
            type: TeacherType,
            args: {
                name: { type: GraphQLString },
                age: { type: GraphQLInt },
            },
            resolve: async (obj, args) => {
                const { name, age } = args;
                const teacher = { name, age };
                return await Teacher.create(teacher);
            },
        },

        addCourse: {
            // Data
        },
    },
});
const graphqlSchema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation,
});

module.exports = graphqlSchema;
