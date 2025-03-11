import "./Card.css";
type CardProps = {
  text: string;
  header: string;
  footer: string;
};

const Card = ({ text, header, footer }: CardProps) => {
  return (
      <div className="card">
        <div className="header">{header}</div>
        <div className="text">{text}</div>
        <div className="footer">{footer}</div>
      </div>
  );
};

export default Card;
