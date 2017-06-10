import { role_reducer, rolelist_reducer } from './role.reducer';
import { Role } from '../../models/role';
import * as fromRoles from './role.reducer';
import { LoadRolesSuccessAction } from './role.actions';

describe('RoleReducer', () => {

  describe('undefined action in rolelist', () => {
    it('should return the default state', () => {
      const action = {} as any;
      const result = rolelist_reducer(undefined, action);
      expect(result).toEqual(fromRoles.initialRoleListState);
    });
  });

  describe('undefined action in role', () => {
    it('should return the default state', () => {
      const action = {} as any;
      const result = role_reducer(undefined, action);
      expect(result).toEqual(fromRoles.initialRoleState);
    });
  });
    
});