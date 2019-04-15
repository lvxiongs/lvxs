export default [
  {
    name: '统计分析',
    path: '/count-manage',
    icon: 'component',
    redirect: '/count-manage/online-manage/list',
    children: [
      {
        name: '在线统计',
        path: '/count-manage/online-manage/list',
        icon: 'rise'
      },
      {
        name: '新进账户',
        path: '/count-manage/newUser-manage/list',
        icon: 'user'
      }
    ]
  }

]
