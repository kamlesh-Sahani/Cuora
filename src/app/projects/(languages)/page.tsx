
import Link from 'next/link';

const technologies = [
    'JavaScript',
    'Python',
    'Java',
    'Ruby',
    'PHP',
    'C++',
    'TypeScript',
    'Go',
];

export default function TechnologiesPage() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Languages & Technologies</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((tech) => (
                    <li
                        key={tech}
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
                    >
                        <Link href={`/projects/${tech}`} className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                            {tech}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
