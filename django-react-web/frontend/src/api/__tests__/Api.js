import UserApi from '../UserApi';
import UserAuthApi from '../UserAuthApi';

/* Grouping Tests */
describe('Test: User Auth Api', () => {

  it('Login with empty password credentials', () => {
    const res = UserAuthApi.login({email: "example@hotmail.com"});
    expect(res).toEqual(undefined);
  });

  it('Login with empty email credentials', () => {
    const res = UserAuthApi.login({password: "swag"});
    expect(res).toEqual(undefined);
  });

  it('Login with filled credentials', () => {
    const res = UserAuthApi.login({email: "example@hotmail.com", password: "swag"});
    var isPromise = Promise.resolve(res) == res;
    expect(isPromise).toEqual(true);
  });

  it('Registering with correct fields', () => {

    const data = {
      email: "example@hotmail.com",
      username: "username",
      password: "password",
      first_name: "first name",
      last_name: "last name"
    }

    const res = UserAuthApi.register(data);
    var isPromise = Promise.resolve(res) == res;
    expect(isPromise).toEqual(true);
  });
  
});

