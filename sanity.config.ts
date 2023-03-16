import {defineConfig, Studio} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme';
import StudioNavbar from './components/StudioNavbar';
import Logo from './components/Logo';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'default-project-id';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'default-dataset';

export default defineConfig({
  basePath:'/studio',
  name: 'ZACKDX_Content_Studio',
  title: 'Zack Dx Content Studio',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio:{
    components:{
      logo: Logo,
      navbar:StudioNavbar
    }
  },
  theme:myTheme // For my Custom Theme
})
