import { defineField } from "sanity";

const accounts = {
    name:"account",
    title:'Account',
    type:"document",
    fields:[
        defineField({
            name:'providerId',
            type:'string',
        }),
        defineField({
            name:'providerAccountId',
            type:'string',
        }),
        defineField({
            name:'refreshToken',
            type:'string',
        }),
        defineField({
            name:'accessToken',
            type:'string',
        }),
        defineField({
            name:'accessTokenExpires',
            type:'number',
        }),
        defineField({
            name:'user',
            title:'User',
            type:'reference',
            to:{type: 'user'}
        }),
    ]
};
export default accounts;