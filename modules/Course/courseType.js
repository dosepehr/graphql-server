const { GraphQLObjectType, GraphQLString } = require('graphql');
const TeacherType = require('../Teacher/teacherType');

const CourseType = new GraphQLObjectType({
    name: 'Course',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        price: { type: GraphQLString },
        teacher: {
            type: TeacherType,
            resolve: (source) => {
                const teacher = [
                    {
                        id: 1,
                        name: 'Sepehr',
                        age: 10,
                    },
                ];
                return teacher;
            },
        },
    }),
});

module.exports = CourseType;
