import { useState } from 'react';
import type { GuestMessage } from '../types';

const STORAGE_KEY = 'wedding_guest_messages';

const loadMessages = (): GuestMessage[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const saveMessages = (messages: GuestMessage[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
};

export const useGuestBook = () => {
  const [messages, setMessages] = useState<GuestMessage[]>(loadMessages);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const addMessage = (
    name: string,
    message: string,
    attendance: GuestMessage['attendance']
  ) => {
    setIsSubmitting(true);
    setTimeout(() => {
      const newMessage: GuestMessage = {
        id: Date.now().toString(),
        name,
        message,
        attendance,
        timestamp: Date.now(),
      };
      const updated = [newMessage, ...messages];
      setMessages(updated);
      saveMessages(updated);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 800);
  };

  return { messages, addMessage, isSubmitting, submitSuccess };
};
