const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
} = require('graphql');
const CourseType = require('../modules/Course/courseType');
const TeacherType = require('../modules/Teacher/teacherType');
const Teacher = require('../modules/Teacher/teacherModel');
const Course = require('../modules/Course/courseModel');
const { addOne } = require('../modules/Factory/factoryController');
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
                return addOne(Teacher, { name, age });
            },
        },

        addCourse: {
            type: CourseType,
            args: {
                title: {
                    type: GraphQLString,
                },
                price: {
                    type: GraphQLString,
                },
                teacher: {
                    type: GraphQLID,
                },
            },
            resolve: async (obj, args) => {
                const { title, price, teacher } = args;
                return addOne(Course, { title, price, teacher });
            },
        },
    },
});
const graphqlSchema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation,
});

module.exports = graphqlSchema;
