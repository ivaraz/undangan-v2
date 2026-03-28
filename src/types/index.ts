export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface GuestMessage {
  id: string;
  name: string;
  message: string;
  attendance: 'hadir' | 'tidak_hadir' | 'mungkin';
  timestamp: number;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}
