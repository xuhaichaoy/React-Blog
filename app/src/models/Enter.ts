const puppeteer = require('puppeteer');

const Pupperteer = {
    async fetch() {
        try {
            // 创建一个浏览器实例 Browser 对象
            let browser = await puppeteer.launch({
                // 是否不显示浏览器， 为true则不显示
                'headless': true,
                args: [
                    '--proxy-server="direct://"',
                    '--proxy-bypass-list=*'
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
            let chapter_list_url = `https://www.bqg5200.com/all.html`
            // 打开章节列表
            await page.goto(chapter_list_url);
            let content = await page.$eval('#main .listlie', (el: any) => {
                const body = document.querySelectorAll('#main .listlie ul li')
                let arr = []
                for (var i = 0; i < body.length; i++) {
                    let obj = {
                        title: body[i].childNodes[0].innerText,
                        href: body[i].childNodes[0].href,
                        achour: body[i].innerText
                    }
                    arr.push(obj)
                }
                return arr
            });
            return JSON.parse(JSON.stringify(content))
        } catch (err) {
            console.log(err)
            return err
        }
    }
};


export default Pupperteer





