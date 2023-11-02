// assets
// import {
//   AppstoreAddOutlined,
//   AntDesignOutlined,
//   BarcodeOutlined,
//   BgColorsOutlined,
//   FontSizeOutlined,
//   LoadingOutlined
// } from '@ant-design/icons';

// icons
// const icons = {
//   FontSizeOutlined,
//   BgColorsOutlined,
//   BarcodeOutlined,
//   AntDesignOutlined,
//   LoadingOutlined,
//   AppstoreAddOutlined
// };

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'booking',
      title: 'Booking',
      type: 'item',
      url: '/booking',
      // icon: icons.FontSizeOutlined
    },
    {
      id: 'builder',
      title: 'Builder',
      type: 'item',
      url: '/builder',
      // icon: icons.BgColorsOutlined
    },
    {
      id: 'property',
      title: 'Property Type',
      type: 'item',
      url: '/property',
      // icon: icons.BarcodeOutlined
    },
    {
      id: 'catergory',
      title: 'Unit Categroy',
      type: 'item',
      url: '/unitcategory',
      // icon: icons.FontSizeOutlined
    },
    {
      id: 'project',
      title: 'Projects',
      type: 'item',
      url: '/projectdata',
      // icon: icons.FontSizeOutlined
    },
    {
      id:'units',
      title:"Units",
      type:'item',
      url:'/units'
    },
    {
      id:'client',
      title:'Client',
      type:'item',
      url:'/client'
    }
  ]
};

export default utilities;
