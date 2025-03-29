function fixImagePath(imagePath) {
    const repoName = "Myntra"; // Replace with your actual GitHub repo name
    return `${window.location.origin}/${repoName}/${imagePath}`;
}


const items = [
    {
        id: '001',
        image:fixImagePath('assets/img/Women/10.jpg'),
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
        image: fixImagePath('assets/img/Men/3.jpg'),
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
        image: fixImagePath('assets/img/Beauty/4.jpg'),
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
        image: fixImagePath('assets/img/Women/7.jpg'),
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
        image: fixImagePath('assets/img/Home/3.jpg'),
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
        image: fixImagePath('assets/img/Women/15.jpg'),
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
        image: fixImagePath('assets/img/Beauty/3.jpg'),
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
        image: fixImagePath('assets/img/Men/4..jpg'),
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
        image: fixImagePath('assets/img/Women/14.jpg'),
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
        image: fixImagePath('assets/img/Home/10.jpg'),
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
        image: fixImagePath('assets/img/Beauty/1.jpg'),
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
        image: fixImagePath('assets/img/Men/7.jpg'),
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
        image: fixImagePath('assets/img/Home/8.jpg'),
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
        image: fixImagePath('assets/img/Men/15.jpg'),
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
        image: fixImagePath('assets/img/Women/9.jpg'),
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
        image: fixImagePath('assets/img/Beauty/6.jpg'),
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
        id: '017',
        image: fixImagePath('assets/img/18.jpg'),
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

];
const New = [
    {
        id: '015',
        image: fixImagePath('assets/img/Women/16.jpg'),
        company: 'Carlton London',
        item_name: 'Kaftan dress',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: { stars: 4.5, count: 1400 },
        isold: true,
    },
    {
        id: '00016',
        image: fixImagePath('assets/img/Beauty/016.jpg'),
        company: 'CUKOO',
        item_name: 'Angled Contouring Brush',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: { stars: 4.3, count: 24 },
    },
    {
        id: '017',
        image: fixImagePath('assets/img/Women/18.jpg'),
        company: 'NUEVOSDAMAS',
        item_name: 'Balloon-sleeved shirt dress',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: { stars: 4.1, count: 249 },
    },
    {
        id: '0015',
        image: fixImagePath('assets/img/Women/0015.jpg'),
        company: 'Carlton London',
        item_name: 'Kaftan dress',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: { stars: 4.5, count: 1400 },
    },
    {
        id: '00018',
        image: fixImagePath('assets/img/Beauty/018.jpg'),
        company: 'Sunan',
        item_name: 'Makeup Brush Case',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: { stars: 5.0, count: 10 },
    },
    {
        id: '0016',
        image: fixImagePath('assets/img/Women/0016.jpg'),
        company: 'CUKOO',
        item_name: 'Flounced chiffon dress',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: { stars: 4.3, count: 24 },
    },
    {
        id: '018',
        image: fixImagePath('assets/img/Women/19.jpg'),
        company: 'Sunan',
        item_name: 'Viscose tunic dress',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: { stars: 5.0, count: 10 },
    },
    {
        id: '0018',
        image: fixImagePath('assets/img/Women/0018.jpg'),
        company: 'Sunan',
        item_name: 'Viscose tunic dress',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: { stars: 5.0, count: 10 },
    },
    {
        id: '00015',
        image: fixImagePath('assets/img/Beauty/015.jpg'),
        company: 'Carlton London',
        item_name: '3-pack Mini Lip Glosses',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: { stars: 4.5, count: 1400 },
    },
    {
        id: '016',
        image: fixImagePath('assets/img/Women/17.jpg'),
        company: 'CUKOO',
        item_name: 'Flounced chiffon dress',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: { stars: 4.3, count: 24 },
    },
    {
        id: '00017',
        image: fixImagePath('assets/img/Beauty/017.jpg'),
        company: 'NUEVOSDAMAS',
        item_name: 'Eyeshadow Brush',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: { stars: 4.1, count: 249 },
    },
    {
        id: '0017',
        image: fixImagePath('assets/img/Women/0017.jpg'),
        company: 'NUEVOSDAMAS',
        item_name: 'Balloon-sleeved shirt dress',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: { stars: 4.1, count: 249 },
    },
];

