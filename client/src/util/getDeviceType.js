const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    if (/(mobile|android|iphone|ipod|windows phone|blackberry|opera mini|iemobile|meego|symbian|ucweb)/i.test(ua)) {
        return "mobile";
    }
    // As a fallback, use screen width to differentiate
    if (window.innerWidth <= 768) {
        return "mobile";
    }
    return "desktop";
}

export default getDeviceType