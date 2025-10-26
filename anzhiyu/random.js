var posts=["2025/10/13/web开发/","2025/10/26/java/","2025/09/05/计算机组成原理/","2025/09/16/数据结构/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };