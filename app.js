const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/product'){
        res.setHeader('Content-Type','text/html');
        res.end();
    }else{
        res.setHeader('Content-Type','text/html');
        res.write("<html>");
        res.write("<body>");
            res.write("<h1>tuan</h1>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    }

    console.log("chạy thành công");
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server running post ${PORT}`);
}) 