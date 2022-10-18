import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined,
  BranchesOutlined
} from '@ant-design/icons';
import {
  APP_PREFIX_PATH
} from 'configs/AppConfig'

const mainBoardNavTree = [
{
  key: 'main',
  path: `${APP_PREFIX_PATH}/main`,
  title: 'sidenav.main',
  icon: '',
  breadcrumb: false,
  submenu: [
    {
      key: 'main-dashboard',
      path: `${APP_PREFIX_PATH}/main/dashboard`,
      title: 'sidenav.main.dashboard',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-planner',
      path: `${APP_PREFIX_PATH}/main/planner`,
      title: 'sidenav.main.planner',
      icon: BranchesOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-catalog',
      path: `${APP_PREFIX_PATH}/main/catalog`,
      title: 'sidenav.main.catalog',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'catalog-goods',
          path: `${APP_PREFIX_PATH}/main/catalog/goods`,
          title: 'sidenav.main.catalog.goods',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'catalog-categorys',
          path: `${APP_PREFIX_PATH}/main/catalog/categorys`,
          title: 'sidenav.main.catalog.categorys',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'catalog-collections',
          path: `${APP_PREFIX_PATH}/main/catalog/collections`,
          title: 'sidenav.main.catalog.collections',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'catalog-combo',
          path: `${APP_PREFIX_PATH}/main/catalog/combo`,
          title: 'sidenav.main.catalog.combo',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
      ]
    },
    {
      key: 'main-orders',
      path: `${APP_PREFIX_PATH}/main/orders`,
      title: 'sidenav.main.orders',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-clients',
      path: `${APP_PREFIX_PATH}/main/clients`,
      title: 'sidenav.main.clients',
      icon: UserOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'clients-list',
          path: `${APP_PREFIX_PATH}/main/clients/list`,
          title: 'sidenav.main.clients.list',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'clients-group',
          path: `${APP_PREFIX_PATH}/main/clients/group`,
          title: 'sidenav.main.clients.group',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
      ]
    },
    {
      key: 'main-banners',
      path: `${APP_PREFIX_PATH}/main/banners`,
      title: 'sidenav.main.banners',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-promocodes',
      path: `${APP_PREFIX_PATH}/main/promocodes`,
      title: 'sidenav.main.promocodes',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-offpicks',
      path: `${APP_PREFIX_PATH}/main/offpicks`,
      title: 'sidenav.main.offpicks',
      icon: ShopOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'offpicks-addresses',
          path: `${APP_PREFIX_PATH}/main/offpicks/addresses`,
          title: 'sidenav.main.offpicks.addresses',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'offpicks-geozones',
          path: `${APP_PREFIX_PATH}/main/offpicks/geozones`,
          title: 'sidenav.main.offpicks.geozones',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
      ]
    },
    {
      key: 'main-employees',
      path: `${APP_PREFIX_PATH}/main/employees`,
      title: 'sidenav.main.employees',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-mailingLists',
      path: `${APP_PREFIX_PATH}/main/mailingLists`,
      title: 'sidenav.main.mailingLists',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
}];


const systemsBoardNavTree = [
  {
    key: 'systems',
    path: `${APP_PREFIX_PATH}/systems`,
    title: 'sidenav.systems',
    icon: '',
    breadcrumb: false,
    submenu: [
      {
        key: 'systems-settings',
        path: `${APP_PREFIX_PATH}/systems/settings`,
        title: 'sidenav.systems.settings',
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'systems-mobileApp',
        path: `${APP_PREFIX_PATH}/systems/mobileApp`,
        title: 'sidenav.systems.mobileApp',
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'systems-logs',
        path: `${APP_PREFIX_PATH}/systems/logs`,
        title: 'sidenav.systems.logs',
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: []
      },
    ]
  }
]

const navigationConfig = [
  ...mainBoardNavTree,
  ...systemsBoardNavTree,
]

export default navigationConfig;
