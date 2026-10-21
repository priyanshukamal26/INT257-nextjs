let session={}

export async function setSession(username) {
    session.username=username;
}

export async function getSession() {
    return session;
}

export async function deleteSession() {
    session={};
}