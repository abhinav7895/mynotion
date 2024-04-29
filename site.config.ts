import { siteConfig } from './lib/site-config'

export default siteConfig({
  rootNotionPageId: 'befc8673239b4b778e3628e77254773f',
  name: 'Abhinav',
  domain: 'localhost:3000',
  author: 'Abhinav Yadav',
  description: 'Frontend Developer from 🇮🇳, Passionate about tech and web dev.',
  twitter: 'abhinavvay',
  github: 'abhinav7895',
  linkedin: 'abhinavay',
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,
  isPreviewImageSupportEnabled: true,
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:


  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,
  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'default',
  // navigationLinks: [
  //   {
  //     title: 'about me',
  //     pageId: '4c6b36c7a5b04b7a97f88e7035ef28e2'
  //   },
  // ]
})
