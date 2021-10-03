// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Company, Blog, Post, Comment } = initSchema(schema);

export {
  Company,
  Blog,
  Post,
  Comment
};