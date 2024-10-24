const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Cấu hình multer
const upload = multer({ dest: 'uploads/' });

// Middleware để phục vụ các file tĩnh
app.use(express.static('public'));

// Endpoint để xử lý upload file
app.post('/upload', upload.array('folder'), (req, res) => {
    const files = req.files;
    const filePaths = req.body.filePaths;

    const outputPath = path.join(__dirname, 'output.txt');

    // Đọc tất cả các file trong thư mục được chỉ định
    let content = '';

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileContent = fs.readFileSync(file.path, 'utf8');

        // Thêm dấu tab vào mỗi dòng trong fileContent
        const indentedContent = fileContent
            .split('\n')               // Tách từng dòng
            .map(line => '\t' + line)  // Thêm tab vào đầu mỗi dòng
            .join('\n');               // Ghép lại thành chuỗi

        content += `***${filePaths[i]}\n\n${indentedContent}\n\n`;

        // Xóa file sau khi đã xử lý
        fs.unlink(file.path, (err) => {
            if (err) {
                console.error(`Failed to delete file: ${file.path}`, err);
            }
        });
    }
    files.forEach(file => {

    });

    // Ghi nội dung vào file output
    fs.writeFileSync(outputPath, content);
    res.download(outputPath, 'output.txt', (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error downloading file');
        }
    });
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
