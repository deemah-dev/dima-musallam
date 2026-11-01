import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProjectDetails } from '../../../models/project-details';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-msms',
  imports: [RouterLink],
  templateUrl: './msms.html',
  styleUrl: './msms.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Msms {
  private sanitizer = inject(DomSanitizer);

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  details: ProjectDetails = {
    id: 3,
    title: 'Mechanic Shop Management System',
    shortDescription:
      'A full-stack mechanic shop management solution built with ASP.NET Core 10 & Angular, leveraging Clean Architecture, CQRS with MediatR, DDD, and hybrid caching.',
    fullDescription:
      'An enterprise-grade backend and full-stack system engineered for vehicle repair shop operations. It handles customer management, work order lifecycles, technician scheduling, repair task tracking, and invoicing. Built with strict separation of concerns following Clean Architecture and Domain-Driven Design (DDD), incorporating pipelines for validation and performance caching, domain event dispatching, and comprehensive integration testing.',
    architechture: {
      title: 'Clean Architecture & Vertical Slice',
      layers: ['Domain', 'Application', 'Infrastructure', 'Api'],
    },
    designPatterns: [
      'CQRS with MediatR',
      'Domain-Driven Design (DDD)',
      'Vertical Slice Architecture',
      'Result Pattern',
      'Factory Method',
      'Pipeline Behaviors (Validation & Caching)',
      'Domain Events (Pub/Sub)',
      'Domain Service / Policy Pattern',
      'Dependency Injection & Inversion',
    ],
    technologies: [
      'C# / .NET 10',
      'ASP.NET Core Web API',
      'Angular',
      'Entity Framework Core',
      'SQL Server',
      'MediatR',
      'JWT & ASP.NET Identity',
      'OpenAPI / Scalar',
      'xUnit & Testcontainers',
    ],
    features: [
      {
        id: 1,
        title: 'Authentication & Identity Integration',
        description:
          'Secure JWT access token generation, refresh token management, and ASP.NET Core Identity authentication with role-based policies.',
        content: [
          {
            id: 1,
            title: 'Authentication Flow & Automated Token Refresh',
            url: 'https://www.youtube.com/embed/5Xwz9GDwuSc?si=IgHyCzC1XzcKGRl3',
          },
        ],
      },
      {
        id: 2,
        title: 'Customers & Vehicle Management',
        description:
          'Full customer lifecycle handling, linking multiple vehicles per customer, and managing vehicle metadata.',
        content: [
          {
            id: 1,
            title: 'Customer Registration & Vehicle Linking',
            url: 'https://www.youtube.com/embed/bzRc7WHZnBk?si=dAPMmT6AIFVEmoSN',
          },
          {
            id: 2,
            title: 'Updating Customer & Vehicle Metadata',
            url: 'https://www.youtube.com/embed/CnsS2i89e-w?si=uuPdfODae8gxatjr',
          },
        ],
      },
      {
        id: 3,
        title: 'Repair Tasks Management',
        description:
          'Defining repair task catalogs, pricing structures, and tracking parts used during repair operations.',
        content: [
          {
            id: 1,
            title: 'Cataloging New Repair Service Task',
            url: 'https://www.youtube.com/embed/6JQGyRjMfig?si=Tjd1RI9u2I9qzR6d',
          },
          {
            id: 2,
            title: 'Modifying Repair Task Details & Rates',
            url: 'https://www.youtube.com/embed/Qk4IM21KziA?si=EASTsO1ZEpZfohnf',
          },
        ],
      },
      {
        id: 4,
        title: 'Employees & Technician Tracking',
        description:
          'Employee profile management, skill categorization, and work-related data assignment.',
        content: [
          {
            id: 1,
            title: 'Technician Directory & Profile Inspection',
            url: 'https://www.youtube.com/embed/uT23AC0b3w4?si=uHEbdGnnfXmP5Sp7',
          },
        ],
      },
      {
        id: 5,
        title: 'Scheduling Support',
        description:
          'Daily technician scheduling, conflict resolution using WorkOrderPolicy, and work planning queries.',
        content: [
          {
            id: 1,
            title: 'Work Order Creation & Schedule Allocation',
            url: 'https://www.youtube.com/embed/hdLcWdTLF6w?si=VzEwVqToXzzE2VDi',
          },
        ],
      },
      {
        id: 6,
        title: 'Work Orders Lifecycle',
        description:
          'Complete lifecycle orchestration: task assignment, spot updates, technician reallocation, and state transitions using DDD invariants.',
        content: [
          {
            id: 2,
            title: 'Reallocating Service Bay & Parking Spot',
            url: 'https://www.youtube.com/embed/i9win4vXVY0?si=9l_6UZvfbfL1Va8G',
          },
          {
            id: 3,
            title: 'Reassigning Assigned Technician',
            url: 'https://www.youtube.com/embed/61OuobDG4IQ?si=cktVgP_nMy1C6AKQ',
          },
          {
            id: 4,
            title: 'Modifying Assigned Repair Tasks List',
            url: 'https://www.youtube.com/embed/MobCO4sr3_Y?si=zLpI0qsjILS8d6mS',
          },
          {
            id: 5,
            title: 'Work Order State Transitions & Workflow Processing',
            url: 'https://www.youtube.com/embed/MNWOWxi8eNI?si=yT4E5Ay5xITbtNVZ',
          },
        ],
      },
      {
        id: 7,
        title: 'Billing & Invoicing',
        description:
          'Automated invoice generation for completed work orders and tracking payment settlement states.',
        content: [
          {
            id: 1,
            title: 'Invoice Generation & Cost Breakdown',
            url: 'https://www.youtube.com/embed/Y3LvrIstdyU?si=-UcNaXfwaGXBuktN',
          },
          {
            id: 2,
            title: 'Settling Payment & Invoice Finalization',
            url: 'https://www.youtube.com/embed/Xxeg3ywYf2k?si=h1IIrfaznGVuqIIO',
          },
        ],
      },
    ],
    githubUrl: 'https://github.com/deemah-dev/MechanicShop-Frontend',
  };
}
