export const styles = `
    .card * {
        margin: 0;
        padding: 0;
    }
    .card {
        line-height: 1.5;
        font-family: Arial;
    }
    .author-area {
        background: #303031;
        color: #fff;
        padding: 1rem;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
    }
    .author-profile-photo{
        width: 92px;
        height: 92px;
        border-radius: 50%;
    }
    .author-name {
        font-weight: bold;
        font-size: 1.2rem;
    }
    .blogposts-area {
        background: #18191a;
        color: #fff;
        padding: 1rem;
    }
    .blogposts-area > a {
        text-decoration: none;
        color: #fff;
    }
    .post-title {
        font-size: 1.5rem;
        margin-bottom: .75rem;
    }
    .post-date-and-reactions{
        display: flex;
        margin-bottom: .75rem;
    }
    .post-date,
    .post-reactions {
        font-size: 0.875rem;
        color: rgb(189, 189, 189);
        display: flex;
        align-items: center;
        margin-right: 1rem;
    }
    .post-svg{
        width: 1rem;
        height: 1rem;
        margin-right: 0.5rem;
        fill: currentColor;
    }
    .post-brief {
        font-size: 1rem;
        margin-bottom: .75rem;
        color: rgb(189, 189, 189);
    }
    .post-cover-image{
        width: 100%;
    }
`;