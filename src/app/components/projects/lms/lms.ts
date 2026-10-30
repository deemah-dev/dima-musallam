import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectDetails } from '../../../models/project-details';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lms',
  imports: [RouterLink],
  templateUrl: './lms.html',
  styleUrl: './lms.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lms {
  details: ProjectDetails = {
    id: 2,
    title: 'Library Management System',
    shortDescription: 'System for managing a library with a complete book-borrowing workflow.',
    fullDescription:
      'A RESTful APIs for managing a library system, including books, authors, users, borrowing operations and fine management. The project focuses on building a clean backend with proper CRUD operations.',
    technologies: [
      'C# .NET 8',
      'ASP.NET Core',
      'RESTful API',
      'JWT',
      'AutoMapper',
      'ADO.NET',
      'SQL Server',
      'xUnit',
      'Moq',
      'Swagger',
    ],
    architechture: {
      title: 'N-Tier Architecture',
      layers: ['Library.Core', 'Library.DAL', 'Library.BLL', 'Library.API'],
    },
    features: [
      {
        id: 1,
        title: 'Authentication',
        content: [
          {
            id: 1,
            title: 'login',
          },
        ],
      },
      {
        id: 2,
        title: 'Books Management',
        content: [
          {
            id: 1,
            title: 'Get All Books',
          },
          {
            id: 2,
            title: 'Get Book',
          },
          {
            id: 3,
            title: 'Add Book',
          },
          {
            id: 4,
            title: 'Update Book',
          },
          {
            id: 5,
            title: 'Delete Book',
          },
        ],
      },
      {
        id: 3,
        title: 'Borrowing',
        content: [
          {
            id: 1,
            title: 'Borrow Book',
          },
          {
            id: 2,
            title: 'Return Book',
          },
          {
            id: 3,
            title: 'Check Late Fine',
          },
          {
            id: 4,
            title: 'Get All Borrowing Records',
          },
        ],
      },
      {
        id: 4,
        title: 'Fines',
        content: [
          {
            id: 1,
            title: 'Get All Fines',
          },
          {
            id: 2,
            title: 'Get User Fines',
          },
        ],
      },
      {
        id: 5,
        title: 'Settings',
        content: [
          {
            id: 1,
            title: 'Get Settings',
          },
          {
            id: 2,
            title: 'Update Settings',
          },
        ],
      },
    ],
    githubUrl: 'https://github.com/deemah-dev/LibraryMS_API',
  };
}
