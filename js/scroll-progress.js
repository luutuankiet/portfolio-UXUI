document.getElementsByTagName('body')[0].onscroll = () => {
    const currentScrollPosition = document.documentElement.scrollTop;
    const fullPageHeight = document.documentElement.scrollHeight;
    const firstPageHeight = document.documentElement.clientHeight;
    const scrollHeight = fullPageHeight - firstPageHeight;
    const scrollPosititionPercent = Math.round(currentScrollPosition/scrollHeight*100);
    
    document.getElementById("progress").style.width = `${scrollPosititionPercent}%`;
  };