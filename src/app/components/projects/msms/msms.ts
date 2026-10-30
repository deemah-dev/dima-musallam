import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProjectDetails } from '../../../models/project-details';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-msms',
  imports: [RouterLink],
  templateUrl: './msms.html',
  styleUrl: './msms.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Msms {

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
            url: 'MechanicShopVidoes/LoginAndView.mp4',
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
            url: 'MechanicShopVidoes/AddCustomer.mp4',
          },
          {
            id: 2,
            title: 'Updating Customer & Vehicle Metadata',
            url: 'MechanicShopVidoes/EditAndViewCustomer.mp4',
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
            url: 'MechanicShopVidoes/AddRepairTask.mp4',
          },
          {
            id: 2,
            title: 'Modifying Repair Task Details & Rates',
            url: 'MechanicShopVidoes/EditAndViewRepairTask.mp4',
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
            url: 'MechanicShopVidoes/ViewEmployees.mp4',
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
            url: 'MechanicShopVidoes/AddWorkOrder.mp4',
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
            url: 'MechanicShopVidoes/UpdateSpot.mp4',
          },
          {
            id: 3,
            title: 'Reassigning Assigned Technician',
            url: 'MechanicShopVidoes/UpdateTechnician.mp4',
          },
          {
            id: 4,
            title: 'Modifying Assigned Repair Tasks List',
            url: 'MechanicShopVidoes/UpdateRepairTasks.mp4',
          },
          {
            id: 5,
            title: 'Work Order State Transitions & Workflow Processing',
            url: 'MechanicShopVidoes/StatusWorkFlow.mp4',
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
            url: 'MechanicShopVidoes/IssueInvoice.mp4',
          },
          {
            id: 2,
            title: 'Settling Payment & Invoice Finalization',
            url: 'MechanicShopVidoes/SettleInvoice.mp4',
          },
        ],
      },
    ],
    githubUrl: 'https://github.com/deemah-dev/MechanicShop-Frontend',
  };
}
