import { Box, Button, ButtonText } from "@/components/ui";

const GradientButton = ({ label = "", styles = {}, ...props }) => {
  return (
    <Box {...styles}>
      <Button
        size="md"
        variant="solid"
        action="primary"
        className="bg-gradient-to-r from-primary-1000 to-secondary-1000 "
        {...props}
      >
        <ButtonText>{label}</ButtonText>
      </Button>
    </Box>
  );
};
export { GradientButton };
