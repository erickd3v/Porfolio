require("dotenv").config();
const cloudinary = require("cloudinary").v2;

// console.log(cloudinary.config({cloud_name: process.env.CLOUDINARY_CLOUD_NAME}));

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

const files = [
    // './video/portada.mp4',
];

(async function run() {
    for (const file of files){
        try {
            const result = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload(file, {
                    resource_type: 'video',
                }, (error, result) => {
                    if (error) {
                        reject(error)
                    }
                    resolve(result)
                });
            });
            console.log(`> Video Result: ${result.secure_url}`);
        } catch (error) {
            console.error(error);
        }
    }
})();