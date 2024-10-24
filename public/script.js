document.getElementById('uploadForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const input = document.getElementById('folderInput');
    const files = input.files;

    if (files.length === 0) {
        alert('Please select a folder to upload.');
        return;
    }

    const formData = new FormData();
    // Thêm tất cả các file vào FormData

    for (const file of files) {
        console.log(file.path);
        formData.append('folder', file);
        formData.append('filePaths', file.webkitRelativePath);
    }
    console.log(formData);
    fetch('/upload', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.blob();
    })
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'output.txt';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
});
