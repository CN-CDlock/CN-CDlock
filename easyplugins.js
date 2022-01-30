let sur_description = '将自己设置为生存模式';
mc.regPlayerCmd('sur', function () {
    if (typeof sur_description == "undefined") {
        return "未定义描述";
    } else { return sur_description; }
}(), function (player, args) {
    mc.getPlayer((player.xuid)).addTag("sur");
    mc.runcmdEx('gamemode 0 @a[tag=sur]');
        mc.runcmdEx('tag @a remove sur');
        mc.getPlayer((player.xuid)).sendText('命令执行成功.', 0);

});
let die_description = '自杀';
mc.regPlayerCmd('die', function () {
    if (typeof die_description == "undefined") {
        return "未定义描述";
    } else {
        return die_description;
    }
}(), function (player, args) {
        mc.getPlayer((player.xuid)).hurt(9999);
        mc.getPlayer((player.xuid)).sendText('命令执行成功.', 0);
});
let rmbag_description = '清除背包';
mc.regPlayerCmd('rmbag', function () {
    if (typeof rmbag_description == "undefined")
    {
        return "未定义描述";
    } else { return rmbag_description; }
}(), function (player, args) {
    mc.getPlayer((player.xuid)).addTag("clearbag");
    mc.runcmdEx('clear @a[tag=clearbag]');
        mc.runcmdEx('tag @a remove clearbag');
        mc.getPlayer((player.xuid)).sendText('命令执行成功.', 0);
});
let back_description = '回到重生点';
mc.regPlayerCmd('return', function () {
    if (typeof return_description == "undefined") {
        return "未定义描述";
    } else {
        return return_description;
    }
}(), function (player, args) {
        mc.getPlayer((player.xuid)).teleport((mc.getPlayer((player.xuid)).getRespawnPosition()));
        mc.getPlayer((player.xuid)).sendText('命令执行成功.', 0);
});
/*该插件非常简单，非常简单，供参考.作者q:2154206986*/