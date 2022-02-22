const loginUser = async (credentials) => {
    return await fetch("https://dev-api.mstars.mn/admin/login",
        {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
}



const registerUser = async (credentials) => {
    return await fetch("https://dev-api.mstars.mn/admin/register/",
        {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
};
const userinfoStorage = (userInfo) => {
    localStorage.setItem("token", userInfo.token);
    localStorage.setItem("userInfo", JSON.stringify(userInfo.data));

};
export const userService = {
    loginUser,
    registerUser,
    userinfoStorage

}