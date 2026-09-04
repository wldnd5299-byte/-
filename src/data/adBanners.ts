export interface AdBannerItem {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
  alt?: string;
  link?: string;
  enabled: boolean;
}

export const AD_BANNERS: AdBannerItem[] = [
  {
    id: 'ad-1',
    title: '광고 및 제휴 배너 1',
    alt: '광고 및 제휴 배너 1',
    link: '',
    enabled: true,
  },
  {
    id: 'ad-2',
    title: '광고 및 제휴 배너 2',
    alt: '광고 및 제휴 배너 2',
    link: '',
    enabled: true,
  },
  {
    id: 'ad-3',
    title: '광고 및 제휴 배너 3',
    alt: '광고 및 제휴 배너 3',
    link: '',
    enabled: true,
  },
  {
    id: 'ad-4',
    title: '광고 및 제휴 배너 4',
    alt: '광고 및 제휴 배너 4',
    link: '',
    enabled: true,
  },
  {
    id: 'ad-5',
    title: '광고 및 제휴 배너 5',
    alt: '광고 및 제휴 배너 5',
    link: '',
    enabled: true,
  },
];
