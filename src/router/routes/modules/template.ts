import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const template: AppRouteModule = {
  path: '/template',
  name: 'Template',
  component: LAYOUT,
  redirect: '/template/index',
  meta: {
    title: '模板',
    hideChildrenInMenu: true,
  },
  children: [
    {
      path: 'index',
      name: 'TemplatePage',
      component: () => import('/@/views/template/index.vue'),
      meta: {
        title: '模板页',
      },
    },
  ],
};

export default template;
