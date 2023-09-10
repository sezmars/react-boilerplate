import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CabinForm from './CabinForm.tsx';

export const AddCabin = () => {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
};
