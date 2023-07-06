require("dotenv").config();
const cloudinary = require("cloudinary").v2;

// console.log(cloudinary.config({cloud_name: process.env.CLOUDINARY_CLOUD_NAME}));

console.log(cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
}))


const images = [
    // './images/perfil.jpg',
    // './images/Captura1.PNG',
    // './images/desarrollo-Front-end.jpg',
    // './images/Projects/Project-1.jpg',
    // './images/Projects/Project-2.jpg',
    // './images/Projects/Project-3.jpg',
];

(async function run() {
    for (const image of images) {
        try {
            const result = await cloudinary.uploader.upload(image)
            console.log(`> Image Result: ${result.secure_url}`);
        } catch(error) {
            console.error(error);
        }
    }
})();
