import "./pagination.style";
import { Container, ControlBtn, PageBtn } from "./pagination.style";

const Pagination = ({ totalData, dataLimit, page, setPage }) => {
  const pageCount = Math.ceil(totalData / dataLimit);

  return (
    <Container>
      <ControlBtn onClick={() => setPage(page - 1)} disabled={page === 1}>
        {"<"}
      </ControlBtn>
      <div>
        {Array(pageCount)
          .fill()
          .map((_, i) => (
            <PageBtn
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </PageBtn>
          ))}
      </div>
      <ControlBtn
        onClick={() => setPage(page + 1)}
        disabled={page === pageCount}
      >
        {">"}
      </ControlBtn>
    </Container>
  );
};

export default Pagination;

Pagination.defaultProps = {
  onClick: undefined,
};
