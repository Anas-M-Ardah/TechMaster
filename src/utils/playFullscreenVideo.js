// src/utils/playFullscreenVideo.js
// Plays a video src fullscreen via a throwaway <video> element, removing it
// once the viewer exits fullscreen. Used by gallery-style click-to-play
// tiles (Footer, home page Projects) instead of embedding a persistent
// player for every thumbnail.
export function playFullscreenVideo(videoSrc) {
    const videoElement = document.createElement('video');
    videoElement.src = videoSrc;
    videoElement.controls = true;
    videoElement.style.width = '100%';
    videoElement.style.height = '100%';
    document.body.appendChild(videoElement);

    const requestFullscreen =
        videoElement.requestFullscreen ||
        videoElement.mozRequestFullScreen ||
        videoElement.webkitRequestFullscreen ||
        videoElement.msRequestFullscreen;
    if (requestFullscreen) {
        requestFullscreen.call(videoElement);
    }

    videoElement.onfullscreenchange = () => {
        if (!document.fullscreenElement) {
            videoElement.remove();
        }
    };
}
