const video = document.getElementById('videoelm');
const constraints = {
    video: {
        width: {
            min: 1280,
            ideal: 1920,
            max: 2560,
        },
        height: {
            min: 720,
            ideal: 1080,
            max: 1440
        },

    }
};

if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            console.log('abc');
            video.srcObject = stream;
        })
}
// if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
//     const stream = await navigator.mediaDevices.getUserMedia(constraints);
//     video.srcObject = stream;
//     play.classList.add('d-none');
//     pause.classList.remove('d-none');
//     screenshot.classList.remove('d-none');
//     streamStarted = true;
// }