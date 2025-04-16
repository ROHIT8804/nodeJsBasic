
const path = require('path');

const res = path.basename('/foo/bar/baz/asdf/quux.html');
// console.log(res); // Returns 'quux.html'

const absolutePath = path.resolve('src', 'images', '../assets');
// console.log(absolutePath);

// console.log(path.extname('index.html')); // Returns '.html'

const parsePath = path.parse('/home/user/dir/file.txt');
// console.log(parsePath);

const formatePath = path.format({
    root: '/',
    dir: '/home/user/dir',
    base: 'file.txt',
    ext: '.txt',
    name: 'file'
});
// console.log(formatePath);


const fs = require('fs');

function handleUpload(filename) {
    // Create safe upload path
    const uploadDir = path.join(__dirname, 'uploads');
    
    // Ensure filename is safe and prevent directory traversal
    const sanitizedFilename = path.basename(filename); // Extract only the base name
    const filePath = path.join(uploadDir, sanitizedFilename);
    
    // Validate extension
    const allowedExt = ['.jpg', '.png'];
    const ext = path.extname(sanitizedFilename);
    
    if (!allowedExt.includes(ext)) {
        throw new Error('Invalid file type');
    }
  
    // Create directory structure
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
    }
  
    return {
        directory: uploadDir,
        filename: sanitizedFilename,
        fullPath: filePath
    };
}

// Example usage
console.log(handleUpload('images/photo.jpg'));