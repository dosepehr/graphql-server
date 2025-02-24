const { GraphQLObjectType, GraphQLString } = require('graphql');
const TeacherType = require('../Teacher/teacherType');
const Teacher = require('../Teacher/teacherModel');

const CourseType = new GraphQLObjectType({
    name: 'Course',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        price: { type: GraphQLString },
        teacher: {
            type: TeacherType,
            resolve: async (source) => {
                const teacher = await Teacher.findOne({ _id: source.teacher });
                return teacher;
            },
        },
    }),
});

module.exports = CourseType;
