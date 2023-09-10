import Button from '../../ui/Button';
import { useCheckout } from './useCheckout';

const CheckoutButton = ({ bookingId }: { bookingId: number }) => {
  const { checkout, isCheckingOut } = useCheckout();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}>
      Check out
    </Button>
  );
};

export default CheckoutButton;
