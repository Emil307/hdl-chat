import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import type { IChat } from './model';

export const useChats = () => {
    const [chats, setChats] = useState<IChat[]>([]);
    const [chatsLoading, setLoading] = useState(false);
    const [chatsError, setError] = useState('');

    const API = import.meta.env.VITE_API;

    async function getChats() {
      try {
        setError('');
        setLoading(true);
        const response = await axios.get<IChat[]>(`${API}/channels`);
        setChats(response.data as any);
        setLoading(false);
      } catch (e: unknown) {
        const error = e as AxiosError;
        setLoading(false);
        setError(error.message);
      }
    }

    useEffect(() => {
      getChats();
    }, []);

    return { chats, chatsLoading, chatsError }
}
