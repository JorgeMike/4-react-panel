import { ResumenInterface } from "../types/item";

export default function ItemResumen({ label, value }: ResumenInterface) {
  return (
    <div className="item-resumen">
      <p className="text-center">{label}</p>
      <p className="info">{value}</p>
    </div>
  );
}
