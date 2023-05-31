export declare enum Role {
    Admin = "admin",
    Staff = "staff",
    User = "user"
}
export declare class User {
    id: number;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    phone: number;
    role: Role;
}
