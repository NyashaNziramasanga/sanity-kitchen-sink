export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f9559baf6aab7d8450c6db7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ynu783re',
                  apiId: '30122454-278b-4711-9c06-8f3411c6fa9e'
                },
                {
                  buildHookId: '5f9559ba98c2a5c289789b8b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-qymkwh63',
                  apiId: '8d3f052f-8de7-44e4-b8fe-2c0578083eeb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/NyashaNziramasanga/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-qymkwh63.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
