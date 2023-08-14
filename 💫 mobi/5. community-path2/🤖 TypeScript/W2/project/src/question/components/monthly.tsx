interface MonthlyProps {
  goal: string;
}

const Monthly: React.FC<MonthlyProps> = ({ goal }) => {
  return (
    <div>
      <div>MONTLY TODO</div>
      <div>이번 달 목표: {goal}</div>
    </div>
  );
};

export default Monthly;
