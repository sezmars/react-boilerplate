import { ChangeEvent, useState } from 'react';

import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';

import { useUser } from './useUser';
import { useUpdateUser } from './useUpdateUser';

const UpdateUserDataForm = () => {
  const { user } = useUser();
  console.log(user);
  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(user?.user_metadata?.fullName);
  const [avatar, setAvatar] = useState<File | null>(null);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      },
    );
  };

  const handleCancel = () => {
    setFullName(user?.user_metadata?.fullName);
    setAvatar(null);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={user?.email} disabled />
      </FormRow>

      <FormRow label="Full name">
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow label="Avatar image">
        <FileInput id="avatar" accept="image/*" onChange={(e) => setAvatar(e.target.files![0])} disabled={isUpdating} />
      </FormRow>

      <FormRow>
        <Button type="reset" variation="secondary" disabled={isUpdating} onClick={handleCancel}>
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update account</Button>
      </FormRow>
    </Form>
  );
};

export default UpdateUserDataForm;
