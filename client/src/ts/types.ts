export type UserSignUpData = {
    login: string,
    email: string,
    password: string,
}

export type UserSignInData = {
    email: string,
    password: string,
}

export type CustomVideo = {
    source: File,
    url: string,
}
