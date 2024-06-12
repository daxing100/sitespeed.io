module.exports = async function (context, commands) {
    try {
        // 测试的网站地址
        await commands.navigate("https://xxx");

        // 登录并跳转分类
        await commands.addText.byXpath("develop", '//*[@id="managerName"]/div/div/span/input');
        await commands.addText.byXpath("abcd1234", '//*[@id="password"]/div/div/span/input');

        // 开始测量
        await commands.measure.start("category-manage");
        await commands.click.byXpath('//*[@id="app"]/div/div[3]/div/div/form/div[3]/div/button');
        await commands.wait.byTime(3000); // 增加等待时间以确保页面加载
        await commands.screenshot.take("after");
        await commands.measure.stop(); // 停止测量

        // 导航到演出列表页面
        await commands.measure.start("show-list-navigate");
        await commands.navigate("https://xxx");
        await commands.wait.byTime(3000); // 等待页面加载完成
        await commands.screenshot.take("after-show-list-navigate");
        await commands.measure.stop(); // 停止测量

    } catch (e) {
        console.error('Error during test execution', e);
        throw e;
    }
};
