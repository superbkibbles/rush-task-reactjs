import client from "./client";

const login = (email, password) => client.post("/auth/login", { email, password });

const requests = {
    login,
};

export default requests;
