export function shouldShowSearch(pathname: string) {
    return pathname === "/user-dashboard/exams" || pathname === "/admin-dashboard/exams";
}