import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getGroupImages } from '../services/groupService';
import { showErrorToast } from '../components/ui/Toast';
import {
  setIsLoadingToFalse,
  setIsLoadingToTrue,
} from '../store/slices/loadingSlice';

const useGroupUploads = (groupId, cursor, loadMore) => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Request made');
    if (loadMore === false && cursor !== null) return;
    dispatch(setIsLoadingToTrue());
    const getImagesOfGroup = async () => {
      try {
        const response = await getGroupImages(groupId, cursor);
        setData(response.data);
      } catch (error) {
        showErrorToast(error.message);
        navigate('/dashboard');
      } finally {
        dispatch(setIsLoadingToFalse());
      }
    };

    getImagesOfGroup();
  }, [groupId, loadMore, dispatch, navigate]);

  return data;
};

export default useGroupUploads;
