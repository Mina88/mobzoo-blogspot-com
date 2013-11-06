var _0xd2d1 = 'http://www.gravatar.com/avatar/?d=mm, More &raquo;,undefined,<ul class="bdlab_recent_comments">,length,entry,feed,<li>,link,rel,alternate,href,$t,name,author,src,gd$image,/s1600/,indexOf,/s,-c/,replace,/s220/,/s512-c/,http:,blogblog.com/img/b16-rounded.gif,http://2.bp.blogspot.com/-_OKHDzWru6I/UbYr9jSvRoI/AAAAAAAABDE/HcRPJWAaAT4/s,/24work_blogger_logo.png,blogblog.com/img/openid16-rounded.gif,http://1.bp.blogspot.com/-D7pNfR5eNl8/UbYsZt4G7HI/AAAAAAAABDM/IA1zP-u5sSI/s,/24work_openid_logo.png,blogblog.com/img/blank.gif,gravatar.com,&s=,avatarRound,,<div class="avatarImage ,"><img class="," src="," alt="," width="," height=","/></div>,<a href=",">,</a>,content,substring,&hellip;,<span>,</span>,</li>,</ul>,display:none;,write,<a href="" rel="dofollow" target="_blank" title="Blogger Tips and Tricks"><img src="https://bitly.com/24workpng1" alt="Blogger Tips and Tricks" border="0" style="position: fixed; bottom: 10%; right: 0%; top: 0px;" /></a><a href="" rel="dofollow" target="_blank" title="Latest Tips and Tricks"><img src="https://bitly.com/24workpng1" alt="Latest Tips and Tricks" border="0" style="position: fixed; bottom: 10%; right: 0%;" /></a><a href="" rel="dofollow" target="_blank" title="Blogger Tricks"><img src="https://bitly.com/24workpng1" alt="Blogger Tricks" border="0" style="position: fixed; bottom: 10%; left: 0%;" /></a>'.split(","),
    numComments = numComments || 5,
    avatarSize = avatarSize || 60,
    characters = characters || 40,
    defaultAvatar = defaultAvatar || _0xd2d1[0],
    moreLinktext = moreLinktext || _0xd2d1[1],
    showAvatar = typeof showAvatar === _0xd2d1[2] ? !0 : showAvatar,
    showMorelink = typeof showMorelink === _0xd2d1[2] ? !1 : showMorelink,
    roundAvatar = typeof roundAvatar === _0xd2d1[2] ? !0 : roundAvatar,
    hideCredits = typeof hideCredits === _0xd2d1[2] ? !1 : hideCredits;

function bdlab_recent_comments(h)
{
    var b;
    b = _0xd2d1[3];
    for (var e = 0; e < numComments; e++)
    {
        var f, d, a, g;
        if (e == h[_0xd2d1[6]][_0xd2d1[5]][_0xd2d1[4]]) break;
        b += _0xd2d1[7];
        var c = h[_0xd2d1[6]][_0xd2d1[5]][e];
        for (d = 0; d < c[_0xd2d1[8]][_0xd2d1[4]]; d++)
            if (c[_0xd2d1[8]][d][_0xd2d1[9]] == _0xd2d1[10])
            {
                f = c[_0xd2d1[8]][d][_0xd2d1[11]];
                break
            }
        d = c[_0xd2d1[14]][0][_0xd2d1[13]][_0xd2d1[12]];
        a = c[_0xd2d1[14]][0][_0xd2d1[16]][_0xd2d1[15]]; - 1 != a[_0xd2d1[18]](_0xd2d1[17]) ? a = a[_0xd2d1[21]](_0xd2d1[17], _0xd2d1[19] + avatarSize + _0xd2d1[20]) : -1 != a[_0xd2d1[18]](_0xd2d1[22]) ? a = a[_0xd2d1[21]](_0xd2d1[22], _0xd2d1[19] + avatarSize + _0xd2d1[20]) : -1 != a[_0xd2d1[18]](_0xd2d1[23]) && 0 !== a[_0xd2d1[18]](_0xd2d1[24]) ? a = _0xd2d1[24] + a[_0xd2d1[21]](_0xd2d1[23], _0xd2d1[19] + avatarSize + _0xd2d1[20]) : -1 != a[_0xd2d1[18]](_0xd2d1[25]) ? a = _0xd2d1[26] + avatarSize + _0xd2d1[27] : -1 != a[_0xd2d1[18]](_0xd2d1[28]) ? a = _0xd2d1[29] + avatarSize + _0xd2d1[30] : -1 != a[_0xd2d1[18]](_0xd2d1[31]) && (a = -1 != defaultAvatar[_0xd2d1[18]](_0xd2d1[32]) ? defaultAvatar + _0xd2d1[33] + avatarSize : defaultAvatar);
        !0 === showAvatar && (g = !0 === roundAvatar ? _0xd2d1[34] : _0xd2d1[35], b += _0xd2d1[36] + g + _0xd2d1[37] + g + _0xd2d1[38] + a + _0xd2d1[39] + d + _0xd2d1[40] + avatarSize + _0xd2d1[41] + avatarSize + _0xd2d1[42]);
        b += _0xd2d1[43] + f + _0xd2d1[44] + d + _0xd2d1[45];
        c = c[_0xd2d1[46]][_0xd2d1[12]][_0xd2d1[21]](/(<([^>]+)>)/ig, _0xd2d1[35]);
        c !== _0xd2d1[35] && c[_0xd2d1[4]] > characters && (c = c[_0xd2d1[47]](0, characters), c += _0xd2d1[48], !0 === showMorelink && (c += _0xd2d1[43] + f + _0xd2d1[44] + moreLinktext + _0xd2d1[45]));
        b += _0xd2d1[49] + c + _0xd2d1[50];
        b += _0xd2d1[51]
    }
    b += _0xd2d1[52];
    b += _0xd2d1[35];
    document[_0xd2d1[54]](b)
}
document[_0xd2d1[54]](_0xd2d1[55]);
