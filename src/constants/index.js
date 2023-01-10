export const ImageUri = {
    Banner1:
        'https://gdn.printerval.com/unsafe/0x840/assets.printerval.com/2022/08/05/banner-printerval-sale-up-to-50-2888x840-d0c0df12a556032aca089a994ac3294a-progressive-9bcaa3c5f9e1b8b84ef5c6aa835cf9d0.jpg',
    Banner2:
        'https://gdn.printerval.com/unsafe/0x840/assets.printerval.com/2022/07/28/banner-ukraine-i-6e6f3310fb1b5e40de430c528d00dd27.jpg',
    Banner3: ' ',
    Category1:
        'https://gdn.printerval.com/unsafe/360x360/assets.printerval.com/2022/06/16/clothing-1afa462c938839df06cbb9912569828c.png',
    Category2:
        'https://gdn.printerval.com/unsafe/360x360/assets.printerval.com/2022/06/16/t-shirt-mockup-featuring-a-stack-of-folded-t-shirts-6402a-2-6fc6804c3df5bc30a68591706a3ca8aa.png',
    Category3:
        'https://gdn.printerval.com/unsafe/360x360/assets.printerval.com/2022/06/16/tanktop-34c72c640a6733db6d05e039f03a163b.png',
    Category4:
        'https://gdn.printerval.com/unsafe/360x360/assets.printerval.com/2022/06/16/mockup-of-a-pillow-over-a-background-with-cool-shapes-24957-820a00d7e3055703a5521f17bc9bb1a1.png',
    Category5:
        'https://gdn.printerval.com/unsafe/600x600/assets.printerval.com/2022/06/16/377-1c77a76b7c99979113ff81d6a56c848c.png',
    Category6:
        'https://gdn.printerval.com/unsafe/360x360/assets.printerval.com/2022/06/16/bag-9bc57ade4c7d2a60ae01b5612b23ecb6.png',
};

export const RELEVANT = {
    BEST_SELLING: {
        name: 'Best Selling',
        param: 'sold',
    },
    NEWEST: {
        name: 'Newest',
        param: 'lastest',
    },
    TOP_VIEW: {
        name: 'Top View',
        param: 'view',
    },
    PRICE_LOW_TO_HIGH: {
        name: 'Price: Low to High',
        param: 'low_price',
    },
    PRICE_HIGH_TO_LOW: {
        name: 'Price: High to Low',
        param: 'high_price',
    },
    TOP_DISCOUNT: {
        name: 'Top Discount',
        param: 'sale',
    },
};

export const ORDER_SIZE = ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'];

export const PAYMENT_METHOD = [
    {
        METHOD: 'PAYPAL',
        TITLE: 'Checkout via Paypal',
        SUBTITLE: "% Paypal's Transaction fee",
        MULTIPLIER: 0.044,
    },

    {
        METHOD: 'STRIPE',
        TITLE: 'Checkout via Credit Card',
        SUBTITLE: "% Stripe's Transaction fee",
        MULTIPLIER: 0.029,
    },
    {
        METHOD: 'PAY_LATER',
        TITLE: 'Buy now, pay later',
        SUBTITLE: '% Transaction fee',
        MULTIPLIER: 0.06,
    },
];
export const IMAGE_URI = {
    PAYPAL: 'https://printerval.com/modules/cart/images/PayPal.png',
    VISA: 'https://printerval.com/modules/cart/images/visa.png',
    MASTER: 'https://printerval.com/modules/cart/images/master-card.png',
    AMEX: 'https://printerval.com/modules/cart/images/amex.png',
    AFTERPAY: 'https://printerval.com/modules/cart/images/afterpay.png',
    KLARNA: 'https://printerval.com/modules/cart/images/klarna.png',
};

/**
 * Hiển thị lịch sử tìm kiếm keyword tối đa
 */
export const MAXIMUM_SEACRH_HISTORY = 5;

/**
 * Hiển thị lịch sử tìm kiếm product tối đa
 */
export const MAXIMUM_PRODUCT_HISOTRY = 20;

export const ABOUT_US_URL = 'https://printerval.com/about-us-n6.html';
export const REFER_FRIEND_URL = 'https://printerval.com/refer';

export const DIALOG_ICON = {
    TRASH: 'trash',
    FAILED: 'failed',
    LOGOUT: 'logout',
    INFO: 'info',
};

export const PRODUCT_ANIM = {
    DROP_CART_DURATION: 900,
    SHAKE_ICON: 500,
};

/**
 * Các domain không áp dụng cdnImage
 */
export const EXCLUDE_CDN_DOMAIN = [
    'localhost',
    '.test',
    '.vn',
    '.local',
    'liveview.printerval.com',
    'redbubble.net',
    'amazon.com',
    'printerval.com/unsafe',
    'i.etsystatic.com',
    'res.cloudinary.com',
    'printerval.megaads.vn',
    'image.spreadshirtmedia.com',
    'd1q9av5b648rmv.cloudfront.net',
    'cdn.shopify.com',
    '.jfif',
    '.avif',
    '.jfif',
    '.pjpeg',
    '.pjp',
    '.tif',
    '.tiff',
    '.ico',
    '.cur',
    '.bmp',
    '.gif',
];
