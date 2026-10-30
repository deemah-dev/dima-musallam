import { inject, Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class EmbedUrl {
  private sanitizer = inject(DomSanitizer);

  public getEmbedUrl(driveUrl: string): SafeResourceUrl {
    if (!driveUrl) return '';

    const previewUrl = driveUrl.replace(/\/view.*$/, '/preview').replace(/\/edit.*$/, '/preview');
    return this.sanitizer.bypassSecurityTrustResourceUrl(previewUrl);
  }
}
