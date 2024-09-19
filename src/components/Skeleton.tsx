import { Box, useStyleConfig } from "@chakra-ui/react";

interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className }: SkeletonProps) => {
  const styles = useStyleConfig("Skeleton");

  return (
    <Box
      __css={styles}
      className={className}
      bg="#263742"
      borderRadius="md"
      animation="pulse 1.5s infinite"
      display="block"
      width="100%"
      height="100%"
    />
  );
};

export default Skeleton;
