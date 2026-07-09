const galleryData = {
    images: [
        { id: 1, url: "/gallery-assets/1.jpg", title: "Captivating Moment 1" },
        { id: 2, url: "/gallery-assets/2.jpg", title: "Captivating Moment 2" },
        { id: 3, url: "/gallery-assets/3.jpg", title: "Captivating Moment 3" },
        { id: 4, url: "/gallery-assets/4.jpg", title: "Captivating Moment 4" },
        { id: 5, url: "/gallery-assets/5.jpg", title: "Captivating Moment 5" },
        { id: 6, url: "/gallery-assets/6.jpg", title: "Captivating Moment 6" },
        { id: 7, url: "/gallery-assets/7.jpg", title: "Captivating Moment 7" },
        { id: 8, url: "/gallery-assets/8.jpg", title: "Captivating Moment 8" },
        { id: 9, url: "/gallery-assets/9.jpg", title: "Captivating Moment 9" },
        { id: 10, url: "/gallery-assets/10.jpg", title: "Captivating Moment 10" },
        { id: 11, url: "/gallery-assets/11.jpg", title: "Captivating Moment 11" },
        { id: 12, url: "/gallery-assets/12.jpg", title: "Captivating Moment 12" },
        { id: 13, url: "/gallery-assets/13.jpg", title: "Captivating Moment 13" },
        { id: 14, url: "/gallery-assets/14.jpg", title: "Captivating Moment 14" },
        { id: 15, url: "/gallery-assets/15.jpg", title: "Captivating Moment 15" },
        { id: 16, url: "/gallery-assets/16.jpg", title: "Captivating Moment 16" },
        { id: 17, url: "/gallery-assets/17.jpg", title: "Captivating Moment 17" },
        { id: 18, url: "/gallery-assets/18.jpg", title: "Captivating Moment 18" },
        { id: 19, url: "/gallery-assets/19.jpg", title: "Captivating Moment 19" },
        { id: 20, url: "/gallery-assets/20.jpg", title: "Captivating Moment 20" },
        { id: 21, url: "/gallery-assets/21.jpg", title: "Captivating Moment 21" },
        { id: 22, url: "/gallery-assets/22.jpg", title: "Captivating Moment 22" },
        { id: 23, url: "/gallery-assets/23.jpg", title: "Captivating Moment 23" },
        { id: 24, url: "/gallery-assets/24.jpg", title: "Captivating Moment 24" },
        { id: 25, url: "/gallery-assets/25.jpg", title: "Captivating Moment 25" },
        { id: 26, url: "/gallery-assets/26.jpg", title: "Captivating Moment 26" },
        { id: 27, url: "/gallery-assets/27.jpg", title: "Captivating Moment 27" },
        { id: 28, url: "/gallery-assets/28.jpg", title: "Captivating Moment 28" },
        { id: 29, url: "/gallery-assets/29.jpg", title: "Captivating Moment 29" },
        { id: 30, url: "/gallery-assets/30.jpg", title: "Captivating Moment 30" },
        { id: 31, url: "/gallery-assets/31.jpg", title: "Captivating Moment 31" },
        { id: 32, url: "/gallery-assets/32.jpg", title: "Captivating Moment 32" },
        { id: 33, url: "/gallery-assets/33.jpg", title: "Captivating Moment 33" },
        { id: 34, url: "/gallery-assets/34.jpg", title: "Captivating Moment 34" },
        { id: 35, url: "/gallery-assets/35.jpg", title: "Captivating Moment 35" },
        { id: 36, url: "/gallery-assets/36.jpg", title: "Captivating Moment 36" },
        { id: 37, url: "/gallery-assets/37.jpg", title: "Captivating Moment 37" },
        { id: 38, url: "/gallery-assets/38.jpg", title: "Captivating Moment 38" },
        { id: 39, url: "/gallery-assets/39.jpg", title: "Captivating Moment 39" },
        { id: 40, url: "/gallery-assets/40.jpg", title: "Captivating Moment 40" },
        { id: 41, url: "/gallery-assets/41.jpg", title: "Captivating Moment 41" },
        { id: 42, url: "/gallery-assets/42.jpg", title: "Captivating Moment 42" },
        { id: 43, url: "/gallery-assets/43.jpg", title: "Captivating Moment 43" },
        { id: 44, url: "/gallery-assets/44.jpg", title: "Captivating Moment 44" },
        { id: 45, url: "/gallery-assets/45.jpg", title: "Captivating Moment 45" },
        { id: 46, url: "/gallery-assets/46.jpg", title: "Captivating Moment 46" },
        { id: 47, url: "/gallery-assets/47.jpg", title: "Captivating Moment 47" },
        { id: 48, url: "/gallery-assets/48.jpg", title: "Captivating Moment 48" },
        { id: 49, url: "/gallery-assets/49.jpg", title: "Captivating Moment 49" },
        { id: 50, url: "/gallery-assets/50.jpg", title: "Captivating Moment 50" },
        { id: 51, url: "/gallery-assets/51.jpg", title: "Captivating Moment 51" },
        { id: 52, url: "/gallery-assets/52.jpg", title: "Captivating Moment 52" },
        { id: 53, url: "/gallery-assets/53.jpg", title: "Captivating Moment 53" },
        { id: 54, url: "/gallery-assets/54.jpg", title: "Captivating Moment 54" },
        { id: 55, url: "/gallery-assets/55.jpg", title: "Captivating Moment 55" },
        { id: 56, url: "/gallery-assets/56.jpg", title: "Captivating Moment 56" },
        { id: 57, url: "/gallery-assets/57.jpg", title: "Captivating Moment 57" },
        { id: 58, url: "/gallery-assets/58.jpg", title: "Captivating Moment 58" },
        { id: 59, url: "/gallery-assets/59.jpg", title: "Captivating Moment 59" },
        { id: 60, url: "/gallery-assets/60.jpg", title: "Captivating Moment 60" },
        { id: 61, url: "/gallery-assets/61.jpg", title: "Captivating Moment 61" },
        { id: 62, url: "/gallery-assets/62.jpg", title: "Captivating Moment 62" },
        { id: 63, url: "/gallery-assets/63.jpg", title: "Captivating Moment 63" },
        { id: 64, url: "/gallery-assets/64.jpg", title: "Captivating Moment 64" },
        { id: 65, url: "/gallery-assets/65.jpg", title: "Captivating Moment 65" },
        { id: 66, url: "/gallery-assets/66.jpg", title: "Captivating Moment 66" },
        { id: 67, url: "/gallery-assets/67.jpg", title: "Captivating Moment 67" },
        { id: 68, url: "/gallery-assets/68.jpg", title: "Captivating Moment 68" },
        { id: 69, url: "/gallery-assets/69.jpg", title: "Captivating Moment 69" },
        { id: 70, url: "/gallery-assets/70.jpg", title: "Captivating Moment 70" },
        { id: 71, url: "/gallery-assets/71.jpg", title: "Captivating Moment 71" },
        { id: 72, url: "/gallery-assets/72.jpg", title: "Captivating Moment 72" },
        { id: 73, url: "/gallery-assets/73.jpg", title: "Captivating Moment 73" },
        { id: 74, url: "/gallery-assets/74.jpg", title: "Captivating Moment 74" },
        { id: 75, url: "/gallery-assets/75.jpg", title: "Captivating Moment 75" },
        { id: 76, url: "/gallery-assets/76.jpg", title: "Captivating Moment 76" }
    ],
    videos: [
        {
            id: 1,
            url: "https://www.youtube.com/embed/Z-r7Ly_nAuk",
            title: "Grand Finale of Salesforce Lead India"
        },
        {
            id: 2,
            url: "https://www.youtube.com/embed/eWY9AvvNpAo",
            title: "High Tempo High Energy Carnival Craze!"
        },
        {
            id: 3,
            url: "https://www.youtube.com/embed/ifMC9ap4K9A",
            title: "Fitness and Life advice from Bollywood Legend Anil Kapoor!"
        },
        {
            id: 4,
            url: "https://www.youtube.com/embed/Qs2OtcXFC4E",
            title: "Learning some moves from the first class girl KIARA ADVANI herself!"
        },
        {
            id: 5,
            url: "https://www.youtube.com/embed/CgcXYy5yhJ0",
            title: "INFOSYS CONVERGENCE"
        },
        {
            id: 6,
            url: "https://www.youtube.com/embed/eRmJM-KXTLQ",
            title: "AMAT Conference."
        },
        {
            id: 7,
            url: "https://www.youtube.com/embed/rjb7H8fSnfg",
            title: "Cohosting for a Tech Conference"
        },
        {
            id: 8,
            url: "https://www.youtube.com/embed/c7akZOWneyc",
            title: "IPL event for RCB"
        }
    ]
};

export default galleryData;
