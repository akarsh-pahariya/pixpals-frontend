import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

const useGroupSocket = (groupId, onImagesUploaded, onImagesDeleted) => {
  const socketRef = useRef(null);
  const BACKEND_URL = `${import.meta.env.VITE_BASE_BACKEND_URL}`;

  useEffect(() => {
    socketRef.current = io(BACKEND_URL, {
      auth: {
        groupId,
      },
      withCredentials: true,
    });

    socketRef.current.on('connect', () => {
      console.log('Connected with ID:', socketRef.current.id);
    });

    socketRef.current.on('imagesUploaded', (data) => {
      onImagesUploaded(data);
    });

    socketRef.current.on('imagesDeleted', (data) => {
      onImagesDeleted(data);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);
};

export default useGroupSocket;
