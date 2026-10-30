import { Component } from '@angular/core';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skillCategories: Skill[] = [
    {
      category: 'Backend Development',
      items: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'Redis'],
    },

    {
      category: 'Software Architecture',
      items: [
        'Clean Architecture',
        'CQRS',
        'SOLID',
        'Dependency Injection',
        'Design Patterns',
        'N-Tier Architecture',
      ],
    },

    {
      category: 'Frontend Development',
      items: ['Angular', 'TypeScript', 'HTML', 'JavaScript'],
    },

    {
      category: 'Testing & Quality',
      items: ['Unit Testing', 'Integration Testing', 'xUnit', 'NSubstitute', 'Testcontainers'],
    },

    {
      category: 'Tools & DevOps',
      items: ['Git', 'GitHub', 'GitHub Actions'],
    },
  ];
}
