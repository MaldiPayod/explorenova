function loadVideo() {
    const videoContainer = document.getElementById("intro-video");

    const iframe = document.createElement("iframe");

    iframe.src = "https://www.youtube-nocookie.com/embed/CL4-GEwyDPM";
    iframe.title = "Novaliches video";
    iframe.allowFullscreen = true;
    iframe.allow = "encrypted-media; picture-in-picture";

    videoContainer.replaceChildren(iframe);
}