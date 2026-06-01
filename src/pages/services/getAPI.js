const API_LIST = [
    "https://tuyen-sinh-26-27-be-10.onrender.com",
    "https://tuyen-sinh-26-27-be-10-1.onrender.com",
    "https://tuyen-sinh-26-27-be-10-2.onrender.com",
];

const getRandomApi = () => {
    return API_LIST[Math.floor(Math.random() * API_LIST.length)];
};

export default getRandomApi;