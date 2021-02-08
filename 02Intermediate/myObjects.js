let myYoutubeVideo = {
    title: 'Loops in javascript',
    videoLength: 15,
    videoCreator: 'Manjurul Haque',
    videoDescription: 'this is a video description and a long one'
}

console.log(myYoutubeVideo);

console.log(`Hey new Video on title by ${myYoutubeVideo.title} by author ${myYoutubeVideo.videoCreator}`);

//Assignment
let myCourse = {
    name: 'JavaScript',
    author: 'Manjurul Haque',
    price: 50
}

console.log(`Hey the course ${myCourse.name} author by ${myCourse.author} and price ${myCourse.price}`);

// myYoutubeVideo.title = 'ForEach loop in JS';

// console.log(`Hey new Video on title by ${myYoutubeVideo.title} by author ${myYoutubeVideo.videoCreator}`);
// console.log(myYoutubeVideo);

let myYoutubeVideoOne = {
    title: 'Loops in javascript',
    videoLength: 15,
    videoCreator: 'Manjurul Haque',
    videoDescription: 'this is a video description and a long one'
}

let myYoutubeVideoTwo = {
    title: 'Loops in javascript',
    videoLength: 10,
    videoCreator: 'Manjurul Haque',
    videoDescription: 'this is a video description and a long one'
}

let changeVideoLength = function(myObject) {
    return {
        formatOne: `Time of this video is: ${myObject.videoLength + 2}`,
        formatTwo: `Time of this video is: ${myObject.videoLength + 2}`
    }
}

let adOne = changeVideoLength(myYoutubeVideoTwo);
console.log(adOne.formatOne);