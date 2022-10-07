const mainContainer = document.getElementById('#container');

const users = [
    {
        name: "Mark Webber",
        message: "reacted to your recent post My first tournament today!",
        img: "images/avatar-mark-webber.webp",
        time: "1m ago"
    },
    {
        name: "Angela Gray",
        message:  "followed you",
        img:  "images/avatar-angela-gray.webp",
        time: "5m ago"
    },
    {
        name: "Jacob Thompson",
        message: "has joined your group Chess Club",
        img: "images/avatar-jacob-thompson.webp",
        time: "1 day ago"
    },
    {
        name: "Rizky Hasanuddin",
        message: "sent you a private message",
        img: "images/avatar-rizky-hasanuddin.webp",
        time: "5 days ago"
    },
    {
        name: "Kimberly Smith",
        message: "commented on your picture",
        img: "images/avatar-kimberly-smith.webp",
        time: "1 week ago"
    },
    {
        name: "Nathan Peterson",
        message: "reacted to your recent post 5 end-game strategies to increase your win rate",
        img: "images/avatar-nathan-peterson.webp",
        time: "2 weeks ago"
    },
    {
        name: "Anna Kim",
        message: "left the group Chess Club",
        img: "images/avatar-anna-kim.webp",
        time: "2 weeks ago"
    }
]
function displayNotification()
