<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Skill;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Create Admin User
        User::updateOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Admin User',
                'password' => Hash::make('password'),
            ]
        );

        // 2. Create Sample Projects
        $projects = [
            [
                'title' => 'Minimalist E-Commerce Platform',
                'slug' => 'minimalist-e-commerce-platform',
                'description' => 'A clean and sleek e-commerce shopping experience built with React and Laravel. Features session-based cart, secure checkout, and interactive admin control panel.',
                'tech_stack' => ['Next.js', 'Tailwind CSS', 'Laravel', 'SQLite'],
                'image_path' => null,
                'link_demo' => 'https://shop.example.com',
                'link_repo' => 'https://github.com/example/shop',
                'order' => 1,
            ],
            [
                'title' => 'Personal Portfolio Website',
                'slug' => 'personal-portfolio-website',
                'description' => 'A modern minimalist portfolio highlighting professional details, project showcases, and skill categorizations. Uses Tailwind CSS v4 and Next.js 16.',
                'tech_stack' => ['Next.js 16', 'Tailwind CSS v4', 'Laravel 13', 'Sanctum'],
                'image_path' => null,
                'link_demo' => 'https://portfolio.example.com',
                'link_repo' => 'https://github.com/example/portfolio',
                'order' => 2,
            ],
            [
                'title' => 'Real-time Project Planner',
                'slug' => 'real-time-project-planner',
                'description' => 'A collaborative task management application enabling real-time dashboard updates, Drag-and-Drop Kanban boards, and task categorization metrics.',
                'tech_stack' => ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
                'image_path' => null,
                'link_demo' => 'https://planner.example.com',
                'link_repo' => 'https://github.com/example/planner',
                'order' => 3,
            ],
        ];

        foreach ($projects as $projectData) {
            Project::updateOrCreate(
                ['slug' => $projectData['slug']],
                $projectData
            );
        }

        // 3. Create Categorized Skills
        $skills = [
            // Frontend
            ['name' => 'React', 'category' => 'frontend', 'proficiency_level' => 'Advanced'],
            ['name' => 'Next.js', 'category' => 'frontend', 'proficiency_level' => 'Advanced'],
            ['name' => 'Tailwind CSS', 'category' => 'frontend', 'proficiency_level' => 'Advanced'],
            ['name' => 'TypeScript', 'category' => 'frontend', 'proficiency_level' => 'Intermediate'],
            
            // Backend
            ['name' => 'Laravel', 'category' => 'backend', 'proficiency_level' => 'Advanced'],
            ['name' => 'PHP', 'category' => 'backend', 'proficiency_level' => 'Advanced'],
            ['name' => 'Node.js', 'category' => 'backend', 'proficiency_level' => 'Intermediate'],
            ['name' => 'PostgreSQL', 'category' => 'backend', 'proficiency_level' => 'Intermediate'],
            
            // Tools
            ['name' => 'Git & GitHub', 'category' => 'tools', 'proficiency_level' => 'Advanced'],
            ['name' => 'Docker', 'category' => 'tools', 'proficiency_level' => 'Intermediate'],
            ['name' => 'Figma', 'category' => 'tools', 'proficiency_level' => 'Intermediate'],
            ['name' => 'VS Code', 'category' => 'tools', 'proficiency_level' => 'Advanced'],
        ];

        foreach ($skills as $skillData) {
            Skill::updateOrCreate(
                ['name' => $skillData['name']],
                $skillData
            );
        }
    }
}
