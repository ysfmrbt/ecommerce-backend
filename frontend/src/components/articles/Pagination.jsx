import { Button, Flex } from "@radix-ui/themes";

const Pagination = ({
  handlePrevPage,
  handleNextPage,
  handlePageChange,
  totalPages,
  currentPage,
}) => {
  return (
    <Flex direction="row" gap="3" p="3">
      <Button
        variant="surface"
        onClick={() => handlePrevPage()}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      {Array.from({ length: totalPages }, (_, i) => (
        <Button
          variant="outline"
          key={i}
          onClick={() => handlePageChange(i + 1)}
          disabled={currentPage === i + 1}
        >
          {i + 1}
        </Button>
      ))}
      <Button
        variant="surface"
        onClick={() => handleNextPage()}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </Flex>
  );
};

export default Pagination;
