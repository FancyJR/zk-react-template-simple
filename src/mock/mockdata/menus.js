export default [
    {
        key: 'base-information',
        text: '基础信息维护',
        icon: 'fa-users',
        path: '',
    },
    {
        key: 'common001',
        parentKey: 'base-information',
        text: '系统管理',
        icon: 'fa-sitemap',
        path: '/base-information/system_page',
    },
    {
        key: 'common002',
        parentKey: 'base-information',
        text: '管理用户管理',
        icon: 'fa-users',
        path: '/base-information/manager',
    },
    {
        key: 'common003',
        parentKey: 'base-information',
        text: '业务用户管理',
        icon: 'fa-users',
        path: '/base-information/business/users',
    },
    {
        key: 'common004',
        parentKey: 'base-information',
        text: '角色管理',
        icon: 'fa-lock',
        path: '/base-information/roles',
    },
    {
        key: 'common005',
        parentKey: 'base-information',
        text: '权限管理',
        icon: 'fa-lock',
        path: '/base-information/permissions',
    },
    {
        key: 'system',
        text: '系统',
        icon: 'fa-th-list',
        order: 1,
        functions: [],
    },
    {
        key: 'system-004002',
        parentKey: 'system',
        text: '修改密码',
        icon: 'fa-lock',
        path: '/system/profile/pass',
        order: 1,
        functions: [],
    },
    {
        key: 'system-002',
        parentKey: 'system',
        text: '系统设置',
        icon: 'fa-cog',
        path: '/system/settings',
        order: 1,
        functions: [],
    },
    {
        key: 'system-004001',
        parentKey: 'system',
        text: '修改个人信息',
        icon: 'fa-users',
        path: '/system/profile/message',
        order: 1,
        functions: [],
    },
    {
        key: 'example',
        text: 'Example',
        icon: 'fa-file-code-o',
        path: '',
    },
    {
        key: 'example-users',
        parentKey: 'example',
        text: '用户管理',
        icon: 'fa-users',
        path: '/example/users',
    },
    {
        key: 'example-promise-ajax',
        parentKey: 'example',
        text: 'promise-ajax',
        icon: 'fa-th-list',
        path: '/example/promise-ajax',
    },
    {
        key: 'example-actions',
        parentKey: 'example',
        text: 'actions',
        icon: 'fa-th-list',
        path: '/example/actions',
    },
    {
        key: 'example-font-icon',
        parentKey: 'example',
        text: 'font-icon',
        icon: 'fa-th-list',
        path: '/example/font-icon',
    },
    {
        key: 'example-iframe',
        parentKey: 'example',
        text: '测试iframe',
        icon: 'fa-th-list',
        path: '/example/iframe-test',
        url: 'http://www.baidu.com',
    },
    {
        key: 'example-text-menu',
        parentKey: 'example',
        text: '一级菜单',
        icon: 'fa-th-list',
        path: '',
    },
    {
        key: 'example-text-menu12',
        parentKey: 'example-text-menu',
        text: '二级菜单1',
        icon: 'fa-th-list',
        path: '/test/menu/12',
    },
    {
        key: 'example-text-menu13',
        parentKey: 'example-text-menu',
        text: '二级菜单2',
        icon: 'fa-th-list',
        path: '',
    },
    {
        key: 'example-text-menu131',
        parentKey: 'example-text-menu13',
        text: '三级菜单1',
        icon: 'fa-th-list',
        path: '/test/menu/131',
    },
    {
        key: 'example-text-menu132',
        parentKey: 'example-text-menu13',
        text: '三级菜单2',
        icon: 'fa-th-list',
        path: '/test/menu/132',
    },
];
