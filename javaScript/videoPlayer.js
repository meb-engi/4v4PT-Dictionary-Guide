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
})