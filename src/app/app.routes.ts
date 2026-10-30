import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Dvld } from './components/projects/dvld/dvld';
import { Lms } from './components/projects/lms/lms';
import { Msms } from './components/projects/msms/msms';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projects/dvld', component: Dvld },
  { path: 'projects/lms', component: Lms },
  { path: 'projects/msms', component: Msms },
  { path: '**', redirectTo: '' },
];
