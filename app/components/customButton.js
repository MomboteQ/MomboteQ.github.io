const CustomButton = ({ url, text }) => {
    return (
        <a
            href={url}
            className="text-[.9rem] leading-none font-bold text-ctp-surface0 bg-ctp-green w-fit rounded-[.9rem] py-[.85rem] px-[1.3rem] transition-shadow duration-[.3s] hover:shadow-[0_0_1rem_0_#a6e3a1] cursor-pointer"
        >
            {text}
        </a>
    );
};

export default CustomButton;
