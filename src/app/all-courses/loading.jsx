// import { Spinner } from '@heroui/react';
const Loading = () => {
    return (
        <div className="bg-zinc-700 min-h-screen flex justify-center items-center">
            <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
};
 
export default Loading;