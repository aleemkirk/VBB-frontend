import {
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Box,
  Chip
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/rootReducer';
import * as actions from '../../redux/actions';
import { User } from '../../redux/users/users.types';

const userOptions = (users: User[]) =>
  users.map((user) => (
    <MenuItem key={user.id} value={user.id}>
      <ListItemText primary={`${user.name}`} />
    </MenuItem>
  ));

interface Props {
  selectedUser: number;
  handleSelectUser: (userIds: number) => void;
  isRequired?:boolean;
}

const MentorUserDropdown = ({ selectedUser, handleSelectUser, isRequired}: Props) => {
  const users = useSelector((state: AppState) => state.library.mentors);
  const dispatch = useDispatch();

  const [actvieUserOptions, setActvieUserOptions] = useState<any>([])

  // useEffect(() => {
  //   dispatch(actions.getUsers());
  // }, [dispatch]);


  useEffect(() => {
    if (users !== undefined && users !== null) {
      var tempArr:any = []
      users.forEach(element => {
        tempArr.push({id:element.user?.pk, name:`${element.user?.firstName} ${element.user?.lastName}`, value:element.user?.pk})
      });

      console.log(tempArr)
      setActvieUserOptions(tempArr)
    }
  }, [users]);

  const handleSelect = (e: SelectChangeEvent<number>) => {
    console.log(e)
    const value = e.target.value;
    handleSelectUser(value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="multi-language-select">Select User</InputLabel>
      <Select
        label="Select Your Users"
        labelId="multi-user-select"
        id="select-users-dropdown"
        required={isRequired ? true : false}
        value={selectedUser}
        onChange={handleSelect}

      >
        {userOptions(actvieUserOptions)}
      </Select>
    </FormControl>
  );
};

export default MentorUserDropdown;