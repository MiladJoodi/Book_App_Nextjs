import Image from "next/image";

const BookCard = ({ title, description, coverImage }: any) => {
    return (
        <div className="cardStyle">
            <img src={coverImage} alt={title} className="imageStyle"/>
            <div className="contentStyle">
                <h3 className="titleStyle">{title}</h3>
                <p className="descriptionStyle">{description}</p>
            </div>
        </div>
    );
}

export default BookCard;