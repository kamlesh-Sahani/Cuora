// "use client";

// import { useParams } from 'next/navigation';
// import CodeEditor from '@uiw/react-textarea-code-editor';
// import { useEffect, useState } from 'react';
// import { Eye, EyeOff } from 'lucide-react';
// import { Problem, ProblemData } from './types'; // Adjust the import path as needed

// const ProblemDetail: React.FC = () => {
//   const { id } = useParams(); // Get the dynamic route parameter
//   const [problem, setProblem] = useState<Problem | undefined>();
//   const [showHint, setShowHint] = useState<boolean>(false);
//   const [showSolution, setShowSolution] = useState<boolean>(false);

//   useEffect(() => {
//     if (typeof id === 'string') {
//       const foundProblem = ProblemData.find((p) => p.id === parseInt(id));
//       setProblem(foundProblem);
//     }
//   }, [id]);

//   if (!problem) {
//     return <p className="text-red-500">Problem not found.</p>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
//       <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
//         <h1 className="text-3xl font-bold text-blue-600 mb-4">{problem.title}</h1>
//         <p className="text-gray-700 mb-4">{problem.description}</p>

//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-xl font-semibold text-blue-500">Hint</h3>
//           <button onClick={() => setShowHint(!showHint)} className="focus:outline-none">
//             <div className="flex items-center gap-2">
//               <p>{showHint ? 'Hide' : 'Show'}</p>
//               {showHint ? <EyeOff className="w-6 h-6 text-blue-500" /> : <Eye className="w-6 h-6 text-blue-500" />}
//             </div>
//           </button>
//         </div>
//         {showHint && <p className="text-gray-700 mb-6">{problem.hint}</p>}

//         <h3 className="text-xl font-semibold text-blue-500 mb-2">Code Compiler</h3>
//         <CodeEditor
//           value="// Write your code here"
//           language="javascript"
//           placeholder="Please enter your code."
//           minHeight={100}
//           padding={15}
//           style={{
//             fontSize: 12,
//             backgroundColor: '#f5f5f5',
//             fontFamily: 'ui-monospace, SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace',
//           }}
//           className="mb-6"
//         />

//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-xl font-semibold text-blue-500">Solution</h3>
//           <button onClick={() => setShowSolution(!showSolution)} className="focus:outline-none">
//             <div className="flex items-center gap-2">
//               <p>{showSolution ? 'Hide' : 'Show'}</p>
//               {showSolution ? <EyeOff className="w-6 h-6 text-blue-500" /> : <Eye className="w-6 h-6 text-blue-500" />}
//             </div>
//           </button>
//         </div>
//         {showSolution && <p className="text-gray-700">{problem.solution}</p>}
//       </div>
//     </div>
//   );
// };

// export default ProblemDetail;


"use client";

import { useParams } from 'next/navigation';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useEffect, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Problem, ProblemData } from './ProblemData'

const ProblemDetail: React.FC = () => {
  const { id } = useParams(); // Get the dynamic route parameter
  const [problem, setProblem] = useState<Problem | undefined>();
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showSolution, setShowSolution] = useState<boolean>(false);

  useEffect(() => {
    if (typeof id === 'string') {
      const foundProblem = ProblemData.find((p) => p.id === parseInt(id));
      setProblem(foundProblem);
    }
  }, [id]);

  if (!problem) {
    return <p className="text-red-500">Problem not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">{problem.title}</h1>
        <p className="text-gray-700 mb-4">{problem.description}</p>

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-blue-500">Hint</h3>
          <button onClick={() => setShowHint(!showHint)} className="focus:outline-none">
            <div className="flex items-center gap-2">
              <p>{showHint ? 'Hide' : 'Show'}</p>
              {showHint ? <EyeOff className="w-6 h-6 text-blue-500" /> : <Eye className="w-6 h-6 text-blue-500" />}
            </div>
          </button>
        </div>
        {showHint && <p className="text-gray-700 mb-6">{problem.hint}</p>}

        <h3 className="text-xl font-semibold text-blue-500 mb-2">Code Compiler</h3>
        <CodeEditor
          value="// Write your code here"
          language="javascript"
          placeholder="Please enter your code."
          minHeight={100}
          padding={15}
          style={{
            fontSize: 12,
            backgroundColor: '#f5f5f5',
            fontFamily: 'ui-monospace, SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace',
          }}
          className="mb-6"
        />

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-blue-500">Solution</h3>
          <button onClick={() => setShowSolution(!showSolution)} className="focus:outline-none">
            <div className="flex items-center gap-2">
              <p>{showSolution ? 'Hide' : 'Show'}</p>
              {showSolution ? <EyeOff className="w-6 h-6 text-blue-500" /> : <Eye className="w-6 h-6 text-blue-500" />}
            </div>
          </button>
        </div>
        {showSolution && <p className="text-gray-700">{problem.solution}</p>}
      </div>
    </div>
  );
};

export default ProblemDetail;
