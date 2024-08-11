"use client";

import { useParams } from "next/navigation";
import CodeEditor from "../CodeEditor/CodeEditor";
import { useEffect, useState } from "react";
import { Eye, EyeOff, Moon, Sun } from "lucide-react";
import { Problem, ProblemData } from "./ProblemData";

const ProblemDetail: React.FC = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState<Problem | undefined>();
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [showBlack, setShowBlack] = useState<boolean>(true);

  useEffect(() => {
    if (typeof id === "string") {
      const foundProblem = ProblemData.find((p) => p.id === parseInt(id));
      setProblem(foundProblem);
    }
  }, [id]);

  if (!problem) {
    return <p className="text-red-500">Problem not found.</p>;
  }

  return (
    <div className="min-h-screen   bg-gray-100 flex flex-col items-center p-8">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="lg:text-3xl text-2xl font-bold text-blue-600 mb-4">
          {problem.title}
        </h1>
        <p className="text-gray-700 mb-4">{problem.description}</p>

        <div className="flex flex-col p-4 shadow-inner bg-gray-50/50 rounded-md mb-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-yellow-500">Hint</h3>
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center gap-2 focus:outline-none"
            >
              <p>{showHint ? "Hide" : "Show"}</p>
              {showHint ? (
                <EyeOff className="w-6 h-6 text-blue-500" />
              ) : (
                <Eye className="w-6 h-6 text-blue-500" />
              )}
            </button>
          </div>
          <div>
            {showHint && <p className="text-gray-700 mb-6">{problem.hint}</p>}
          </div>
        </div>

        <div className="flex items-center justify-between  mb-4">
          <h3 className="text-xl font-bold text-gray-700 ">Code Compiler</h3>
          <button
            onClick={() => setShowBlack(!showBlack)}
            className="flex items-center gap-2 focus:outline-none"
          >
            {showBlack ? (
              <>
                <Sun className="w-6 h-6 text-yellow-500" />
              </>
            ) : (
              <>
                <Moon className="w-6 h-6 text-blue-900" />
              </>
            )}
          </button>
        </div>

        {showBlack ? (
          <div className="bg-black text-gray-500 md:p-4 rounded-lg">
            <CodeEditor />
          </div>
        ) : (
          <div className="bg-gray-50/50 text-gray-500 md:p-4 rounded-lg shadow-inner">
            <CodeEditor />
          </div>
        )}

        <div className="flex flex-col p-4 shadow-inner mt-8 bg-gray-50/50 rounded-md mb-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-green-500">Solution</h3>
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="flex items-center gap-2 focus:outline-none"
            >
              <p>{showSolution ? "Hide" : "Show"}</p>
              {showSolution ? (
                <EyeOff className="w-6 h-6 text-blue-500" />
              ) : (
                <Eye className="w-6 h-6 text-blue-500" />
              )}
            </button>
          </div>
          <div>
          {showSolution && <p className="text-gray-700">{problem.solution}</p>}
          </div>
   
        </div>
      </div>
    </div>
  );
};

export default ProblemDetail;
