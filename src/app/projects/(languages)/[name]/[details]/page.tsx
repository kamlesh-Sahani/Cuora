'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface ProjectDetails {
    [language: string]: {
        [details: string]: {
            description: string;
            steps: string[];
            resources: string[];
        };
    };
}

const projectDetailsData: ProjectDetails = {
    JavaScript: {
        'To-Do List App': {
            description: 'Build a simple To-Do List application using HTML, CSS, and JavaScript.',
            steps: [
                'Set up the HTML structure for the app.',
                'Style the app using CSS for a clean and responsive design.',
                'Add JavaScript functionality to add, edit, and delete tasks.',
                'Implement local storage to save tasks between sessions.',
            ],
            resources: [
                'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
                'https://www.w3schools.com/html/',
                'https://www.w3schools.com/css/',
            ],
        },
        'Currency Converter': {
            description: 'Create a currency converter app using HTML, CSS, and JavaScript.',
            steps: [
                'Set up the HTML structure for the app.',
                'Style the app using CSS for a clean and responsive design.',
                'Fetch real-time exchange rates using an API.',
                'Implement the conversion logic in JavaScript.',
            ],
            resources: [
                'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API',
                'https://www.w3schools.com/js/',
            ],
        },
        // Add more project details here...
    },
    Python: {
        'Guess the Number': {
            description: 'Create a simple number guessing game using Python.',
            steps: [
                'Set up a basic Python script.',
                'Use the random library to generate a random number.',
                'Prompt the user for their guess and provide feedback.',
                'Loop the game until the user guesses the correct number.',
            ],
            resources: [
                'https://docs.python.org/3/tutorial/',
                'https://www.learnpython.org/',
            ],
        },
    },

};

export default function ProjectDetailPage() {
    const { name, details } = useParams();
    const nameString = Array.isArray(name) ? name[0] : name;
    const detailsString = Array.isArray(details) ? details[0] : details;

    const decodeddetails = decodeURIComponent(detailsString || '');

    const [projectDetails, setProjectDetails] = useState<{
        description: string;
        steps: string[];
        resources: string[];
    } | null>(null);

    useEffect(() => {
        if (nameString && decodeddetails && projectDetailsData[nameString]) {
            const projectData = projectDetailsData[nameString][decodeddetails];
            if (projectData) {
                setProjectDetails(projectData);
            }
        }
    }, [nameString, decodeddetails]);

    if (!projectDetails) {
        return <div className="p-8">Project details not found.</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">{decodeddetails}</h1>
            <p className="mb-6 text-lg text-gray-700">{projectDetails.description}</p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Steps to Complete</h2>
            <ul className="list-decimal list-inside mb-6 space-y-2">
                {projectDetails.steps.map((step, index) => (
                    <li key={index} className="text-gray-700">{step}</li>
                ))}
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Resources</h2>
            <ul className="list-disc list-inside space-y-2">
                {projectDetails.resources.map((resource, index) => (
                    <li key={index}>
                        <a href={resource} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                            {resource}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
