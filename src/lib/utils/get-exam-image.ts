export function getExamImage(title: string): string {
    const images: Record<string, string> = {
        "html quiz": "/assets/images/html.png",
        "css quiz": "/assets/images/css.png",
        "bootstrap quiz": "/assets/images/bootstrap.png",
        "javascript quiz": "/assets/images/JS.png",
        "angular quiz": "/assets/images/Angular.png",
        "react quiz": "/assets/images/React.png",
    };

    return images[title.toLowerCase()] || "/assets/images/quiz-time.png";
}