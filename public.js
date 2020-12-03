const func = $ => {
    $("ytd-playlist-video-renderer.style-scope:nth-child(1) > div:nth-child(2) > div:nth-child(3) > ytd-menu-renderer:nth-child(1) > yt-icon-button:nth-child(2) > button:nth-child(1) > yt-icon:nth-child(1)").click();
    $("ytd-menu-service-item-renderer.style-scope:nth-child(3) > paper-item:nth-child(1)").click();
};

setInterval(func, 100, $);
