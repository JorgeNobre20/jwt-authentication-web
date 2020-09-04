export type User = {
    id: number;
    username: string;
}

export type LoginResponse = {
    user: User;
    token: string;
};