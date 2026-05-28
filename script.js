const videos = document.querySelectorAll(".placeholder video");

let currentVideo = null;

videos.forEach(video => {

    video.addEventListener("click", async() => {

        // stop other video first
        if (currentVideo && currentVideo !== video) {
            currentVideo.pause();
            currentVideo.currentTime = 0;
            currentVideo.muted = true;
        }

        // if same video is playing → pause it
        if (!video.paused) {
            video.pause();
            video.currentTime = 0;
            video.muted = true;
            currentVideo = null;
            return;
        }

        // MOBILE SAFE PLAY (important order)
        video.muted = false;
        video.volume = 1.0;

        try {
            await video.play();
            currentVideo = video;
        } catch (err) {
            console.log("Play blocked:", err);
        }

    });

});
