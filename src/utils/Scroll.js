export const handleScroll = (ref) => {
    window.scrollTo({
        top: ref.offsetTop,
        left: 0,
        behavior: "smooth",
    });
};