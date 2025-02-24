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

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        courses: {
            type: new GraphQLList(CourseType),
            resolve: async () => {
                return await Course.find({});
            },
        },
        teachers: {
            type: new GraphQLList(TeacherType),
            resolve: async () => {
                return await Teacher.find({});
            },
        },
        course: {
            type: CourseType,
            args: {
                id: { type: GraphQLString },
            },
            resolve: async (obj, { id }) => {
                return await Course.findOne({ _id: id });
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
