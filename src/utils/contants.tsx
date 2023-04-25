import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ArrowLeftOutlined,
  DownOutlined,
  InfoCircleOutlined,
  ClusterOutlined, UserOutlined,
  DownloadOutlined,
  HighlightOutlined,
  MoreOutlined,
  PlusOutlined,
  DeleteOutlined,
  SearchOutlined ,
  LeftOutlined ,
  RightOutlined
} from "@ant-design/icons";
import { MdWeekend, MdMovieCreation, MdSyncAlt, MdOutlineClear } from "react-icons/md";
import { BsListNested, BsListColumnsReverse } from "react-icons/bs";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import { AiOutlineClear, AiOutlineSend,AiFillThunderbolt } from "react-icons/ai";
import { SiThemoviedatabase } from "react-icons/si";


export const SharedIcons = {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ArrowLeftOutlined,
  ClusterOutlined,
  LeftOutlined,
  RightOutlined,
  UserOutlined,
  MdWeekend,
  MdMovieCreation,
  BsListNested,
  DownOutlined,
  FaArrowRight,
  DownloadOutlined,
  InfoCircleOutlined,
  HighlightOutlined,
  MoreOutlined,
  PlusOutlined,
  DeleteOutlined,
  MdSyncAlt,
  MdOutlineClear,
  AiOutlineClear,
  BsListColumnsReverse,
  SiThemoviedatabase,
  FaChevronDown,
  AiOutlineSend,
  SearchOutlined,
  AiFillThunderbolt
};

export const FALL_BACK_IMG = "data:image/png;base64,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";


