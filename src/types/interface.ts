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
