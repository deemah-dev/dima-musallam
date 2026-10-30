import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProjectDetails } from '../../../models/project-details';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dvld',
  imports: [RouterLink],
  templateUrl: './dvld.html',
  styleUrl: './dvld.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dvld {
  private sanitizer = inject(DomSanitizer);

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  details: ProjectDetails = {
    id: 1,
    title: 'Drivers Licenses Management System',
    shortDescription:
      'System for processing new driving license applications with full exam workflow management (pass, fail, retake).',
    fullDescription:
      'A full-featured desktop system for managing the complete lifecycle of driving licenses — from first application and exam workflow to renewals, replacements, and detain/release operations — built with a clean 3-tier architecture.',
    technologies: ['C# .NET', 'ADO.Net', 'SQL Server', 'Windows Forms', 'ReaLTaiizor UI'],
    architechture: {
      title: '3-Tier Architecture',
      layers: ['DVLD.DAL', 'DVLD.BLL', 'DVLD.UI'],
    },
    features: [
      {
        id: 1,
        title: 'Authentication',
        description:
          'The system enforces strict authentication before granting access. Failed login attempts, inactive accounts, and wrong credentials each produce distinct, informative feedback — ensuring security without ambiguity. A successful login routes the user directly to their authorized workspace.',
        content: [
          {
            id: 1,
            url: '',
          },
          {
            id: 2,
            url: '',
          },
          {
            id: 3,
            title: 'Successful Login Flow',
            url: '',
          },
        ],
      },
      {
        id: 2,
        title: 'People Management',
        description:
          'Every driver and applicant is registered as a "person" in the system before any license operations can take place. This module provides full CRUD capabilities — with advanced filtering to quickly locate records, and complete person profiles that serve as the foundation for all downstream license operations.',
        content: [
          {
            id: 1,
            title: 'Filter & Search People',
            url: '',
          },
          {
            id: 2,
            title: 'Add New Person',
            url: '',
          },
          {
            id: 3,
            title: 'View Info, Edit & Delete Person',
            url: '',
          },
        ],
      },
      {
        id: 3,
        title: 'Users Management',
        description:
          'Administrators can create and manage system user accounts independently from the people registry. Each account can be activated or deactivated, have its password updated, or be removed entirely — giving full control over who has access to the system and at what level.',
        content: [
          {
            id: 1,
            title: 'Add New System User',
            url: '',
          },
          {
            id: 2,
            title: 'Update Password · Activate/Deactivate · Delete',
            url: '',
          },
        ],
      },
      {
        id: 4,
        title: 'Local Driving License Application',
        description:
          'The core workflow of the system. An applicant submits a new license application, which then enters a structured three-stage exam process — Vision Test, Written Test, and Street Test. Each test can be scheduled, passed, failed, or retaken independently. Only after passing all three tests is the license issued, at which point the person is automatically registered as a driver.',
        content: [
          {
            id: 1,
            title: 'Submit New Local License Application',
            url: '',
          },
          {
            id: 2,
            title: 'Schedule, Take & Retake Tests (Applies to All Three Stages)',
            url: '',
          },
          {
            id: 3,
            title: 'Issue License After Passing All Tests — Person Becomes a Driver',
            url: '',
          },
        ],
      },
      {
        id: 5,
        title: 'International Driving License Application',
        description:
          'Drivers holding a valid local license can apply for an international driving license directly through the system. The process validates the existing local license, collects the required data, and issues the international license — with no need to repeat the exam process.',
        content: [
          {
            id: 1,
            title: 'Apply & Issue International License',
            url: '',
          },
        ],
      },
      {
        id: 6,
        title: 'Renew Local Driving License',
        description:
          "When a license reaches its expiry date, drivers can submit a renewal application through the system. The renewal process verifies the driver's existing record, generates a new license with an updated expiry date, and archives the old one — keeping the history intact and fully traceable.",
        content: [
          {
            id: 1,
            title: 'Renew Local License',
            url: '',
          },
        ],
      },
      {
        id: 7,
        title: 'Replace a Lost or Damaged License',
        description:
          'In cases of a lost or damaged license, drivers can apply for a replacement. The system records the reason for replacement, invalidates the old license, and issues a new one with the same class and expiry.',
        content: [
          {
            id: 1,
            title: 'Replace Local License',
            url: '',
          },
        ],
      },
      {
        id: 8,
        title: 'Detain & Release Driving Licenses',
        description:
          'Authorities can detain an active license directly within the system, marking it as suspended with a recorded reason and date. When the detention period ends or the issue is resolved, the license can be formally released and restored to active status — with the full detain/release history preserved.',
        content: [
          {
            id: 1,
            title: 'Detain a License',
            url: '',
          },
          {
            id: 2,
            title: 'Release a Detained License',
            url: '',
          },
        ],
      },
    ],
    githubUrl: 'https://github.com/deemah-dev/DVLD',
  };
}