export const MENU_URL = [{
  name: "Thời trang nam",
  submenu: true,
  sublinks: [{
    Head: "Topwear",
    sublink: [{
      name: "T-shirt",
      link: "/"
    },
    {
      name: "Casual shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    ],
  },
  {
    Head: "Bottomwear",
    sublink: [{
      name: "T-shirt",
      link: "/"
    },
    {
      name: "Casual shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    ],
  },
  {
    Head: "innerwear",
    sublink: [{
      name: "T-shirt",
      link: "/"
    },
    {
      name: "Casual shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    ],
  },

  {
    Head: "sleepwear",
    sublink: [{
      name: "T-shirt",
      link: "/"
    },
    {
      name: "Casual shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    ],
  },
  {
    Head: "footwear",
    sublink: [{
      name: "T-shirt",
      link: "/"
    },
    {
      name: "Casual shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    ],
  },
  ],
},
{
  name: "Thời trang nữ",
  submenu: true,
  sublinks: [{
    Head: "Topwear",
    sublink: [{
      name: "T-shirt",
      link: "/"
    },
    {
      name: "Casual shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    ],
  },
  {
    Head: "Bottomwear",
    sublink: [{
      name: "T-shirt",
      link: "/"
    },
    {
      name: "Casual shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    ],
  },
  {
    Head: "innerwear",
    sublink: [{
      name: "T-shirt",
      link: "/"
    },
    {
      name: "Casual shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    ],
  },

  {
    Head: "sleepwear",
    sublink: [{
      name: "T-shirt",
      link: "/"
    },
    {
      name: "Casual shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    ],
  },
  {
    Head: "footwear",
    sublink: [{
      name: "T-shirt",
      link: "/"
    },
    {
      name: "Casual shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    ],
  },
  ],
},

{
  name: "Landing Page",
  submenu: true,
  sublinks: [{
    Head: "Topwear",
    sublink: [{
      name: "T-shirt",
      link: "/"
    },
    {
      name: "Casual shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    ],
  },
  {
    Head: "Bottomwear",
    sublink: [{
      name: "T-shirt",
      link: "/"
    },
    {
      name: "Casual shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    ],
  },
  {
    Head: "innerwear",
    sublink: [{
      name: "T-shirt",
      link: "/"
    },
    {
      name: "Casual shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    ],
  },

  {
    Head: "sleepwear",
    sublink: [{
      name: "T-shirt",
      link: "/"
    },
    {
      name: "Casual shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    ],
  },
  {
    Head: "footwear",
    sublink: [{
      name: "T-shirt",
      link: "/"
    },
    {
      name: "Casual shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    {
      name: "formal shirts",
      link: "/"
    },
    ],
  },
  ],
},
{
  name: "Liên hệ",
  submenu: false,
  sublink: []
},
];

export const SLIDERS = [
  { url: "https://theme.hstatic.net/200000592359/1001008166/14/slide_2_img.jpg?v=147"  },
  { url: "https://theme.hstatic.net/200000592359/1001008166/14/slide_1_img.jpg?v=147"  },
  { url: "https://theme.hstatic.net/200000592359/1001008166/14/slide_3_img.jpg?v=147"  },
]

export const Category_data = [
  {
    name: "Thời trang nam",
    img: "https://theme.hstatic.net/200000592359/1001008166/14/home_category_1_img.jpg?v=147"
  },
  {
    name: "Thời trang nữ",
    img: "	https://theme.hstatic.net/200000592359/1001008166/14/home_category_2_img.jpg?v=147"
  },
  {
    name: "Thời trang mùa đông",
    img: "https://theme.hstatic.net/200000592359/1001008166/14/home_category_3_img.jpg?v=147"
  },
  {
    name: "Thời trang nổi bật 2023",
    img: "https://theme.hstatic.net/200000592359/1001008166/14/home_category_4_img.jpg?v=147"
  },
  {
    name: "Phụ kiện",
    img: "https://theme.hstatic.net/200000592359/1001008166/14/home_category_5_img.jpg?v=147"
  }
]


export const Products_data = [
  {
    name: "sản phẩm 1",
    colors: [
      "blue", "red", "yellow"
    ],
    sizes: ["XL", "L", "M"],
    price: 120000,
    quantity: 12,
    sale_percent: 10,
    video: undefined,
    combo: true,
    images: [
      "https://product.hstatic.net/200000592359/product/untitled-1_43743bcf461a4d8f8c12b191b7be91f7_master.jpg"
    ]
  },
  {
    name: "sản phẩm 2",
    colors: undefined,
    sizes: ["XL", "L", "M"],
    price: 200000,
    quantity: 12,
    sale_percent: undefined,
    video: undefined,
    combo: undefined,
    images: [
      "https://product.hstatic.net/200000592359/product/untitled-1_43743bcf461a4d8f8c12b191b7be91f7_master.jpg"
    ]
  },
  {
    name: "sản phẩm 3",
    colors: [
      "blue", "red", "yellow"
    ],
    sizes: ["XL", "L", "M"],
    price: 120000,
    quantity: 12,
    sale_percent: 10,
    video: true,
    combo: true,
    images: [
      "https://product.hstatic.net/200000592359/product/untitled-1_43743bcf461a4d8f8c12b191b7be91f7_master.jpg"
    ]
  },
  {
    name: "sản phẩm 4",
    colors: undefined,
    sizes: ["XL", "L", "M"],
    price: 200000,
    quantity: 12,
    sale_percent: undefined,
    video: undefined,
    combo: undefined,
    images: [
      "https://product.hstatic.net/200000592359/product/untitled-1_43743bcf461a4d8f8c12b191b7be91f7_master.jpg"
    ]
  },


  {
    name: "sản phẩm 5",
    colors: [
      "blue", "red", "yellow"
    ],
    sizes: ["XL", "L", "M"],
    price: 120000,
    quantity: 12,
    sale_percent: 10,
    video: undefined,
    combo: true,
    images: [
      "https://product.hstatic.net/200000592359/product/untitled-1_43743bcf461a4d8f8c12b191b7be91f7_master.jpg"
    ]
  },
  {
    name: "sản phẩm 6",
    colors: undefined,
    sizes: ["XL", "L", "M"],
    price: 200000,
    quantity: 12,
    sale_percent: undefined,
    video: undefined,
    combo: undefined,
    images: [
      "https://product.hstatic.net/200000592359/product/untitled-1_43743bcf461a4d8f8c12b191b7be91f7_master.jpg"
    ]
  },
  {
    name: "sản phẩm 7",
    colors: [
      "blue", "red", "yellow"
    ],
    sizes: ["XL", "L", "M"],
    price: 120000,
    quantity: 12,
    sale_percent: 10,
    video: true,
    combo: true,
    images: [
      "https://product.hstatic.net/200000592359/product/untitled-1_43743bcf461a4d8f8c12b191b7be91f7_master.jpg"
    ]
  },
  {
    name: "sản phẩm 8",
    colors: undefined,
    sizes: ["XL", "L", "M"],
    price: 200000,
    quantity: 12,
    sale_percent: undefined,
    video: undefined,
    combo: undefined,
    images: [
      "https://product.hstatic.net/200000592359/product/untitled-1_43743bcf461a4d8f8c12b191b7be91f7_master.jpg"
    ]
  }
]


export const FREE_SHIP_MONEY = 800000;