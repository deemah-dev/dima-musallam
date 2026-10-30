import { SafeResourceUrl } from '@angular/platform-browser';

export interface Content {
  id: number;
  title?: string;
  url?: SafeResourceUrl;
}
