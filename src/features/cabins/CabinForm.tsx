import Input from '../../ui/Input';
import Form from '../../ui/Form.tsx';
import Button from '../../ui/Button.tsx';
import FileInput from '../../ui/FileInput.tsx';
import Textarea from '../../ui/Textarea.tsx';
import { useForm } from 'react-hook-form';
import { ICabin } from '../../interfaces/cabin.ts';
import FormRow from '../../ui/FormRow.tsx';
import { useEditCabin } from './useEditCabin.ts';
import { useCreateCabin } from './useCreateCabin.ts';

const CabinForm = ({
  cabinToEdit = {},
  onCloseModal,
}: {
  cabinToEdit?: Partial<ICabin>;
  onCloseModal?: () => void;
}) => {
  const { isCreating, createCabin } = useCreateCabin();
  const { isEditing, editCabin } = useEditCabin();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  const onSubmit = (data: Partial<ICabin>) => {
    const image = typeof data.image === 'string' ? data.image : data.image![0];

    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image } as Partial<ICabin>, id: editId! },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
    else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
  };

  const onError = () => {};

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)} type={onCloseModal ? 'modal' : 'regular'}>
      <FormRow label="Cabine name" error={errors.name?.message?.toString()}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register('name', {
            required: 'This field is requried',
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors.maxCapacity?.message?.toString()}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register('maxCapacity', {
            required: 'This field is requried',
            min: {
              value: 1,
              message: 'Capacity should be at least 1',
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors.regularPrice?.message?.toString()}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register('regularPrice', {
            required: 'This field is requried',
            min: {
              value: 1,
              message: 'Capacity should be at least 1',
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors.discount?.message?.toString()}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register('discount', {
            required: 'This field is requried',
            validate: (value) => +value! <= +getValues().regularPrice! || 'Discount should be less than regular price',
          })}
        />
      </FormRow>

      <FormRow label="Description for website" error={errors.description?.message?.toString()}>
        <Textarea
          id="description"
          disabled={isWorking}
          defaultValue=""
          {...register('description', {
            required: 'This field is requried',
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register('image', {
            required: editId ? false : 'This field is requried',
          })}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset" onClick={() => onCloseModal?.()}>
          Cancel
        </Button>
        <Button disabled={isWorking}>{editId ? 'Edit Cabin' : 'Create new cabin'}</Button>
      </FormRow>
    </Form>
  );
};

export default CabinForm;
