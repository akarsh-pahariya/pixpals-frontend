import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showErrorToast, showSuccessToast } from '../components/ui/Toast';
import {
  setIsLoadingToFalse,
  setIsLoadingToTrue,
} from '../store/slices/loadingSlice';
import { googleLogin } from '../services/authService';
import { addUserInfo } from '../store/slices/userSlice';

export const useGoogleAuthHandlers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    dispatch(setIsLoadingToTrue());

    try {
      const userData = await googleLogin(credentialResponse.credential);
      dispatch(addUserInfo(userData.data.user));
      showSuccessToast('Login Successful!');
      navigate('/dashboard');
    } catch (error) {
      showErrorToast(error.message);
    }
    dispatch(setIsLoadingToFalse());
  };

  const handleGoogleLoginError = () => {
    console.error('Google Login Failed');
    showErrorToast('Google login failed. Please try again.');
  };

  return { handleGoogleLoginSuccess, handleGoogleLoginError };
};
