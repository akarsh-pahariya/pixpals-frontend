import axios from 'axios';

const USER_API_URL = `${import.meta.env.VITE_API_URL}/user`;

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(
      `${USER_API_URL}/login`,
      {
        username,
        password,
      },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Login failed');
    } else if (error.request) {
      throw new Error('Unable to reach the server. Please try again.');
    } else {
      throw new Error('Something went wrong. Please try again.');
    }
  }
};

export const registerUser = async (userInfo) => {
  try {
    const response = await axios.post(`${USER_API_URL}/register`, userInfo, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Registration failed');
    } else if (error.request) {
      throw new Error('Unable to reach the server. Please try again.');
    } else {
      throw new Error('Something went wrong. Please try again.');
    }
  }
};

export const authenticateUser = async () => {
  try {
    const response = await axios.get(`${USER_API_URL}`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error.response.data.message ||
          'Please Login to get access to this route'
      );
    } else if (error.request) {
      throw new Error('Unable to reach the server. Please try again.');
    } else {
      throw new Error('Something went wrong. Please try again.');
    }
  }
};

export const changePassword = async (passwordObject) => {
  try {
    const response = await axios.post(
      `${USER_API_URL}/changePassword`,
      passwordObject,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error.response.data.message ||
          'Please Login to get access to this route'
      );
    } else if (error.request) {
      throw new Error('Unable to reach the server. Please try again.');
    } else {
      throw new Error('Something went wrong. Please try again.');
    }
  }
};

export const logout = async () => {
  try {
    const response = await axios.get(`${USER_API_URL}/logout`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error.response.data.message ||
          'Please Login to get access to this route'
      );
    } else if (error.request) {
      throw new Error('Unable to reach the server. Please try again.');
    } else {
      throw new Error('Something went wrong. Please try again.');
    }
  }
};

export const userForgetsPassword = async (user) => {
  try {
    const response = await axios.post(`${USER_API_URL}/forgot-password`, user);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error.response.data.message ||
          'Cannot process your password change request now'
      );
    } else if (error.request) {
      throw new Error('Unable to reach the server. Please try again.');
    } else {
      throw new Error('Something went wrong. Please try again.');
    }
  }
};

export const userResetsPassword = async (token, password) => {
  try {
    const response = await axios.post(
      `${USER_API_URL}/reset-password/${token}`,
      password
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error.response.data.message ||
          'Cannot process your password change request now'
      );
    } else if (error.request) {
      throw new Error('Unable to reach the server. Please try again.');
    } else {
      throw new Error('Something went wrong. Please try again.');
    }
  }
};
