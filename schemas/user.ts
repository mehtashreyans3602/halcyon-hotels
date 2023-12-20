import { defineField } from "sanity";

const user = {
  name: "user",
  title: "user",
  type: "document",
  fields: [
    defineField({
      name: "isAdmin",
      title: "Is Admin",
      type: "boolean",
      description: "Check to see if user is admin",
      initialValue: false,
      validation: (Rule) => Rule.required(),
      // readOnly:true,
      // hidden:true,
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of the User",
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "url",
      description: "User Image",
      validation:(Rule) => Rule.required(),
    }),
    defineField({
      name: "password",
      title: "Password",
      type: "string",
      hidden: true,
      description: "Password of the User",
      readOnly: true,
      validation:(Rule) => Rule.required(),
    }),
    defineField({
      name: "about",
      title: "About",
      type: "text",
      description: "About Section",
      readOnly: true,
      validation:(Rule) => Rule.required(),
    }),
  ],
};
export default user;
