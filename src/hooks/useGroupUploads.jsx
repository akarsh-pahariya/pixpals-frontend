import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getGroupImages } from '../services/groupService';
import { showErrorToast } from '../components/ui/Toast';
import {
  setIsLoadingToFalse,
  setIsLoadingToTrue,
} from '../store/slices/loadingSlice';

const useGroupUploads = (groupId, cursor, loadMore, onMoreImages) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (loadMore === false && cursor !== null) return;
    dispatch(setIsLoadingToTrue());
    const getImagesOfGroup = async () => {
      try {
        const response = await getGroupImages(groupId, cursor);
        onMoreImages(response.data);
      } catch (error) {
        showErrorToast(error.message);
        navigate('/dashboard');
      } finally {
        dispatch(setIsLoadingToFalse());
      }
    };

    getImagesOfGroup();
  }, [groupId, loadMore, dispatch, navigate]);
};

export default useGroupUploads;
