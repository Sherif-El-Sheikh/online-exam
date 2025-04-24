declare type PageHeaderProps = {
    title: string,
    description?: string,
}

declare type UserProfileProps = {
    user: {
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        phone: string;
        createdAt: string;
        role: string;
    }
};