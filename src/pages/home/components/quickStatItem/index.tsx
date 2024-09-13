import "./index.css"

const QuickStat = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="item-wrapper">
      <p className="item-label">{label}</p>
      <p className="item-value">{value}</p>
    </div>
  );
}

export default QuickStat;
