interface TerapiaItemProps {
  nombre: string;
  precio: string;
  sub: string;
  ahorro?: string;
  highlight?: boolean;
}

export const ValorItem = ({ nombre, precio, sub, ahorro, highlight }: TerapiaItemProps) => {
  return (
    <div className={`menu-item ${highlight ? 'highlight-item' : ''}`}>
      <div className="item-main">
        <span className="item-name">{nombre}</span>
        <span className="item-dots"></span>
        <span className="item-price">${precio}</span>
      </div>
      <p className="item-sub">{sub}</p>
      {ahorro && (
        <div className="item-savings">
          <strong>Opciones de ahorro:</strong> {ahorro}
        </div>
      )}
    </div>
  );
};