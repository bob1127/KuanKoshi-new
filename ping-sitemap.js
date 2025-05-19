fetch("https://www.google.com/ping?sitemap=https://www.example.com/sitemap.xml")
  .then(res => {
    if (res.ok) {
      console.log("已通知 Google 抓取 sitemap");
    } else {
      console.error("通知失敗");
    }
  });
