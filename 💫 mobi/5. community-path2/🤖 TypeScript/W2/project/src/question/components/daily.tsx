interface DailyProps {
  title: string;
  content: string;
}

const Daily: React.FC<DailyProps> = ({ title, content }) => {
  return (
    <div>
      <div>DAILY TODO</div>
      <div>제목: {title}</div>
      <div>내용: {content}</div>
    </div>
  );
};

export default Daily;
