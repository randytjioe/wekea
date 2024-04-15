const EDIT_PROFILE_FIELD = [
  {
    label: 'Nama',
    key: 'name',
  },
  {
    label: 'Username',
    key: 'username',
  },
  {
    label: 'Bio',
    key: 'bio',
    multiline: true,
  },
  {
    label: 'User ID',
    key: 'userId',
    disabled: true,
  },
  {
    label: 'Email',
    key: 'email',
  },
  {
    label: 'Nomor Telepon',
    key: 'phone',
  },
];

const initialValues = {
  name: 'Jhon Doe',
  username: 'johndoe',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  email: 'johndoe@test.id',
  phone: '081234567890',
  userId: '1234567890',
  gender: 'male',
  birthdate: new Date(),
};

export { EDIT_PROFILE_FIELD, initialValues };
