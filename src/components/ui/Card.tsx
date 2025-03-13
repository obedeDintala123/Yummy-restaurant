interface CardProps {
    title: string;
    imageSrc: string;
    imageAlt: string;
    category: string;
    description: string;
    price: number;
    buttonTitle: string;
    iconImage: string;
    iconImageAlt: string;
    buttonOnclick?: () => void;
}

const Card = ({ imageSrc, title, imageAlt, category, description, price, buttonTitle, iconImage, iconImageAlt, buttonOnclick }: CardProps) => {
    return (
        <div className="flex flex-col justify-between md:gap-3 gap-2 w-full bg-white rounded-bl-2xl rounded-br-2xl">
            <img src={imageSrc} alt={imageAlt} className="rounded-tl-2xl rounded-tr-2xl h-52" />

            <div className="flex flex-col justify-between md:gap-4 gap-3 px-3 w-full">
                <h2 className="md:text-xl text-base font-semibold">{title}</h2>
                <span className="font-medium text-sm md:text-base">{category}</span>
                <span className="font-light md:text-[14px] text-[8px]">{description}</span>
            </div>

            <div className="flex justify-between items-center p-3">
                <span className="md:text-2xl text-xl">{price}$</span>

                <button title={buttonTitle} className="cursor-pointer" onClick={buttonOnclick}>
                    <img src={iconImage} alt={iconImageAlt} className="w-[80%] md:w-full" />
                </button>
            </div>
        </div>
    )
}

export default Card;