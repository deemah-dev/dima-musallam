import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  myProjects: Project[] = [
    {
      title: 'Mechanic Shop Management System',
      description:
        'A full-stack mechanic shop management system for managing customers, vehicles, repair tasks, work orders, and billing operations.',
      technologies: ['ASP.NETCore', 'Angular', 'SQL Server', 'Redis'],
      demoRoute: '/projects/msms',
    },
    {
      title: 'Library Management System',
      description: 'System for managing a library with a complete book-borrowing workflow.',
      technologies: ['C# .NET', 'ASP.NETCore', 'RESTful API', 'SQL Server', 'xUnit', 'Moq'],
      githublink: 'https://github.com/deemah-dev/LibraryMS_API',
      demoRoute: '/projects/lms',
    },
    {
      title: 'Drivers Licenses Management System',
      description:
        'System for processing new driving license applications with full exam workflow management (pass, fail, retake).',
      technologies: ['C# .NET', 'ADO.Net', 'WinForms', 'SQL Server'],
      githublink: 'https://github.com/deemah-dev/DVLD',
      demoRoute: '/projects/dvld',
    },
  ];
}
