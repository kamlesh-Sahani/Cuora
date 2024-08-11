'use client'


import Link from 'next/link'
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type Difficulty = 'easy' | 'medium' | 'hard';

interface Projects {
    [language: string]: {
        easy: string[];
        medium: string[];
        hard: string[];
    };
}

const projectsData: Projects = {
    JavaScript: {
        easy: ['To-Do List App', 'Currency Converter', 'Simple Quiz Game'],
        medium: ['Weather App', 'Personal Blog', 'E-commerce Site'],
        hard: ['Real-time Chat App', 'Online Code Editor', 'Browser-based Game'],
    },
     Python: {
    easy: ['Guess the Number', 'Basic Calculator', 'Simple Web Scraper'],
    medium: ['Flask Blog', 'Django To-Do List', 'Text-based Adventure Game'],
    hard: ['AI Chatbot', 'Blockchain-based App', 'Machine Learning Model'],
  },
};

export default function ProjectsPage() {

    const { name } = useParams(); 
    const techString = Array.isArray(name) ? name[0] : name;

    const [language, setLanguage] = useState<string>(techString || 'JavaScript');
    const [difficulty, setDifficulty] = useState<Difficulty>('easy');
    const [projects, setProjects] = useState<string[]>(projectsData[language][difficulty]);

    useEffect(() => {
        if (techString && projectsData[techString]) {
            setLanguage(techString);
            setProjects(projectsData[techString][difficulty]);
        }
    }, [techString]);
    const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedDifficulty = e.target.value as Difficulty;
        setDifficulty(selectedDifficulty);
        setProjects(projectsData[language][selectedDifficulty]);
    };

    const generateRandomProject = () => {
        const difficulties: Difficulty[] = ['easy', 'medium', 'hard'];
        const randomDifficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
        const randomProject = projectsData[language][randomDifficulty][Math.floor(Math.random() * projectsData[language][randomDifficulty].length)];
        alert(`Try this project: ${randomProject} (${randomDifficulty})`);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Project Ideas</h1>
                    <div className="flex items-center space-x-4">
                        <h2 className="text-xl font-semibold">Difficulty</h2>
                        <select
                            value={difficulty}
                            onChange={handleDifficultyChange}
                            className="p-2 text-black rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <li
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
                        >
                            <Link
                                href={`/projects/${language}/${project}`}
                                className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                            >
                                {project}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
