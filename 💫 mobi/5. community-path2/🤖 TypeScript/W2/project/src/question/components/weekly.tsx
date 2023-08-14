interface WeeklyProps {
  total: Date;
}

const Weekly: React.FC<WeeklyProps> = ({ total }) => {
  return (
    <div>
      <div>WEEKLY TODO</div>
      <div>총 날짜: {total + ""}</div>
    </div>
  );
};

export default Weekly;
