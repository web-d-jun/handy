interface Menu {
  name: string;
  subName?: string;
  link?: string;
  icon?: string[];
  type: string;
}

interface LoginInfo {
  id: string;
  pw: string;
  on: () => Promise<void>;
}

interface ModalInterface {
  show: (key: string) => void;
  hide: (key: string) => void;
}
