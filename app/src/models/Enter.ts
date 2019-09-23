const puppeteer = require('puppeteer');

const Pupperteer = {
    async fetch() {
        try{
            // 创建一个浏览器实例 Browser 对象
            let browser = await puppeteer.launch({
                // 是否不显示浏览器， 为true则不显示
                'headless': true,
                args: [
                    '--proxy-server=socks5://127.0.0.1:1080'
                ]
            });
            // 通过浏览器实例 Browser 对象创建页面 Page 对象
            let page = await browser.newPage();
            // 设置浏览器信息
            const UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/63.0.3239.84 Chrome/63.0.3239.84 Safari/537.36";
            await Promise.all([
                page.setUserAgent(UA),
                // 允许运行js
                page.setJavaScriptEnabled(true),
                // 设置页面视口的大小
            ]);
            // 地址
            let chapter_list_url = `http://book.km.com/chapterlist/1358572.html`
            // 打开章节列表
            await page.goto(chapter_list_url);
            // 使用css选择器的方式
            let content= await page.$eval('#xtopjsinfo > div.wrapper > div.container > div.catalog > div.catalog_bd', (el: any) => {
                return el.innerText
            });
            console.log(content, 1111111111111111111111111111)
            return JSON.stringify(content)
        }catch(err){
            console.log(err)
            return err
        }
    }
};


export default Pupperteer





