import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'default-project-id';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'default-dataset';

export default defineConfig({
  basePath:'/studio',
  name: 'ZACKDX_Content_Studio',
  title: 'ZackDx Content Studio',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
