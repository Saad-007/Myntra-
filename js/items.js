const items = [
    {
        id: '001',
        image: '../assets/img/Women/10.jpg',
        company: 'Spankle',
        item_name: `Ribbed T-shirt`,
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
        isNew: true,
    },
    {
        id: '002',
        image: '../assets/img/Men/3.jpg',
        company: 'GRACE KARIN',
        item_name: 'GRACE KARIN Girls Summer Dress',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '003',
        image: '../assets/img/Beauty/4.jpg',
        company: 'WDIRARA',
        item_name: `Slim Fit Linen Shirt`,
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '004',
        image: '../assets/img/Women/7.jpg',
        company: 'Carpie',
        item_name: `Oversized T-shirt`,
        original_price: 1899,
        current_price: 2599,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '005',
        image: '../assets/img/Home/3.jpg',
        company: 'GRACE KARIN',
        item_name: '2-pack Airy Multiway Curtains',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '006',
        image: '../assets/img/Women/15.jpg',
        company: 'Shaza',
        item_name: 'Wide-cut Pull-on Pants',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '007',
        image: '../assets/img/Beauty/3.jpg',
        company: 'GRACE KARIN',
        item_name: 'GRACE KARIN Girls Summer Dress',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '008',
        image: '../assets/img/Men/4..jpg',
        company: 'WDIRARA',
        item_name: `Slim Fit Linen Shirt`,
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '009',
        image: '../assets/img/Women/14.jpg',
        company: 'Silvia',
        item_name: 'A-Line Tie-Strap Dress',
        original_price: 5999,
        current_price: 2499,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '010',
        image: '../assets/img/Home/10.jpg',
        company: 'Poque Stuke',
        item_name: `Tall Terracotta Vase`,
        original_price: 5999,
        current_price: 2899,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '011',
        image: '../assets/img/Beauty/1.jpg',
        company: 'Carlton London',
        item_name: 'Relaxed Fit Linen Resort Shirt',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        },
    },
    {
        id: '012',
        image: '../assets/img/Men/7.jpg',
        company: 'LYANER',
        item_name: `Relaxed Fit Linen Resort Shirt`,
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '013',
        image: '../assets/img/Home/8.jpg',
        company: 'Belle Poque',
        item_name: `Muslin Queen Duvet Cover Set`,
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '014',
        image: '../assets/img/Men/15.jpg',
        company: 'Squish',
        item_name: `Regular Fit Linen-blend Shirt`,
        original_price: 2999,
        current_price: 2499,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },

    },
    {
        id: '015',
        image: '../assets/img/Women/9.jpg',
        company: 'Arshiner',
        item_name: 'Oversized Printed T-shirt',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '016',
        image: '../assets/img/Beauty/6.jpg',
        company: 'Arshiner',
        item_name: 'Oversized Printed T-shirt',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },

];
const New = [
    {
        id: '015',
        image: '../assets/img/16.jpg',
        company: 'Carlton London',
        item_name: 'Kaftan dress',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        },
        isold: true,

    },
    {
        id: '00016',
        image: '../assets/img/016.jpg',
        company: 'CUKOO',
        item_name: 'Angled Contouring Brush',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.3,
            count: 24,
        },
    },
    {
        id: '017',
        image: '../assets/img/18.jpg',
        company: 'NUEVOSDAMAS',
        item_name: 'Balloon-sleeved shirt dress',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '0015',
        image: '../assets/img/0015.jpg',
        company: 'Carlton London',
        item_name: 'Kaftan dress',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        },
    },
    {
        id: '00018',
        image: '../assets/img/018.jpg',
        company: 'Sunan',
        item_name: 'Makeup Brush Case',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '0016',
        image: '../assets/img/0016.jpg',
        company: 'CUKOO',
        item_name: 'Flounced chiffon dress',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.3,
            count: 24,
        },
    },
    {
        id: '018',
        image: '../assets/img/19.jpg',
        company: 'Sunan',
        item_name: 'Viscose tunic dress',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '0018',
        image: '../assets/img/0018.jpg',
        company: 'Sunan',
        item_name: 'Viscose tunic dress',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '00015',
        image: '../assets/img/015.jpg',
        company: 'Carlton London',
        item_name: '3-pack Mini Lip Glosses',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        },
    },
    {
        id: '016',
        image: '../assets/img/17.jpg',
        company: 'CUKOO',
        item_name: 'Flounced chiffon dress',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.3,
            count: 24,
        },
    },
    {
        id: '00017',
        image: '../assets/img/017.jpg',
        company: 'NUEVOSDAMAS',
        item_name: 'Eyeshadow Brush',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '0017',
        image: '../assets/img/0017.jpg',
        company: 'NUEVOSDAMAS',
        item_name: 'Balloon-sleeved shirt dress',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    
    
]
const Women = [
    {
        id: '031',
        image: '../assets/img/Women/1.jpg',
        company: 'Carlton London',
        item_name: 'Off-the-shoulder Dress',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        },
        isold: true,

    },
    {
        id: '032',
        image: '../assets/img/Women/2.jpg',
        company: 'GRACE KARIN',
        item_name: 'Wide-leg Joggers',
        original_price: 2799,
        current_price: 1407,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.3,
            count: 24,
        },
    },
    {
        id: '033',
        image: '../assets/img/Women/3.jpg',
        company: 'GRACE KARIN',
        item_name: 'High-waist Dress Pants',
        original_price: 1699,
        current_price: 795,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '034',
        image: '../assets/img/Women/4.jpg',
        company: 'WDIRARA',
        item_name: `Oversized T-shirt`,
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '035',
        image: '../assets/img/Women/5.jpg',
        company: 'Sosomi',
        item_name: 'Fitted T-shirt',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '036',
        image: '../assets/img/Women/6.jpg',
        company: 'Lacozy',
        item_name: 'Crew-neck Sweatshirt',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '037',
        image: '../assets/img/Women/7.jpg',
        company: 'Carpie',
        item_name: `Oversized T-shirt`,
        original_price: 1899,
        current_price: 2599,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '038',
        image: '../assets/img/Women/8.jpg',
        company: 'Belle Poque',
        item_name: `Canvas Cargo Pants`,
        original_price: 2999,
        current_price: 1999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '039',
        image: '../assets/img/Women/9.jpg',
        company: 'Arshiner',
        item_name: 'Oversized Printed T-shirt',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '040',
        image: '../assets/img/Women/10.jpg',
        company: 'Spankle',
        item_name: `Ribbed T-shirt`,
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '041',
        image: '../assets/img/Women/11.jpg',
        company: 'Crêped',
        item_name: 'Crêped Viscose Skirt',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '042',
        image: '../assets/img/Women/12.jpg',
        company: 'Alancia',
        item_name: 'Oversized Boat-neck Top',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '043',
        image: '../assets/img/Women/13.jpg',
        company: 'ADIDAS',
        item_name: 'Wide High Jeans',
        original_price: 5499,
        current_price: 8999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '044',
        image: '../assets/img/Women/14.jpg',
        company: 'Silvia',
        item_name: 'A-Line Tie-Strap Dress',
        original_price: 5999,
        current_price: 2499,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '045',
        image: '../assets/img/Women/15.jpg',
        company: 'Shaza',
        item_name: 'Wide-cut Pull-on Pants',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '046',
        image: '../assets/img/Women/16.jpg',
        company: 'Ariana',
        item_name: 'Off-the-shoulder Jersey Top',
        original_price: 2999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '047',
        image: '../assets/img/Women/61.jpg',
        company: 'ADIDAS',
        item_name: 'Indian Cricket ODI Jersey',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '048',
        image: '../assets/img/Women/62.jpg',
        company: 'ADIDAS',
        item_name: 'Indian Cricket ODI Jersey',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '049',
        image: '../assets/img/Women/63.jpg',
        company: 'ADIDAS',
        item_name: 'Indian Cricket ODI Jersey',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '050',
        image: '../assets/img/Women/70.jpg',
        company: 'ADIDAS',
        item_name: 'Indian Cricket ODI Jersey',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    // {
    //     id: '040',
    //     image: 'img/Women/10.jpg',
    //     company: 'ADIDAS',
    //     item_name: 'Indian Cricket ODI Jersey',
    //     original_price: 999,
    //     current_price: 999,
    //     discount_percentage: 0,
    //     return_period: 14,
    //     delivery_date: '10 Oct 2023',
    //     rating: {
    //         stars: 5.0,
    //         count: 10,
    //     },
    // },
]
const Men = [
    {
        id: '101',
        image: '../assets/img/Men/1.jpg',
        company: 'Carlton London',
        item_name: 'Relaxed Fit Linen Resort Shirt',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        },
        isold: true,

    },
    {
        id: '102',
        image: '../assets/img/Men/2.jpg',
        company: 'GRACE KARIN',
        item_name: 'Loose Fit Shirt',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.3,
            count: 24,
        },
    },
    {
        id: '103',
        image: '../assets/img/Men/3.jpg',
        company: 'GRACE KARIN',
        item_name: 'GRACE KARIN Girls Summer Dress',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '104',
        image: '../assets/img/Men/4..jpg',
        company: 'WDIRARA',
        item_name: `Slim Fit Linen Shirt`,
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '105',
        image: '../assets/img/Men/5.jpg',
        company: 'Sosomi',
        item_name: 'Regular Fit Utility Overshirt',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '106',
        image: '../assets/img/Men/6.jpg',
        company: 'Lacozy',
        item_name: 'Slim Fit Easy-iron Shirt',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '107',
        image: '../assets/img/Men/7.jpg',
        company: 'LYANER',
        item_name: `Relaxed Fit Linen Resort Shirt`,
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '108',
        image: '../assets/img/Men/8.jpg',
        company: 'Belle Poque',
        item_name: `Regular Fit Linen-blend Shirt`,
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '109',
        image: '../assets/img/Men/9.jpg',
        company: 'Belle Poque',
        item_name: `Regular Fit Cargo Pants`,
        original_price: 1999,
        current_price: 1599,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '110',
        image: '../assets/img/Men/10.jpg',
        company: 'Poque Stuke',
        item_name: `Regular Fit Hoodie`,
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '111',
        image: '../assets/img/Men/11.jpg',
        company: 'Strike',
        item_name: `Oversized Fit Cotton T-shirt`,
        original_price: 2985,
        current_price: 1868,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '112',
        image: '../assets/img/Men/12.jpg',
        company: 'Parada',
        item_name: `Loose Cargo Denim Joggers`,
        original_price: 1500,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '113',
        image: '../assets/img/Men/13.jpg',
        company: 'Heliaya',
        item_name: `Skinny Fit Jacket`,
        original_price: 5999,
        current_price: 2499,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '114',
        image: '../assets/img/Men/14.jpg',
        company: 'Squite',
        item_name: `Loose Jeans`,
        original_price: 4599,
        current_price: 4169,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '115',
        image: '../assets/img/Men/15.jpg',
        company: 'Squish',
        item_name: `Regular Fit Linen-blend Shirt`,
        original_price: 2999,
        current_price: 2499,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '116',
        image: '../assets/img/Men/16.jpg',
        company: 'Alacia',
        item_name: `Regular Fit Textured Shirt`,
        original_price: 2399,
        current_price: 1899,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
]
const Beauty = [
    {
        id: '131',
        image: '../assets/img/Beauty/1.jpg',
        company: 'Carlton London',
        item_name: 'Relaxed Fit Linen Resort Shirt',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        },
        isold: true,

    },
    {
        id: '132',
        image: '../assets/img/Beauty/2.jpg',
        company: 'GRACE KARIN',
        item_name: 'Loose Fit Shirt',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.3,
            count: 24,
        },
    },
    {
        id: '133',
        image: '../assets/img/Beauty/3.jpg',
        company: 'GRACE KARIN',
        item_name: 'GRACE KARIN Girls Summer Dress',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '134',
        image: '../assets/img/Beauty/4.jpg',
        company: 'WDIRARA',
        item_name: `Slim Fit Linen Shirt`,
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '135',
        image: '../assets/img/Beauty/5.jpg',
        company: 'Sosomi',
        item_name: 'Regular Fit Utility Overshirt',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '136',
        image: '../assets/img/Beauty/6.jpg',
        company: 'Lacozy',
        item_name: 'Slim Fit Easy-iron Shirt',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '137',
        image: '../assets/img/Beauty/7.jpg',
        company: 'LYANER',
        item_name: `Relaxed Fit Linen Resort Shirt`,
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '138',
        image: '../assets/img/Beauty/8.jpg',
        company: 'Belle Poque',
        item_name: `Regular Fit Linen-blend Shirt`,
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '139',
        image: '../assets/img/Beauty/9.jpg',
        company: 'Belle Poque',
        item_name: `Regular Fit Cargo Pants`,
        original_price: 1999,
        current_price: 1599,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '130',
        image: '../assets/img/Beauty/10.jpg',
        company: 'Poque Stuke',
        item_name: `Regular Fit Hoodie`,
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '141',
        image: '../assets/img/Beauty/11.jpg',
        company: 'Strike',
        item_name: `Soft Rattle`,
        original_price: 2985,
        current_price: 1868,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '142',
        image: '../assets/img/Beauty/12.jpg',
        company: 'Parada',
        item_name: `Loose Cargo Denim Joggers`,
        original_price: 1500,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
]
const Home = [
    {
        id: '161',
        image: '../assets/img/Home/1.jpg',
        company: 'Carlton London',
        item_name: 'Metal Wire Wall Shelf',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        },
        isold: true,

    },
    {
        id: '162',
        image: '../assets/img/Home/2.jpg',
        company: 'GRACE KARIN',
        item_name: 'Bouclé Cushion Cover',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.3,
            count: 24,
        },
    },
    {
        id: '163',
        image: '../assets/img/Home/3.jpg',
        company: 'GRACE KARIN',
        item_name: '2-pack Airy Multiway Curtains',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '164',
        image: '../assets/img/Home/4.jpg',
        company: 'WDIRARA',
        item_name: `Coffee Table`,
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '165',
        image: '../assets/img/Home/5.jpg',
        company: 'Sosomi',
        item_name: 'Stoneware Candlestick',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '166',
        image: '../assets/img/Home/6.jpg',
        company: 'Lacozy',
        item_name: 'Rectangular Tasseled Cushion',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '167',
        image: '../assets/img/Home/7.jpg',
        company: 'LYANER',
        item_name: `2-pack Linen-blend Curtain Panels`,
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '168',
        image: '../assets/img/Home/8.jpg',
        company: 'Belle Poque',
        item_name: `Muslin Queen Duvet Cover Set`,
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '169',
        image: '../assets/img/Home/9.jpg',
        company: 'Belle Poque',
        item_name: `Toiletry Bag`,
        original_price: 1999,
        current_price: 1599,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '170',
        image: '../assets/img/Home/10.jpg',
        company: 'Poque Stuke',
        item_name: `Tall Terracotta Vase`,
        orignal_price: 5899,
        current_price: 2899,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '171',
        image: '../assets/img/Home/11.jpg',
        company: 'Strike',
        item_name: `Café Table`,
        original_price: 2985,
        current_price: 1868,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '172',
        image: '../assets/img/Home/12.jpg',
        company: 'Parada',
        item_name: `Linen Queen Duvet Cover Set`,
        original_price: 1500,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
]