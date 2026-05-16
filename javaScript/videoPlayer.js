const videos = document.querySelectorAll("video")

videos.forEach(video => {
  video.addEventListener("mouseover", function () {
    this.play()
  })
  
  video.addEventListener("mouseout", function () {
    this.pause()
    this.currentTime = 0;
  })
  
  video.addEventListener("touchstart", function () {
    this.play()
  })
  
  video.addEventListener("touchend", function () {
    this.pause()
    this.currentTime = 0;
  })

  video.addEventListener("click", function () {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (this.requestFullscreen) {
      this.requestFullscreen().catch(err => {
        console.error(`Fullscreen error: ${err.message}`);
      });
    } else if (this.webkitRequestFullscreen) { /* Safari */
      this.webkitRequestFullscreen();
    } else if (this.msRequestFullscreen) { /* IE11 */
      this.msRequestFullscreen();
    }
  })
})