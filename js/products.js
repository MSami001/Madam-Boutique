function getId() {
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id')
    return id;

}

let trainerData = [{

    // Khaddi

    id: 1,
    name: "Khaddi Elegant Dress",
    price: "$150",
    details: "Experience elegance with the Khaddi Elegant Dress, adorned in a sophisticated pattern. This timeless dress seamlessly blends style and comfort. An affordable luxury piece for those who appreciate both fashion and practicality.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K1.webp",
    imgSrc2: "../assets/Khaadi/K1.1.webp",
    imgSrc3: "../assets/Khaadi/K1.2.webp"
},
{
    id: 2,
    name: "Khaddi Classic Suit",
    price: "$120",
    details: "Step out in style with the Khaddi Classic Suit, a chic outfit in classic monogram. Its classic design and timeless aesthetic make it a versatile choice. An affordable luxury ensemble for those who appreciate refined simplicity.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K2.webp",
    imgSrc2: "../assets/Khaadi/K2.1.webp",
    imgSrc3: "../assets/Khaadi/K2.2.webp"
},
{
    id: 3,
    name: "Khaddi Glamorous Evening Gown",
    price: "$180",
    details: "Add glamour to your evening with the Khaddi Glamorous Evening Gown, a chic gown crafted in elegant fabric. Its sleek design, thoughtful details, and versatile wearability make it a go-to choice for special occasions. An elegant yet accessible piece for the modern fashion enthusiast.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K3.webp",
    imgSrc2: "../assets/Khaadi/K3.1.webp",
    imgSrc3: "../assets/Khaadi/K3.2.webp"
},
{
    id: 4,
    name: "Khaddi Stylish Blouse",
    price: "$80",
    details: "Make a style statement with the Khaddi Stylish Blouse, dressed in iconic patterns. This compact masterpiece seamlessly fuses fashion with everyday usability. An enduring style for those who appreciate luxury in casual wear. An affordable statement piece.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K4.webp",
    imgSrc2: "../assets/Khaadi/K4.1.webp",
    imgSrc3: "../assets/Khaadi/K4.2.webp"
},
{
    id: 5,
    name: "Khaddi Luxe Evening Dress",
    price: "$200",
    details: "Charm with the Khaddi Luxe Evening Dress, a versatile gown that adds a touch of luxury to any special occasion. Its stylish design, exquisite details, and comfortable fit make it a perfect choice for evening events. An accessible luxury essential for the modern woman.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K5.webp",
    imgSrc2: "../assets/Khaadi/K5.1.webp",
    imgSrc3: "../assets/Khaadi/K5.2.webp"
},
{
    id: 6,
    name: "Khaddi Timeless Shirt",
    price: "$90",
    details: "Step into sophistication with the Khaddi Timeless Shirt, a classic shirt dressed in elegant patterns. Its refined elegance, thoughtful design, and enduring style make it a timeless addition to your wardrobe. Luxury made accessible for the modern fashion enthusiast.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K6.webp",
    imgSrc2: "../assets/Khaadi/K6.1.webp",
    imgSrc3: "../assets/Khaadi/K6.2.webp"
},
{
    id: 7,
    name: "Khaddi Artistic Blouse",
    price: "$70",
    details: "The Artistic Blouse by Khaddi effortlessly blends style and comfort. Its unique design, artistic patterns, and quality fabric make it a chic choice for everyday wear. A statement piece that complements your individuality with accessible luxury.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K7.webp",
    imgSrc2: "../assets/Khaadi/K7.1.webp",
    imgSrc3: "../assets/Khaadi/K7.2.webp"
},
{
    id: 8,
    name: "Khaddi Chic Jumpsuit",
    price: "$130",
    details: "Effortless elegance defines the Khaddi Chic Jumpsuit, a jumpsuit in elegant fabric. Its simplicity, stylish appeal, and versatility make it an ideal choice for those who appreciate refined simplicity. Luxury made accessible for the modern fashion enthusiast.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K8.webp",
    imgSrc2: "../assets/Khaadi/K8.1.webp",
    imgSrc3: "../assets/Khaadi/K8.2.webp"
},
{
    id: 9,
    name: "Khaddi Graceful Maxi Dress",
    price: "$110",
    details: "Discover grace with the Khaddi Graceful Maxi Dress, a maxi dress in exquisite patterns. Its flowing silhouette, elegant design, and comfortable fit make it an essential piece for everyday elegance. An affordable luxury choice.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K9.webp",
    imgSrc2: "../assets/Khaadi/K9.1.webp",
    imgSrc3: "../assets/Khaadi/K9.2.webp"
},
{
    id: 10,
    name: "Khaddi Casual Pants",
    price: "$75",
    details: "The Khaddi Casual Pants, an iconic piece in versatile fabric, are the epitome of style and practicality. Their classic design, comfortable fit, and timeless appeal make them a must-have for the modern fashion enthusiast. An accessible luxury for casual wear.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K10.webp",
    imgSrc2: "../assets/Khaadi/K10.1.webp",
    imgSrc3: "../assets/Khaadi/K10.2.webp"
},
{
    id: 11,
    name: "Khaddi Modern Shift Dress",
    price: "$120",
    details: "Add a touch of modern flair to your collection with the Khaddi Modern Shift Dress, a shift dress in contemporary patterns. Its trendy silhouette, vibrant design, and comfortable fit make it a versatile and stylish choice. An affordable luxury piece for the contemporary fashionista.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K11.webp",
    imgSrc2: "../assets/Khaadi/K11.1.webp",
    imgSrc3: "../assets/Khaadi/K11.2.webp"
},
{
    id: 12,
    name: "Khaddi Stylish Skirt",
    price: "$80",
    details: "The Khaddi Stylish Skirt, adorned in iconic patterns, is a stylish masterpiece that seamlessly fuses fashion with practicality. Its enduring style, quality fabric, and just-right size make it a timeless addition to your casual wardrobe. An affordable statement piece.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K12.webp",
    imgSrc2: "../assets/Khaadi/K12.1.webp",
    imgSrc3: "../assets/Khaadi/K12.2.webp"
},
{
    id: 13,
    name: "Khaddi Evening Elegance Gown",
    price: "$180",
    details: "Upgrade your evening look with the Khaddi Evening Elegance Gown, a stylish gown in elegant fabric. Its flowing design, feminine details, and comfortable fit make it a versatile choice for special occasions. An accessible luxury essential for elegant evenings.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K13.webp",
    imgSrc2: "../assets/Khaadi/K13.1.webp",
    imgSrc3: "../assets/Khaadi/K13.2.webp"
},
{
    id: 14,
    name: "Khaddi Petite Dress",
    price: "$120",
    details: "Effortless style meets affordability with the Khaddi Petite Dress, a small dress in elegant fabric. Perfect for everyday elegance, its compact size and classic design make it a versatile choice. An accessible luxury piece for the modern woman.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K14.webp",
    imgSrc2: "../assets/Khaadi/K14.1.webp",
    imgSrc3: "../assets/Khaadi/K14.2.webp"
},
{
    id: 15,
    name: "Khaddi Boho Blouse",
    price: "$90",
    details: "Discover boho chic with the Khaddi Boho Blouse, a blouse in exquisite patterns that combines practicality with timeless elegance. Its relaxed silhouette, quality fabric, and comfortable fit make it an everyday luxury. An affordable statement piece.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K15.webp",
    imgSrc2: "../assets/Khaadi/K15.1.webp",
    imgSrc3: "../assets/Khaadi/K15.2.webp"
},
{
    id: 16,
    name: "Khaddi Compact Dress",
    price: "$110",
    details: "Elevate your look with the Khaddi Compact Dress, a compact dress in contemporary patterns. Its sleek design, versatile use, and iconic print make it a chic addition to any ensemble. An affordable luxury touch.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K16.webp",
    imgSrc2: "../assets/Khaadi/K16.1.webp",
    imgSrc3: "../assets/Khaadi/K16.2.webp"
},
{
    id: 17,
    name: "Khaddi Elegant Maxi Dress",
    price: "$150",
    details: "Step into elegance with the Khaddi Elegant Maxi Dress, a maxi dress in exquisite patterns. Its refined design, thoughtful organization, and enduring style make it a sophisticated piece. Luxury within reach.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K17.webp",
    imgSrc2: "../assets/Khaadi/K17.1.webp",
    imgSrc3: "../assets/Khaadi/K17.2.webp"
},
{
    id: 18,
    name: "Khaddi Stylish Casual Dress",
    price: "$120",
    details: "Experience style with the Khaddi Stylish Casual Dress, a casual dress in elegant fabric. Its ample style, classic design, and comfortable fit make it a stylish yet practical choice. An accessible statement piece.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K18.webp",
    imgSrc2: "../assets/Khaadi/K18.1.webp",
    imgSrc3: "../assets/Khaadi/K18.2.webp"
},
{
    id: 19,
    name: "Khaddi Fashionable Top",
    price: "$80",
    details: "Charm with the Khaddi Fashionable Top, a versatile top in sophisticated patterns, ideal for adding a touch of luxury to any outfit. Its versatile design, sleek silhouette, and comfortable fit make it a must-have. An affordable luxury essential.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K19.webp",
    imgSrc2: "../assets/Khaadi/K19.1.webp",
    imgSrc3: "../assets/Khaadi/K19.2.webp"
},
{
    id: 20,
    name: "Khaddi Statement Blouse",
    price: "$70",
    details: "Make a statement with the Khaddi Statement Blouse, a versatile blouse in contemporary patterns that complements any look. Its unique design, iconic print, and comfortable fit make it a chic addition to your collection. An affordable luxury touch.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K20.webp",
    imgSrc2: "../assets/Khaadi/K20.1.webp",
    imgSrc3: "../assets/Khaadi/K20.2.webp"
},
{
    id: 21,
    name: "Khaddi Floral Bliss Dress",
    price: "$180",
    details: "Immerse yourself in floral bliss with the Khaddi Floral Bliss Dress, featuring a captivating floral pattern. This timeless dress effortlessly combines elegance and comfort, providing an affordable luxury option for those who value both style and functionality.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K21.webp",
    imgSrc2: "../assets/Khaadi/K21.1.webp",
    imgSrc3: "../assets/Khaadi/K21.2.webp"
},
{
    id: 22,
    name: "Khaddi Signature Jumpsuit",
    price: "$150",
    details: "Make a daring statement with the Khaddi Signature Jumpsuit, a chic ensemble showcasing Khaddi's signature monogram. Its modern design and timeless allure make it a versatile choice, offering an affordable luxury outfit for those who appreciate refined simplicity.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K22.webp",
    imgSrc2: "../assets/Khaadi/K22.1.webp",
    imgSrc3: "../assets/Khaadi/K22.2.webp"
},
{
    id: 23,
    name: "Khaddi Glamorous Evening Gown",
    price: "$220",
    details: "Elevate your evenings with the Khaddi Glamorous Evening Gown, a breathtaking gown crafted in luxurious fabric. Its sleek design, intricate details, and versatile wearability make it a go-to option for special occasions. An elegant yet accessible piece for the modern fashion enthusiast.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K23.webp",
    imgSrc2: "../assets/Khaadi/K23.1.webp",
    imgSrc3: "../assets/Khaadi/K23.2.webp"
},
{
    id: 24,
    name: "Khaddi Luxe Casual Dress",
    price: "$130",
    details: "Experience luxury in everyday wear with the Khaddi Luxe Casual Dress, a casual dress designed with sophistication in mind. Its relaxed silhouette, refined design, and comfortable fit make it a versatile addition to any wardrobe. An accessible luxury choice for the modern woman.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K24.webp",
    imgSrc2: "../assets/Khaadi/K24.1.webp",
    imgSrc3: "../assets/Khaadi/K24.2.webp"
},

{
    id: 25,
    name: "Khaddi Luxe Evening Dress",
    price: "$250",
    details: "Radiate charm with the Khaddi Luxe Evening Dress, a versatile gown that adds a touch of luxury to any special occasion. Its stylish design, exquisite details, and comfortable fit make it a perfect choice for evening events. An accessible luxury essential for the modern woman.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K25.webp",
    imgSrc2: "../assets/Khaadi/K25.1.webp",
    imgSrc3: "../assets/Khaadi/K25.2.webp"
},
{
    id: 26,
    name: "Khaddi Timeless Shirt",
    price: "$120",
    details: "Step into sophistication with the Khaddi Timeless Shirt, a classic shirt dressed in elegant patterns. Its refined elegance, thoughtful design, and enduring style make it a timeless addition to your wardrobe. Luxury made accessible for the modern fashion enthusiast.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K26.webp",
    imgSrc2: "../assets/Khaadi/K26.1.webp",
    imgSrc3: "../assets/Khaadi/K26.2.webp"
},
{
    id: 27,
    name: "Khaddi Artistic Blouse",
    price: "$100",
    details: "The Artistic Blouse by Khaddi effortlessly blends style and comfort. Its unique design, artistic patterns, and quality fabric make it a chic choice for everyday wear. A statement piece that complements your individuality with accessible luxury.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K27.webp",
    imgSrc2: "../assets/Khaadi/K27.1.webp",
    imgSrc3: "../assets/Khaadi/K27.2.webp"
},
{
    id: 28,
    name: "Khaddi Chic Jumpsuit",
    price: "$170",
    details: "Effortless elegance defines the Khaddi Chic Jumpsuit, a jumpsuit in elegant fabric. Its simplicity, stylish appeal, and versatility make it an ideal choice for those who appreciate refined simplicity. Luxury made accessible for the modern fashion enthusiast.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K28.webp",
    imgSrc2: "../assets/Khaadi/K28.1.webp",
    imgSrc3: "../assets/Khaadi/K28.2.webp"
},
{
    id: 29,
    name: "Khaddi Graceful Maxi Dress",
    price: "$140",
    details: "Discover grace with the Khaddi Graceful Maxi Dress, a maxi dress in exquisite patterns. Its flowing silhouette, elegant design, and comfortable fit make it an essential piece for everyday elegance. An affordable luxury choice.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K29.webp",
    imgSrc2: "../assets/Khaadi/K29.1.webp",
    imgSrc3: "../assets/Khaadi/K29.2.webp"
},
{
    id: 30,
    name: "Khaddi Casual Pants",
    price: "$95",
    details: "The Khaddi Casual Pants, an iconic piece in versatile fabric, are the epitome of style and practicality. Their classic design, comfortable fit, and timeless appeal make them a must-have for the modern fashion enthusiast. An accessible luxury for casual wear.",
    brand: "Khaddi",
    imgSrc: "../assets/Khaadi/K30.webp",
    imgSrc2: "../assets/Khaadi/K30.1.webp",
    imgSrc3: "../assets/Khaadi/K30.2.webp"
},
//Limelight

{
    id: 31,
    name: "Limelight Modern Shift Dress",
    price: "$130",
    details: "Add a touch of modern flair to your collection with the Limelight Modern Shift Dress, a shift dress in contemporary patterns. Its trendy silhouette, vibrant design, and comfortable fit make it a versatile and stylish choice. An affordable luxury piece for the contemporary fashionista.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L1.webp",
    imgSrc2: "../assets/Limelight/L1.1.webp",
    imgSrc3: "../assets/Limelight/L1.2.webp"
},
{
    id: 32,
    name: "Limelight Stylish Skirt",
    price: "$95",
    details: "The Limelight Stylish Skirt, adorned in iconic patterns, is a stylish masterpiece that seamlessly fuses fashion with practicality. Its enduring style, quality fabric, and just-right size make it a timeless addition to your casual wardrobe. An affordable statement piece.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L2.webp",
    imgSrc2: "../assets/Limelight/L2.1.webp",
    imgSrc3: "../assets/Limelight/L2.2.webp"
},
{
    id: 33,
    name: "Limelight Evening Elegance Gown",
    price: "$210",
    details: "Upgrade your evening look with the Limelight Evening Elegance Gown, a stylish gown in elegant fabric. Its flowing design, feminine details, and comfortable fit make it a versatile choice for special occasions. An accessible luxury essential for elegant evenings.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L3.webp",
    imgSrc2: "../assets/Limelight/L3.1.webp",
    imgSrc3: "../assets/Limelight/L3.2.webp"
},
{
    id: 34,
    name: "Limelight Petite Dress",
    price: "$130",
    details: "Effortless style meets affordability with the Limelight Petite Dress, a small dress in elegant fabric. Perfect for everyday elegance, its compact size and classic design make it a versatile choice. An accessible luxury piece for the modern woman.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L4.webp",
    imgSrc2: "../assets/Limelight/L4.1.webp",
    imgSrc3: "../assets/Limelight/L4.2.webp"
},
{
    id: 35,
    name: "Limelight Boho Blouse",
    price: "$95",
    details: "Discover boho chic with the Limelight Boho Blouse, a blouse in exquisite patterns that combines practicality with timeless elegance. Its relaxed silhouette, quality fabric, and comfortable fit make it an everyday luxury. An affordable statement piece.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L5.webp",
    imgSrc2: "../assets/Limelight/L5.1.webp",
    imgSrc3: "../assets/Limelight/L5.2.webp"
},
{
    id: 36,
    name: "Limelight Compact Dress",
    price: "$120",
    details: "Elevate your look with the Limelight Compact Dress, a compact dress in contemporary patterns. Its sleek design, versatile use, and iconic print make it a chic addition to any ensemble. An affordable luxury touch.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L6.webp",
    imgSrc2: "../assets/Limelight/L6.1.webp",
    imgSrc3: "../assets/Limelight/L6.2.webp"
},
{
    id: 37,
    name: "Limelight Elegant Maxi Dress",
    price: "$160",
    details: "Step into elegance with the Limelight Elegant Maxi Dress, a maxi dress in exquisite patterns. Its refined design, thoughtful organization, and enduring style make it a sophisticated piece. Luxury within reach.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L7.webp",
    imgSrc2: "../assets/Limelight/L7.1.webp",
    imgSrc3: "../assets/Limelight/L7.2.webp"
},
{
    id: 38,
    name: "Limelight Stylish Casual Dress",
    price: "$140",
    details: "Experience style with the Limelight Stylish Casual Dress, a casual dress in elegant fabric. Its ample style, classic design, and comfortable fit make it a stylish yet practical choice. An accessible statement piece.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L8.webp",
    imgSrc2: "../assets/Limelight/L8.1.webp",
    imgSrc3: "../assets/Limelight/L8.2.webp"
},
{
    id: 39,
    name: "Limelight Fashionable Top",
    price: "$85",
    details: "Charm with the Limelight Fashionable Top, a versatile top in sophisticated patterns, ideal for adding a touch of luxury to any outfit. Its versatile design, sleek silhouette, and comfortable fit make it a must-have. An affordable luxury essential.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L9.webp",
    imgSrc2: "../assets/Limelight/L9.1.webp",
    imgSrc3: "../assets/Limelight/L9.2.webp"
},
{
    id: 40,
    name: "Limelight Statement Blouse",
    price: "$75",
    details: "Make a statement with the Limelight Statement Blouse, a versatile blouse in contemporary patterns that complements any look. Its unique design, iconic print, and comfortable fit make it a chic addition to your collection. An affordable luxury touch.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L10.webp",
    imgSrc2: "../assets/Limelight/L10.1.webp",
    imgSrc3: "../assets/Limelight/L10.2.webp"
},
{
    id: 41,
    name: "Limelight Elegant Dress",
    price: "$180",
    details: "Experience elegance with the Limelight Elegant Dress, adorned in a sophisticated pattern. This timeless dress seamlessly blends style and comfort. An affordable luxury piece for those who appreciate both fashion and practicality.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L11.webp",
    imgSrc2: "../assets/Limelight/L11.1.webp",
    imgSrc3: "../assets/Limelight/L11.2.webp"
},
{
    id: 42,
    name: "Limelight Classic Suit",
    price: "$150",
    details: "Step out in style with the Limelight Classic Suit, a chic outfit in classic monogram. Its classic design and timeless aesthetic make it a versatile choice. An affordable luxury ensemble for those who appreciate refined simplicity.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L12.webp",
    imgSrc2: "../assets/Limelight/L12.1.webp",
    imgSrc3: "../assets/Limelight/L12.2.webp"
},
{
    id: 43,
    name: "Limelight Glamorous Evening Gown",
    price: "$190",
    details: "Add glamour to your evening with the Limelight Glamorous Evening Gown, a chic gown crafted in elegant fabric. Its sleek design, thoughtful details, and versatile wearability make it a go-to choice for special occasions. An elegant yet accessible piece for the modern fashion enthusiast.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L13.jpg",
    imgSrc2: "../assets/Limelight/L13.1.jpg",
    imgSrc3: "../assets/Limelight/L13.2.jpg"
},
{
    id: 44,
    name: "Limelight Stylish Blouse",
    price: "$85",
    details: "Make a style statement with the Limelight Stylish Blouse, dressed in iconic patterns. This compact masterpiece seamlessly fuses fashion with everyday usability. An enduring style for those who appreciate luxury in casual wear. An affordable statement piece.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L14.webp",
    imgSrc2: "../assets/Limelight/L14.1.webp",
    imgSrc3: "../assets/Limelight/L14.2.webp"
},
{
    id: 45,
    name: "Limelight Luxe Evening Dress",
    price: "$210",
    details: "Charm with the Limelight Luxe Evening Dress, a versatile gown that adds a touch of luxury to any special occasion. Its stylish design, exquisite details, and comfortable fit make it a perfect choice for evening events. An accessible luxury essential for the modern woman.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L15.webp",
    imgSrc2: "../assets/Limelight/L15.1.webp",
    imgSrc3: "../assets/Limelight/L15.2.webp"
},
{
    id: 46,
    name: "Limelight Timeless Shirt",
    price: "$95",
    details: "Step into sophistication with the Limelight Timeless Shirt, a classic shirt dressed in elegant patterns. Its refined elegance, thoughtful design, and enduring style make it a timeless addition to your wardrobe. Luxury made accessible for the modern fashion enthusiast.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L16.webp",
    imgSrc2: "../assets/Limelight/L16.1.webp",
    imgSrc3: "../assets/Limelight/L16.2.webp"
},
{
    id: 47,
    name: "Limelight Artistic Blouse",
    price: "$75",
    details: "The Artistic Blouse by Limelight effortlessly blends style and comfort. Its unique design, artistic patterns, and quality fabric make it a chic choice for everyday wear. A statement piece that complements your individuality with accessible luxury.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L17.webp",
    imgSrc2: "../assets/Limelight/L17.1.webp",
    imgSrc3: "../assets/Limelight/L17.2.webp"
},
{
    id: 48,
    name: "Limelight Chic Jumpsuit",
    price: "$140",
    details: "Effortless elegance defines the Limelight Chic Jumpsuit, a jumpsuit in elegant fabric. Its simplicity, stylish appeal, and versatility make it an ideal choice for those who appreciate refined simplicity. Luxury made accessible for the modern fashion enthusiast.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L18.webp",
    imgSrc2: "../assets/Limelight/L18.1.webp",
    imgSrc3: "../assets/Limelight/L18.2.webp"
},
{
    id: 49,
    name: "Limelight Graceful Maxi Dress",
    price: "$115",
    details: "Discover grace with the Limelight Graceful Maxi Dress, a maxi dress in exquisite patterns. Its flowing silhouette, elegant design, and comfortable fit make it an essential piece for everyday elegance. An affordable luxury choice.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L19.webp",
    imgSrc2: "../assets/Limelight/L19.1.webp",
    imgSrc3: "../assets/Limelight/L19.2.webp"
},
{
    id: 50,
    name: "Limelight Casual Pants",
    price: "$80",
    details: "The Limelight Casual Pants, an iconic piece in versatile fabric, are the epitome of style and practicality. Their classic design, comfortable fit, and timeless appeal make them a must-have for the modern fashion enthusiast. An accessible luxury for casual wear.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L20.webp",
    imgSrc2: "../assets/Limelight/L20.1.webp",
    imgSrc3: "../assets/Limelight/L20.2.webp"
},
{
    id: 51,
    name: "Limelight Modern Shift Dress",
    price: "$125",
    details: "Add a touch of modern flair to your collection with the Limelight Modern Shift Dress, a shift dress in contemporary patterns. Its trendy silhouette, vibrant design, and comfortable fit make it a versatile and stylish choice. An affordable luxury piece for the contemporary fashionista.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L21.webp",
    imgSrc2: "../assets/Limelight/L21.1.webp",
    imgSrc3: "../assets/Limelight/L21.2.webp"
},
{
    id: 52,
    name: "Limelight Stylish Skirt",
    price: "$90",
    details: "The Limelight Stylish Skirt, adorned in iconic patterns, is a stylish masterpiece that seamlessly fuses fashion with practicality. Its enduring style, quality fabric, and just-right size make it a timeless addition to your casual wardrobe. An affordable statement piece.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L22.webp",
    imgSrc2: "../assets/Limelight/L22.1.webp",
    imgSrc3: "../assets/Limelight/L22.2.webp"
},
{
    id: 53,
    name: "Limelight Evening Elegance Gown",
    price: "$190",
    details: "Upgrade your evening look with the Limelight Evening Elegance Gown, a stylish gown in elegant fabric. Its flowing design, feminine details, and comfortable fit make it a versatile choice for special occasions. An accessible luxury essential for elegant evenings.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L23.webp",
    imgSrc2: "../assets/Limelight/L23.1.webp",
    imgSrc3: "../assets/Limelight/L23.2.webp"
},
{
    id: 54,
    name: "Limelight Petite Dress",
    price: "$120",
    details: "Effortless style meets affordability with the Limelight Petite Dress, a small dress in elegant fabric. Perfect for everyday elegance, its compact size and classic design make it a versatile choice. An accessible luxury piece for the modern woman.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L24.webp",
    imgSrc2: "../assets/Limelight/L24.1.webp",
    imgSrc3: "../assets/Limelight/L24.2.webp"
},
{
    id: 55,
    name: "Limelight Boho Blouse",
    price: "$90",
    details: "Discover boho chic with the Limelight Boho Blouse, a blouse in exquisite patterns that combines practicality with timeless elegance. Its relaxed silhouette, quality fabric, and comfortable fit make it an everyday luxury. An affordable statement piece.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L25.webp",
    imgSrc2: "../assets/Limelight/L25.1.webp",
    imgSrc3: "../assets/Limelight/L25.2.webp"
},
{
    id: 56,
    name: "Limelight Compact Dress",
    price: "$110",
    details: "Elevate your look with the Limelight Compact Dress, a compact dress in contemporary patterns. Its sleek design, versatile use, and iconic print make it a chic addition to any ensemble. An affordable luxury touch.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L26.webp",
    imgSrc2: "../assets/Limelight/L26.1.webp",
    imgSrc3: "../assets/Limelight/L26.2.webp"
},
{
    id: 57,
    name: "Limelight Elegant Maxi Dress",
    price: "$150",
    details: "Step into elegance with the Limelight Elegant Maxi Dress, a maxi dress in exquisite patterns. Its refined design, thoughtful organization, and enduring style make it a sophisticated piece. Luxury within reach.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L27.webp",
    imgSrc2: "../assets/Limelight/L27.1.webp",
    imgSrc3: "../assets/Limelight/L27.2.webp"
},
{
    id: 58,
    name: "Limelight Stylish Casual Dress",
    price: "$120",
    details: "Experience style with the Limelight Stylish Casual Dress, a casual dress in elegant fabric. Its ample style, classic design, and comfortable fit make it a stylish yet practical choice. An accessible statement piece.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L28.webp",
    imgSrc2: "../assets/Limelight/L28.1.webp",
    imgSrc3: "../assets/Limelight/L28.2.webp"
},
{
    id: 59,
    name: "Limelight Fashionable Top",
    price: "$80",
    details: "Charm with the Limelight Fashionable Top, a versatile top in sophisticated patterns, ideal for adding a touch of luxury to any outfit. Its versatile design, sleek silhouette, and comfortable fit make it a must-have. An affordable luxury essential.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L29.webp",
    imgSrc2: "../assets/Limelight/L29.1.webp",
    imgSrc3: "../assets/Limelight/L29.2.webp"
},
{
    id: 60,
    name: "Limelight Statement Blouse",
    price: "$70",
    details: "Make a statement with the Limelight Statement Blouse, a versatile blouse in contemporary patterns that complements any look. Its unique design, iconic print, and comfortable fit make it a chic addition to your collection. An affordable luxury touch.",
    brand: "Limelight",
    imgSrc: "../assets/Limelight/L30.webp",
    imgSrc2: "../assets/Limelight/L30.1.webp",
    imgSrc3: "../assets/Limelight/L30.2.webp"
},

// Sana Safinaz


{
    id: 61,
    name: "Sana Safinaz Elegant Dress",
    price: "$160",
    details: "Indulge in elegance with the Sana Safinaz Elegant Dress, adorned in a sophisticated pattern. This timeless dress seamlessly blends style and comfort. An affordable luxury piece for those who appreciate both fashion and practicality.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S1.webp",
    imgSrc2: "../assets/Sanasafinaz/S1.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S1.2.webp"
},
{
    id: 62,
    name: "Sana Safinaz Classic Suit",
    price: "$130",
    details: "Step out in style with the Sana Safinaz Classic Suit, a chic outfit in classic monogram. Its classic design and timeless aesthetic make it a versatile choice. An affordable luxury ensemble for those who appreciate refined simplicity.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S2.webp",
    imgSrc2: "../assets/Sanasafinaz/S2.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S2.2.webp"
},
{
    id: 63,
    name: "Sana Safinaz Glamorous Evening Gown",
    price: "$190",
    details: "Add glamour to your evening with the Sana Safinaz Glamorous Evening Gown, a chic gown crafted in elegant fabric. Its sleek design, thoughtful details, and versatile wearability make it a go-to choice for special occasions. An elegant yet accessible piece for the modern fashion enthusiast.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S3.webp",
    imgSrc2: "../assets/Sanasafinaz/S3.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S3.2.webp"
},
{
    id: 64,
    name: "Sana Safinaz Stylish Blouse",
    price: "$85",
    details: "Charm with the Sana Safinaz Stylish Blouse, dressed in iconic patterns. This compact masterpiece seamlessly fuses fashion with everyday usability. An enduring style for those who appreciate luxury in casual wear. An affordable statement piece.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S4.webp",
    imgSrc2: "../assets/Sanasafinaz/S4.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S4.2.webp"
},
{
    id: 65,
    name: "Sana Safinaz Luxe Evening Dress",
    price: "$210",
    details: "Step into luxury with the Sana Safinaz Luxe Evening Dress, a versatile gown that adds a touch of opulence to any special occasion. Its stylish design, exquisite details, and comfortable fit make it a perfect choice for evening events. An accessible luxury essential for the modern woman.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S5.webp",
    imgSrc2: "../assets/Sanasafinaz/S5.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S5.2.webp"
},
{
    id: 66,
    name: "Sana Safinaz Timeless Shirt",
    price: "$95",
    details: "Experience sophistication with the Sana Safinaz Timeless Shirt, a classic shirt dressed in elegant patterns. Its refined elegance, thoughtful design, and enduring style make it a timeless addition to your wardrobe. Luxury made accessible for the modern fashion enthusiast.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S6.webp",
    imgSrc2: "../assets/Sanasafinaz/S6.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S6.2.webp"
},
{
    id: 67,
    name: "Sana Safinaz Artistic Blouse",
    price: "$75",
    details: "The Artistic Blouse by Sana Safinaz effortlessly blends style and comfort. Its unique design, artistic patterns, and quality fabric make it a chic choice for everyday wear. A statement piece that complements your individuality with accessible luxury.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S7.webp",
    imgSrc2: "../assets/Sanasafinaz/S7.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S7.2.webp"
},
{
    id: 68,
    name: "Sana Safinaz Chic Jumpsuit",
    price: "$140",
    details: "Effortless elegance defines the Sana Safinaz Chic Jumpsuit, a jumpsuit in elegant fabric. Its simplicity, stylish appeal, and versatility make it an ideal choice for those who appreciate refined simplicity. Luxury made accessible for the modern fashion enthusiast.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S8.webp",
    imgSrc2: "../assets/Sanasafinaz/S8.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S8.2.webp"
},
{
    id: 69,
    name: "Sana Safinaz Graceful Maxi Dress",
    price: "$115",
    details: "Discover grace with the Sana Safinaz Graceful Maxi Dress, a maxi dress in exquisite patterns. Its flowing silhouette, elegant design, and comfortable fit make it an essential piece for everyday elegance. An affordable luxury choice.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S9.webp",
    imgSrc2: "../assets/Sanasafinaz/S9.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S9.2.webp"
},
{
    id: 70,
    name: "Sana Safinaz Casual Pants",
    price: "$80",
    details: "The Sana Safinaz Casual Pants, an iconic piece in versatile fabric, epitomize style and practicality. Their classic design, comfortable fit, and timeless appeal make them a must-have for the modern fashion enthusiast. An accessible luxury for casual wear.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S10.webp",
    imgSrc2: "../assets/Sanasafinaz/S10.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S10.2.webp"
},
{
    id: 71,
    name: "Sana Safinaz Modern Shift Dress",
    price: "$125",
    details: "Add a touch of modern flair to your collection with the Sana Safinaz Modern Shift Dress, a shift dress in contemporary patterns. Its trendy silhouette, vibrant design, and comfortable fit make it a versatile and stylish choice. An affordable luxury piece for the contemporary fashionista.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S11.webp",
    imgSrc2: "../assets/Sanasafinaz/S11.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S11.2.webp"
},
{
    id: 72,
    name: "Sana Safinaz Stylish Skirt",
    price: "$90",
    details: "The Sana Safinaz Stylish Skirt, adorned in iconic patterns, is a stylish masterpiece that seamlessly fuses fashion with practicality. Its enduring style, quality fabric, and just-right size make it a timeless addition to your casual wardrobe. An affordable statement piece.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S12.webp",
    imgSrc2: "../assets/Sanasafinaz/S12.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S12.2.webp"
},
{
    id: 73,
    name: "Sana Safinaz Evening Elegance Gown",
    price: "$190",
    details: "Upgrade your evening look with the Sana Safinaz Evening Elegance Gown, a stylish gown in elegant fabric. Its flowing design, feminine details, and comfortable fit make it a versatile choice for special occasions. An accessible luxury essential for elegant evenings.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S13.webp",
    imgSrc2: "../assets/Sanasafinaz/S13.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S13.2.webp"
},
{
    id: 74,
    name: "Sana Safinaz Petite Dress",
    price: "$120",
    details: "Effortless style meets affordability with the Sana Safinaz Petite Dress, a small dress in elegant fabric. Perfect for everyday elegance, its compact size and classic design make it a versatile choice. An accessible luxury piece for the modern woman.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S14.webp",
    imgSrc2: "../assets/Sanasafinaz/S14.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S14.2.webp"
},
{
    id: 75,
    name: "Sana Safinaz Boho Blouse",
    price: "$95",
    details: "Discover boho chic with the Sana Safinaz Boho Blouse, a blouse in exquisite patterns that combines practicality with timeless elegance. Its relaxed silhouette, quality fabric, and comfortable fit make it an everyday luxury. An affordable statement piece.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S15.webp",
    imgSrc2: "../assets/Sanasafinaz/S15.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S15.2.webp"
},
{
    id: 76,
    name: "Sana Safinaz Compact Dress",
    price: "$115",
    details: "Elevate your look with the Sana Safinaz Compact Dress, a compact dress in contemporary patterns. Its sleek design, versatile use, and iconic print make it a chic addition to any ensemble. An affordable luxury touch.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S16.webp",
    imgSrc2: "../assets/Sanasafinaz/S16.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S16.2.webp"
},
{
    id: 77,
    name: "Sana Safinaz Elegant Maxi Dress",
    price: "$160",
    details: "Step into elegance with the Sana Safinaz Elegant Maxi Dress, a maxi dress in exquisite patterns. Its refined design, thoughtful organization, and enduring style make it a sophisticated piece. Luxury within reach.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S17.webp",
    imgSrc2: "../assets/Sanasafinaz/S17.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S17.2.webp"
},
{
    id: 78,
    name: "Sana Safinaz Stylish Casual Dress",
    price: "$130",
    details: "Experience style with the Sana Safinaz Stylish Casual Dress, a casual dress in elegant fabric. Its ample style, classic design, and comfortable fit make it a stylish yet practical choice. An accessible statement piece.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S18.webp",
    imgSrc2: "../assets/Sanasafinaz/S18.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S18.2.webp"
},
{
    id: 79,
    name: "Sana Safinaz Fashionable Top",
    price: "$85",
    details: "Charm with the Sana Safinaz Fashionable Top, a versatile top in sophisticated patterns, ideal for adding a touch of luxury to any outfit. Its versatile design, sleek silhouette, and comfortable fit make it a must-have. An affordable luxury essential.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S19.webp",
    imgSrc2: "../assets/Sanasafinaz/S19.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S19.2.webp"
},
{
    id: 80,
    name: "Sana Safinaz Statement Blouse",
    price: "$75",
    details: "Make a statement with the Sana Safinaz Statement Blouse, a versatile blouse in contemporary patterns that complements any look. Its unique design, iconic print, and comfortable fit make it a chic addition to your collection. An affordable luxury touch.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S20.webp",
    imgSrc2: "../assets/Sanasafinaz/S20.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S20.2.webp"
},
{
    id: 81,
    name: "Sana Safinaz Bohemian Maxi Dress",
    price: "$180",
    details: "Embrace the Bohemian spirit with the Sana Safinaz Bohemian Maxi Dress, featuring intricate patterns and a flowing silhouette. This dress exudes free-spirited charm and offers a perfect blend of style and comfort.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S21.webp",
    imgSrc2: "../assets/Sanasafinaz/S21.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S21.2.webp"
},
{
    id: 82,
    name: "Sana Safinaz Casual Elegance Blouse",
    price: "$95",
    details: "Achieve casual elegance with the Sana Safinaz Casual Elegance Blouse, a versatile top adorned with subtle patterns. Its relaxed fit and timeless design make it an ideal choice for various occasions.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S22.webp",
    imgSrc2: "../assets/Sanasafinaz/S22.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S22.2.webp"
},
{
    id: 83,
    name: "Sana Safinaz Modern Tunic",
    price: "$110",
    details: "Step into modernity with the Sana Safinaz Modern Tunic, featuring contemporary patterns and a comfortable fit. This tunic effortlessly combines style and ease for the fashion-forward individual.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S23.webp",
    imgSrc2: "../assets/Sanasafinaz/S23.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S23.2.webp"
},
{
    id: 84,
    name: "Sana Safinaz Urban Chic Jumpsuit",
    price: "$150",
    details: "Explore urban chic with the Sana Safinaz Urban Chic Jumpsuit, a stylish one-piece ensemble designed for the modern city dweller. Its sleek silhouette and fashionable appeal make it a statement piece.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S24.webp",
    imgSrc2: "../assets/Sanasafinaz/S24.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S24.2.webp"
},
{
    id: 85,
    name: "Sana Safinaz Casual Comfort Dress",
    price: "$120",
    details: "Experience casual comfort with the Sana Safinaz Casual Comfort Dress, a laid-back yet stylish dress in comfortable fabric. Perfect for everyday wear, it brings together simplicity and fashion effortlessly.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S25.webp",
    imgSrc2: "../assets/Sanasafinaz/S25.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S25.2.webp"
},
{
    id: 86,
    name: "Sana Safinaz Dynamic Denim Jacket",
    price: "$170",
    details: "Add a dynamic edge to your wardrobe with the Sana Safinaz Dynamic Denim Jacket, featuring a trendy denim design. This jacket is perfect for creating a stylish and versatile look.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S26.webp",
    imgSrc2: "../assets/Sanasafinaz/S26.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S26.2.webp"
},
{
    id: 87,
    name: "Sana Safinaz Boho-Chic Skirt",
    price: "$85",
    details: "Infuse Boho-Chic vibes into your style with the Sana Safinaz Boho-Chic Skirt, adorned with eclectic patterns. This skirt is a playful addition to your wardrobe, offering a blend of comfort and fashion.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S27.webp",
    imgSrc2: "../assets/Sanasafinaz/S27.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S27.2.webp"
},
{
    id: 88,
    name: "Sana Safinaz Floral Fantasy Blouse",
    price: "$100",
    details: "Dive into a floral fantasy with the Sana Safinaz Floral Fantasy Blouse, featuring vibrant floral patterns. This blouse brings a touch of nature-inspired elegance to your ensemble.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S28.webp",
    imgSrc2: "../assets/Sanasafinaz/S28.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S28.2.webp"
},
{
    id: 89,
    name: "Sana Safinaz Sporty Elegance Tracksuit",
    price: "$130",
    details: "Combine sporty and elegant elements with the Sana Safinaz Sporty Elegance Tracksuit, a comfortable yet stylish tracksuit perfect for active days with a touch of sophistication.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S29.webp",
    imgSrc2: "../assets/Sanasafinaz/S29.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S29.2.webp"
},
{
    id: 90,
    name: "Sana Safinaz Polished Pleated Dress",
    price: "$145",
    details: "Achieve a polished look with the Sana Safinaz Polished Pleated Dress, featuring a pleated design for added sophistication. This dress is an ideal choice for various occasions, offering a blend of style and refinement.",
    brand: "Sana Safinaz",
    imgSrc: "../assets/Sanasafinaz/S30.webp",
    imgSrc2: "../assets/Sanasafinaz/S30.1.webp",
    imgSrc3: "../assets/Sanasafinaz/S30.2.webp"
},

// Gul Ahmed

{
    id: 91,
    name: "Gul Ahmed Elegant Shift Dress",
    price: "$130",
    details: "Enhance your wardrobe with the Gul Ahmed Elegant Shift Dress, a shift dress designed for modern sophistication. Its chic silhouette, vibrant patterns, and comfortable fit make it a versatile addition to your collection. An affordable luxury piece for the contemporary fashionista.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G1.webp",
    imgSrc2: "../assets/Gulahmed/G1.1.webp",
    imgSrc3: "../assets/Gulahmed/G1.2.webp"
},
{
    id: 92,
    name: "Gul Ahmed Stylish Skirt",
    price: "$95",
    details: "The Gul Ahmed Stylish Skirt, adorned in iconic patterns, is a stylish masterpiece that seamlessly fuses fashion with practicality. Its enduring style, quality fabric, and just-right size make it a timeless addition to your casual wardrobe. An affordable statement piece.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G2.webp",
    imgSrc2: "../assets/Gulahmed/G2.1.webp",
    imgSrc3: "../assets/Gulahmed/G2.2.webp"
},
{
    id: 93,
    name: "Gul Ahmed Evening Glamour Gown",
    price: "$200",
    details: "Transform your evening look with the Gul Ahmed Evening Glamour Gown, a stylish gown in elegant fabric. Its flowing design, feminine details, and comfortable fit make it a versatile choice for special occasions. An accessible luxury essential for elegant evenings.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G3.webp",
    imgSrc2: "../assets/Gulahmed/G3.1.webp",
    imgSrc3: "../assets/Gulahmed/G3.2.webp"
},
{
    id: 94,
    name: "Gul Ahmed Petite Dress",
    price: "$125",
    details: "Effortless style meets affordability with the Gul Ahmed Petite Dress, a small dress in elegant fabric. Perfect for everyday elegance, its compact size and classic design make it a versatile choice. An accessible luxury piece for the modern woman.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G4.webp",
    imgSrc2: "../assets/Gulahmed/G4.1.webp",
    imgSrc3: "../assets/Gulahmed/G4.2.webp"
},
{
    id: 95,
    name: "Gul Ahmed Boho Chic Blouse",
    price: "$85",
    details: "Explore boho chic with the Gul Ahmed Boho Chic Blouse, a blouse in exquisite patterns that combines practicality with timeless elegance. Its relaxed silhouette, quality fabric, and comfortable fit make it an everyday luxury. An affordable statement piece.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G5.webp",
    imgSrc2: "../assets/Gulahmed/G5.1.webp",
    imgSrc3: "../assets/Gulahmed/G5.2.webp"
},
{
    id: 96,
    name: "Gul Ahmed Compact Dress",
    price: "$110",
    details: "Elevate your look with the Gul Ahmed Compact Dress, a compact dress in contemporary patterns. Its sleek design, versatile use, and iconic print make it a chic addition to any ensemble. An affordable luxury touch.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G6.webp",
    imgSrc2: "../assets/Gulahmed/G6.1.webp",
    imgSrc3: "../assets/Gulahmed/G6.2.webp"
},
{
    id: 97,
    name: "Gul Ahmed Elegant Maxi Dress",
    price: "$155",
    details: "Step into elegance with the Gul Ahmed Elegant Maxi Dress, a maxi dress in exquisite patterns. Its refined design, thoughtful organization, and enduring style make it a sophisticated piece. Luxury within reach.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G7.webp",
    imgSrc2: "../assets/Gulahmed/G7.1.webp",
    imgSrc3: "../assets/Gulahmed/G7.2.webp"
},
{
    id: 98,
    name: "Gul Ahmed Casual Chic Dress",
    price: "$120",
    details: "Experience chic style with the Gul Ahmed Casual Chic Dress, a casual dress in elegant fabric. Its ample style, classic design, and comfortable fit make it a stylish yet practical choice. An accessible statement piece.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G8.webp",
    imgSrc2: "../assets/Gulahmed/G8.1.webp",
    imgSrc3: "../assets/Gulahmed/G8.2.webp"
},
{
    id: 99,
    name: "Gul Ahmed Fashionable Top",
    price: "$80",
    details: "Charm with the Gul Ahmed Fashionable Top, a versatile top in sophisticated patterns, ideal for adding a touch of luxury to any outfit. Its versatile design, sleek silhouette, and comfortable fit make it a must-have. An affordable luxury essential.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G9.webp",
    imgSrc2: "../assets/Gulahmed/G9.1.webp",
    imgSrc3: "../assets/Gulahmed/G9.2.webp"
},
{
    id: 100,
    name: "Gul Ahmed Statement Blouse",
    price: "$70",
    details: "Make a statement with the Gul Ahmed Statement Blouse, a versatile blouse in contemporary patterns that complements any look. Its unique design, iconic print, and comfortable fit make it a chic addition to your collection. An affordable luxury touch.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G10.webp",
    imgSrc2: "../assets/Gulahmed/G10.1.webp",
    imgSrc3: "../assets/Gulahmed/G10.2.webp"
},
{
    id: 101,
    name: "Gul Ahmed Timeless Elegance Gown",
    price: "$220",
    details: "Indulge in timeless elegance with the Gul Ahmed Timeless Elegance Gown, a sophisticated gown crafted in exquisite fabric. Its flowing design, feminine details, and comfortable fit make it a go-to choice for special occasions. An elegant yet accessible piece for the modern fashion enthusiast.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G11.webp",
    imgSrc2: "../assets/Gulahmed/G11.1.webp",
    imgSrc3: "../assets/Gulahmed/G11.2.webp"
},
{
    id: 102,
    name: "Gul Ahmed Classic Day Dress",
    price: "$130",
    details: "Step out in style with the Gul Ahmed Classic Day Dress, a chic dress in classic monogram. Its classic design and timeless aesthetic make it a versatile choice. An affordable luxury ensemble for those who appreciate refined simplicity.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G12.webp",
    imgSrc2: "../assets/Gulahmed/G12.1.webp",
    imgSrc3: "../assets/Gulahmed/G12.2.webp"
},
{
    id: 103,
    name: "Gul Ahmed Glamorous Maxi Dress",
    price: "$185",
    details: "Add glamour to your wardrobe with the Gul Ahmed Glamorous Maxi Dress, a chic maxi dress crafted in elegant fabric. Its sleek design, thoughtful details, and versatile wearability make it a go-to choice for special occasions. An elegant yet accessible piece for the modern fashion enthusiast.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G13.webp",
    imgSrc2: "../assets/Gulahmed/G13.1.webp",
    imgSrc3: "../assets/Gulahmed/G13.2.webp"
},
{
    id: 104,
    name: "Gul Ahmed Stylish Shirt",
    price: "$90",
    details: "Charm with the Gul Ahmed Stylish Shirt, dressed in iconic patterns. This compact masterpiece seamlessly fuses fashion with everyday usability. An enduring style for those who appreciate luxury in casual wear. An affordable statement piece.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G14.webp",
    imgSrc2: "../assets/Gulahmed/G14.1.webp",
    imgSrc3: "../assets/Gulahmed/G14.2.webp"
},
{
    id: 105,
    name: "Gul Ahmed Luxe Casual Dress",
    price: "$160",
    details: "Step into luxury with the Gul Ahmed Luxe Casual Dress, a versatile dress that adds a touch of opulence to any casual occasion. Its stylish design, exquisite details, and comfortable fit make it a perfect choice for various events. An accessible luxury essential for the modern woman.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G15.webp",
    imgSrc2: "../assets/Gulahmed/G15.1.webp",
    imgSrc3: "../assets/Gulahmed/G15.2.webp"
},
{
    id: 106,
    name: "Gul Ahmed Casual Chic Jumpsuit",
    price: "$170",
    details: "Effortless elegance defines the Gul Ahmed Casual Chic Jumpsuit, a jumpsuit in elegant fabric. Its simplicity, stylish appeal, and versatility make it an ideal choice for those who appreciate refined simplicity. Luxury made accessible for the modern fashion enthusiast.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G16.webp",
    imgSrc2: "../assets/Gulahmed/G16.1.webp",
    imgSrc3: "../assets/Gulahmed/G16.2.webp"
},
{
    id: 107,
    name: "Gul Ahmed Artistic Maxi Dress",
    price: "$195",
    details: "Discover artistry with the Gul Ahmed Artistic Maxi Dress, a maxi dress in exquisite patterns. Its flowing silhouette, artistic design, and comfortable fit make it an essential piece for everyday elegance. An affordable luxury choice.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G17.webp",
    imgSrc2: "../assets/Gulahmed/G17.1.webp",
    imgSrc3: "../assets/Gulahmed/G17.2.webp"
},
{
    id: 108,
    name: "Gul Ahmed Boho-Chic Blouse",
    price: "$80",
    details: "Explore boho chic with the Gul Ahmed Boho-Chic Blouse, a blouse in exquisite patterns that combines practicality with timeless elegance. Its relaxed silhouette, quality fabric, and comfortable fit make it an everyday luxury. An affordable statement piece.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G18.webp",
    imgSrc2: "../assets/Gulahmed/G18.1.webp",
    imgSrc3: "../assets/Gulahmed/G18.2.webp"
},
{
    id: 109,
    name: "Gul Ahmed Compact Maxi Dress",
    price: "$135",
    details: "Elevate your look with the Gul Ahmed Compact Maxi Dress, a compact maxi dress in contemporary patterns. Its sleek design, versatile use, and iconic print make it a chic addition to any ensemble. An affordable luxury touch.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G19.webp",
    imgSrc2: "../assets/Gulahmed/G19.1.webp",
    imgSrc3: "../assets/Gulahmed/G19.2.webp"
},
{
    id: 110,
    name: "Gul Ahmed Stylish Gown",
    price: "$175",
    details: "Experience style with the Gul Ahmed Stylish Gown, a gown in elegant fabric. Its ample style, classic design, and comfortable fit make it a stylish yet practical choice. An accessible statement piece.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G20.webp",
    imgSrc2: "../assets/Gulahmed/G20.1.webp",
    imgSrc3: "../assets/Gulahmed/G20.2.webp"
},
{
    id: 111,
    name: "Gul Ahmed Contemporary Shirt",
    price: "$115",
    details: "Stay contemporary with the Gul Ahmed Contemporary Shirt, a classic shirt dressed in elegant patterns. Its refined elegance, thoughtful design, and enduring style make it a timeless addition to your wardrobe. Luxury made accessible for the modern fashion enthusiast.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G21.webp",
    imgSrc2: "../assets/Gulahmed/G21.1.webp",
    imgSrc3: "../assets/Gulahmed/G21.2.webp"
},
{
    id: 112,
    name: "Gul Ahmed Statement Skirt",
    price: "$90",
    details: "Make a statement with the Gul Ahmed Statement Skirt, adorned in iconic patterns. This stylish masterpiece seamlessly fuses fashion with practicality. Its enduring style, quality fabric, and just-right size make it a timeless addition to your casual wardrobe. An affordable statement piece.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G22.webp",
    imgSrc2: "../assets/Gulahmed/G22.1.webp",
    imgSrc3: "../assets/Gulahmed/G22.2.webp"
},
{
    id: 113,
    name: "Gul Ahmed Bohemian Gown",
    price: "$205",
    details: "Embrace bohemian elegance with the Gul Ahmed Bohemian Gown, a gown in exquisite fabric. Its flowing design, artistic details, and comfortable fit make it a versatile choice for special occasions. An accessible luxury essential for elegant evenings.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G23.webp",
    imgSrc2: "../assets/Gulahmed/G23.1.webp",
    imgSrc3: "../assets/Gulahmed/G23.2.webp"
},
{
    id: 114,
    name: "Gul Ahmed Petite Casual Dress",
    price: "$130",
    details: "Effortless style meets affordability with the Gul Ahmed Petite Casual Dress, a small dress in elegant fabric. Perfect for everyday elegance, its compact size and classic design make it a versatile choice. An accessible luxury piece for the modern woman.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G24.webp",
    imgSrc2: "../assets/Gulahmed/G24.1.webp",
    imgSrc3: "../assets/Gulahmed/G24.2.webp"
},
{
    id: 115,
    name: "Gul Ahmed Vintage Blouse",
    price: "$100",
    details: "Discover vintage charm with the Gul Ahmed Vintage Blouse, a blouse in exquisite patterns that combines practicality with timeless elegance. Its classic silhouette, quality fabric, and comfortable fit make it an everyday luxury. An affordable statement piece.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G25.webp",
    imgSrc2: "../assets/Gulahmed/G25.1.webp",
    imgSrc3: "../assets/Gulahmed/G25.2.webp"
},
{
    id: 116,
    name: "Gul Ahmed Sleek Jumpsuit",
    price: "$155",
    details: "Define sleek elegance with the Gul Ahmed Sleek Jumpsuit, a jumpsuit in elegant fabric. Its minimalist design, stylish appeal, and versatility make it an ideal choice for those who appreciate refined simplicity. Luxury made accessible for the modern fashion enthusiast.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G26.webp",
    imgSrc2: "../assets/Gulahmed/G26.1.webp",
    imgSrc3: "../assets/Gulahmed/G26.2.webp"
},
{
    id: 117,
    name: "Gul Ahmed Casual Maxi Dress",
    price: "$165",
    details: "Step into casual elegance with the Gul Ahmed Casual Maxi Dress, a maxi dress in exquisite patterns. Its relaxed design, thoughtful organization, and enduring style make it a sophisticated yet practical piece. Luxury within reach.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G27.webp",
    imgSrc2: "../assets/Gulahmed/G27.1.webp",
    imgSrc3: "../assets/Gulahmed/G27.2.webp"
},
{
    id: 118,
    name: "Gul Ahmed Stylish Midi Skirt",
    price: "$95",
    details: "The Gul Ahmed Stylish Midi Skirt, adorned in iconic patterns, is a stylish masterpiece that seamlessly fuses fashion with practicality. Its enduring style, quality fabric, and just-right size make it a timeless addition to your casual wardrobe. An affordable statement piece.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G28.webp",
    imgSrc2: "../assets/Gulahmed/G28.1.webp",
    imgSrc3: "../assets/Gulahmed/G28.2.webp"
},
{
    id: 119,
    name: "Gul Ahmed Elegant Blouse",
    price: "$115",
    details: "Charm with the Gul Ahmed Elegant Blouse, dressed in iconic patterns. This compact masterpiece seamlessly fuses fashion with everyday usability. An enduring style for those who appreciate luxury in casual wear. An affordable statement piece.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G29.webp",
    imgSrc2: "../assets/Gulahmed/G29.1.webp",
    imgSrc3: "../assets/Gulahmed/G29.2.webp"
},
{
    id: 120,
    name: "Gul Ahmed Classic Maxi Gown",
    price: "$190",
    details: "Make a style statement with the Gul Ahmed Classic Maxi Gown, a gown in classic monogram. Its timeless design and aesthetic make it a versatile choice. An affordable luxury ensemble for those who appreciate refined simplicity.",
    brand: "Gul Ahmed",
    imgSrc: "../assets/Gulahmed/G30.webp",
    imgSrc2: "../assets/Gulahmed/G30.1.webp",
    imgSrc3: "../assets/Gulahmed/G30.2.webp"
},

//Bonanza

{
    id: 121,
    name: "Bonanza Chic Midi Dress",
    price: "$140",
    details: "Elevate your style with the Bonanza Chic Midi Dress, a midi dress in contemporary patterns. Its sleek design, versatile use, and iconic print make it a chic addition to any ensemble. An affordable luxury touch.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B1.webp",
    imgSrc2: "../assets/Bonanza/B1.1.webp",
    imgSrc3: "../assets/Bonanza/B1.2.webp"
},
{
    id: 122,
    name: "Bonanza Elegant Casual Skirt",
    price: "$95",
    details: "Charm with the Bonanza Elegant Casual Skirt, adorned in iconic patterns. This stylish masterpiece seamlessly fuses fashion with practicality. Its enduring style, quality fabric, and just-right size make it a timeless addition to your casual wardrobe. An affordable statement piece.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B2.webp",
    imgSrc2: "../assets/Bonanza/B2.1.webp",
    imgSrc3: "../assets/Bonanza/B2.2.webp"
},
{
    id: 123,
    name: "Bonanza Bohemian Maxi Dress",
    price: "$170",
    details: "Embrace bohemian vibes with the Bonanza Bohemian Maxi Dress, a maxi dress in exquisite fabric. Its flowing design, artistic details, and comfortable fit make it a versatile choice for special occasions. An accessible luxury essential for elegant evenings.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B3.webp",
    imgSrc2: "../assets/Bonanza/B3.1.webp",
    imgSrc3: "../assets/Bonanza/B3.2.webp"
},
{
    id: 124,
    name: "Bonanza Petite Blouse",
    price: "$80",
    details: "Effortless style meets affordability with the Bonanza Petite Blouse, a small blouse in elegant fabric. Perfect for everyday elegance, its compact size and classic design make it a versatile choice. An accessible luxury piece for the modern woman.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B4.webp",
    imgSrc2: "../assets/Bonanza/B4.1.webp",
    imgSrc3: "../assets/Bonanza/B4.2.webp"
},
{
    id: 125,
    name: "Bonanza Casual Shirt",
    price: "$100",
    details: "Step into casual elegance with the Bonanza Casual Shirt, a classic shirt in contemporary patterns. Its relaxed design, thoughtful organization, and enduring style make it a sophisticated yet practical piece. Luxury within reach.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B5.webp",
    imgSrc2: "../assets/Bonanza/B5.1.webp",
    imgSrc3: "../assets/Bonanza/B5.2.webp"
},
{
    id: 126,
    name: "Bonanza Timeless Gown",
    price: "$180",
    details: "Indulge in timeless elegance with the Bonanza Timeless Gown, a sophisticated gown crafted in exquisite fabric. Its flowing design, feminine details, and comfortable fit make it a go-to choice for special occasions. An elegant yet accessible piece for the modern fashion enthusiast.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B6.webp",
    imgSrc2: "../assets/Bonanza/B6.1.webp",
    imgSrc3: "../assets/Bonanza/B6.2.webp"
},
{
    id: 127,
    name: "Bonanza Stylish Midi Skirt",
    price: "$120",
    details: "Define sleek elegance with the Bonanza Stylish Midi Skirt, a midi skirt in elegant fabric. Its minimalist design, stylish appeal, and versatility make it an ideal choice for those who appreciate refined simplicity. Luxury made accessible for the modern fashion enthusiast.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B7.webp",
    imgSrc2: "../assets/Bonanza/B7.1.webp",
    imgSrc3: "../assets/Bonanza/B7.2.webp"
},
{
    id: 128,
    name: "Bonanza Glamorous Jumpsuit",
    price: "$160",
    details: "Add glamour to your wardrobe with the Bonanza Glamorous Jumpsuit, a chic jumpsuit crafted in elegant fabric. Its sleek design, thoughtful details, and versatile wearability make it a go-to choice for special occasions. An elegant yet accessible piece for the modern fashion enthusiast.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B8.webp",
    imgSrc2: "../assets/Bonanza/B8.1.webp",
    imgSrc3: "../assets/Bonanza/B8.2.webp"
},
{
    id: 129,
    name: "Bonanza Luxe Maxi Gown",
    price: "$200",
    details: "Make a style statement with the Bonanza Luxe Maxi Gown, a gown in classic monogram. Its timeless design and aesthetic make it a versatile choice. An affordable luxury ensemble for those who appreciate refined simplicity.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B9.webp",
    imgSrc2: "../assets/Bonanza/B9.1.webp",
    imgSrc3: "../assets/Bonanza/B9.2.webp"
},
{
    id: 130,
    name: "Bonanza Casual Day Dress",
    price: "$110",
    details: "Step out in style with the Bonanza Casual Day Dress, a chic dress in classic monogram. Its classic design and timeless aesthetic make it a versatile choice. An affordable luxury ensemble for those who appreciate refined simplicity.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B10.webp",
    imgSrc2: "../assets/Bonanza/B10.1.webp",
    imgSrc3: "../assets/Bonanza/B10.2.webp"
},
{
    id: 131,
    name: "Bonanza Fashionable Skirt",
    price: "$85",
    details: "Charm with the Bonanza Fashionable Skirt, adorned in iconic patterns. This compact masterpiece seamlessly fuses fashion with everyday usability. An enduring style for those who appreciate luxury in casual wear. An affordable statement piece.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B11.webp",
    imgSrc2: "../assets/Bonanza/B11.1.webp",
    imgSrc3: "../assets/Bonanza/B11.2.webp"
},
{
    id: 132,
    name: "Bonanza Stylish Blouse",
    price: "$90",
    details: "Explore style with the Bonanza Stylish Blouse, a versatile blouse in sophisticated patterns. Ideal for adding a touch of luxury to any outfit, its versatile design, sleek silhouette, and comfortable fit make it a must-have. An affordable luxury essential.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B12.webp",
    imgSrc2: "../assets/Bonanza/B12.1.webp",
    imgSrc3: "../assets/Bonanza/B12.2.webp"
},
{
    id: 133,
    name: "Bonanza Statement Jumpsuit",
    price: "$150",
    details: "Make a statement with the Bonanza Statement Jumpsuit, a versatile jumpsuit in contemporary patterns that complements any look. Its unique design, iconic print, and comfortable fit make it a chic addition to your collection. An affordable luxury touch.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B13.webp",
    imgSrc2: "../assets/Bonanza/B13.1.webp",
    imgSrc3: "../assets/Bonanza/B13.2.webp"
},
{
    id: 134,
    name: "Bonanza Boho Maxi Dress",
    price: "$140",
    details: "Discover boho elegance with the Bonanza Boho Maxi Dress, a maxi dress in exquisite patterns. Its relaxed silhouette, quality fabric, and comfortable fit make it an everyday luxury. An affordable statement piece.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B14.webp",
    imgSrc2: "../assets/Bonanza/B14.1.webp",
    imgSrc3: "../assets/Bonanza/B14.2.webp"
},
{
    id: 135,
    name: "Bonanza Casual Chic Blouse",
    price: "$75",
    details: "Effortlessly blend casual and chic with the Bonanza Casual Chic Blouse, a blouse in exquisite patterns that combines practicality with timeless elegance. Its relaxed silhouette, quality fabric, and comfortable fit make it an everyday luxury. An affordable statement piece.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B15.webp",
    imgSrc2: "../assets/Bonanza/B15.1.webp",
    imgSrc3: "../assets/Bonanza/B15.2.webp"
},
{
    id: 136,
    name: "Bonanza Artistic Maxi Dress",
    price: "$190",
    details: "Discover artistry with the Bonanza Artistic Maxi Dress, a maxi dress in exquisite patterns. Its flowing silhouette, artistic design, and comfortable fit make it an essential piece for everyday elegance. An affordable luxury choice.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B16.webp",
    imgSrc2: "../assets/Bonanza/B16.1.webp",
    imgSrc3: "../assets/Bonanza/B16.2.webp"
},
{
    id: 137,
    name: "Bonanza Boho-Chic Skirt",
    price: "$85",
    details: "Explore boho-chic vibes with the Bonanza Boho-Chic Skirt, a skirt in exquisite patterns that combines practicality with timeless elegance. Its flowing silhouette, quality fabric, and comfortable fit make it an everyday luxury. An affordable statement piece.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B17.webp",
    imgSrc2: "../assets/Bonanza/B17.1.webp",
    imgSrc3: "../assets/Bonanza/B17.2.webp"
},
{
    id: 138,
    name: "Bonanza Compact Maxi Gown",
    price: "$130",
    details: "Elevate your look with the Bonanza Compact Maxi Gown, a compact maxi gown in contemporary patterns. Its sleek design, versatile use, and iconic print make it a chic addition to any ensemble. An affordable luxury touch.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B18.webp",
    imgSrc2: "../assets/Bonanza/B18.1.webp",
    imgSrc3: "../assets/Bonanza/B18.2.webp"
},
{
    id: 139,
    name: "Bonanza Stylish Shirt",
    price: "$110",
    details: "Charm with the Bonanza Stylish Shirt, dressed in iconic patterns. This compact masterpiece seamlessly fuses fashion with everyday usability. An enduring style for those who appreciate luxury in casual wear. An affordable statement piece.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B19.webp",
    imgSrc2: "../assets/Bonanza/B19.1.webp",
    imgSrc3: "../assets/Bonanza/B19.2.webp"
},
{
    id: 140,
    name: "Bonanza Luxe Casual Dress",
    price: "$150",
    details: "Step into luxury with the Bonanza Luxe Casual Dress, a versatile dress that adds a touch of opulence to any casual occasion. Its stylish design, exquisite details, and comfortable fit make it a perfect choice for various events. An accessible luxury essential for the modern woman.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B20.webp",
    imgSrc2: "../assets/Bonanza/B20.1.webp",
    imgSrc3: "../assets/Bonanza/B20.2.webp"
},
{
    id: 141,
    name: "Bonanza Casual Elegance Blouse",
    price: "$80",
    details: "Effortlessly blend casual and elegance with the Bonanza Casual Elegance Blouse, a blouse in exquisite patterns that combines practicality with timeless style. Its relaxed silhouette, quality fabric, and comfortable fit make it an everyday luxury. An affordable statement piece.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B21.webp",
    imgSrc2: "../assets/Bonanza/B21.1.webp",
    imgSrc3: "../assets/Bonanza/B21.2.webp"
},
{
    id: 142,
    name: "Bonanza Modern Shift Skirt",
    price: "$95",
    details: "Add a modern flair to your collection with the Bonanza Modern Shift Skirt, a shift skirt in contemporary patterns. Its trendy silhouette, vibrant design, and comfortable fit make it a versatile and stylish choice. An affordable luxury piece for the contemporary fashionista.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B22.webp",
    imgSrc2: "../assets/Bonanza/B22.1.webp",
    imgSrc3: "../assets/Bonanza/B22.2.webp"
},
{
    id: 143,
    name: "Bonanza Timeless Midi Dress",
    price: "$120",
    details: "Indulge in timeless elegance with the Bonanza Timeless Midi Dress, a sophisticated midi dress crafted in exquisite fabric. Its flowing design, feminine details, and comfortable fit make it a go-to choice for special occasions. An elegant yet accessible piece for the modern fashion enthusiast.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B23.jpg",
    imgSrc2: "../assets/Bonanza/B23.1.jpg",
    imgSrc3: "../assets/Bonanza/B23.2.jpg"
},
{
    id: 144,
    name: "Bonanza Boho-Chic Maxi Gown",
    price: "$160",
    details: "Embrace boho-chic vibes with the Bonanza Boho-Chic Maxi Gown, a maxi gown in exquisite patterns. Its flowing silhouette, artistic details, and comfortable fit make it a versatile choice for special occasions. An accessible luxury essential for elegant evenings.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B24.jpg",
    imgSrc2: "../assets/Bonanza/B24.1.jpg",
    imgSrc3: "../assets/Bonanza/B24.2.jpg"
},
{
    id: 145,
    name: "Bonanza Sleek Casual Dress",
    price: "$110",
    details: "Define sleek elegance with the Bonanza Sleek Casual Dress, a casual dress in elegant fabric. Its minimalist design, stylish appeal, and versatility make it an ideal choice for those who appreciate refined simplicity. Luxury made accessible for the modern fashion enthusiast.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B25.webp",
    imgSrc2: "../assets/Bonanza/B25.1.webp",
    imgSrc3: "../assets/Bonanza/B25.2.webp"
},
{
    id: 146,
    name: "Bonanza Stylish Maxi Skirt",
    price: "$130",
    details: "Explore style with the Bonanza Stylish Maxi Skirt, a versatile maxi skirt in sophisticated patterns. Ideal for adding a touch of luxury to any outfit, its versatile design, sleek silhouette, and comfortable fit make it a must-have. An affordable luxury essential.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B26.webp",
    imgSrc2: "../assets/Bonanza/B26.1.webp",
    imgSrc3: "../assets/Bonanza/B26.2.webp"
},
{
    id: 147,
    name: "Bonanza Compact Day Dress",
    price: "$90",
    details: "Step out in style with the Bonanza Compact Day Dress, a chic day dress in classic monogram. Its classic design and timeless aesthetic make it a versatile choice. An affordable luxury ensemble for those who appreciate refined simplicity.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B27.webp",
    imgSrc2: "../assets/Bonanza/B27.1.webp",
    imgSrc3: "../assets/Bonanza/B27.2.webp"
},
{
    id: 148,
    name: "Bonanza Elegant Midi Gown",
    price: "$180",
    details: "Indulge in elegance with the Bonanza Elegant Midi Gown, a midi gown in exquisite fabric. Its refined design, thoughtful organization, and enduring style make it a sophisticated piece. Luxury within reach.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B28.webp",
    imgSrc2: "../assets/Bonanza/B28.1.webp",
    imgSrc3: "../assets/Bonanza/B28.2.webp"
},
{
    id: 149,
    name: "Bonanza Statement Maxi Dress",
    price: "$150",
    details: "Make a statement with the Bonanza Statement Maxi Dress, a versatile maxi dress in contemporary patterns that complements any look. Its unique design, iconic print, and comfortable fit make it a chic addition to your collection. An affordable luxury touch.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B29.webp",
    imgSrc2: "../assets/Bonanza/B29.1.webp",
    imgSrc3: "../assets/Bonanza/B29.2.webp"
},
{
    id: 150,
    name: "Bonanza Vintage Blouse",
    price: "$95",
    details: "Discover vintage charm with the Bonanza Vintage Blouse, a blouse in exquisite patterns that combines practicality with timeless elegance. Its classic silhouette, quality fabric, and comfortable fit make it an everyday luxury. An affordable statement piece.",
    brand: "Bonanza",
    imgSrc: "../assets/Bonanza/B30.jpg",
    imgSrc2: "../assets/Bonanza/B30.1.jpg",
    imgSrc3: "../assets/Bonanza/B30.2.jpg"
},
]


getTrainerData();

function getTrainerData() {

    let id = getId();

    if (id == null) {
        id = 1;
    }

    trainerData.map((item) => {
        if (item.id == id) {
            document.getElementById('name').innerText = item.name;
            document.getElementById('price').innerText = item.price;
            document.getElementById('details').innerText = item.details;
            document.getElementById('productbrand').innerText = item.brand;
            document.getElementById('productImg').src = item.imgSrc;
            document.getElementById('productImg2').src = item.imgSrc2;
            document.getElementById('productImg3').src = item.imgSrc3;

            // document.getElementById('trainerImg').src = item.imgSrc;
            // document.getElementById('specialties-container').innerText = item.specialize;
        }
    })

}