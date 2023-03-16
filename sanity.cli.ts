import {defineCliConfig} from 'sanity/cli'
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'default-project-id';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'default-dataset';
export default defineCliConfig({
  api: {
    projectId,
    dataset
  }
})
