export const signup = (user, success, error) => {
  $.ajax({
    datatype: 'json',
    url: '/api/users',
    type: 'POST',
    data: {user: user},
    success,
    error
  });
};

export const login = (user, success, error) => {
  $.ajax({
    datatype: 'json',
    url: '/api/session',
    type: 'POST',
    data: {user: user},
    success,
    error
  });
};

export const logout = success => {
  $.ajax({
    datatype: 'json',
    url: '/api/session',
    type: 'DELETE',
    success,
    error: () => {
      console.log("Logout error");
    }
  });
};
